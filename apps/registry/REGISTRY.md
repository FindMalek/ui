# Registry

`apps/registry` is a private npm registry for the `@ui-sdk` packages, deployed as its own Vercel project and served at the root of its host, so people can install them on any machine without access to this repo. Tarballs live in a private Blob store, and each person's token is checked against Global Config (formerly Edge Config). Nothing is public. Without a token every request gets a 401.

## Set up once

1. In the registry's Vercel project, create a **private** Blob store and a Global Config, or connect the ones the docs project used while it served the registry, for Production, Preview and Development, so the site and `vercel env pull` both get them. Vercel then sets `BLOB_STORE_ID` (or `BLOB_READ_WRITE_TOKEN` on older stores) and `GLOBAL_CONFIG` (or `EDGE_CONFIG`). Redeploy after connecting a store.
2. Turn on Web Analytics for the registry project. Each tarball download is a `download` event with `user`, `package` and `version`, under Events in the Analytics tab. Custom events need a Pro or Enterprise team.
3. The registry project uses Standard Protection, so preview deployments stay behind Vercel SSO and only production is public. npm can't sign in, so it only ever sends its token. The docs project keeps its full protection, since it no longer serves the registry.

## Release

```bash
cd apps/registry && vercel env pull .env.local   # The Blob credentials. Pull again if they expire.
pnpm release
```

This builds every package, typechecks the packed packages as a strict consumer would (`pnpm check:packages`) and stops if any declaration fails, writes the docs into each one as Markdown (`docs/`, from `scripts/package-docs.mjs`), stamps them all with `0.0.0-<UTC time>.g<commit>`, uploads the tarballs and points `latest` at them. `pnpm release --dir <folder>` writes to a folder instead, to check a release locally.

## Give someone access

```bash
SITE_URL=https://<registry domain> pnpm invite alice
```

This saves `token_alice`, the token's SHA-256, in Global Config through the Vercel CLI (logged in, with the `global-config` command; 65 has it), then prints the token and the `.npmrc` lines to send. It finds the Global Config in `apps/registry/.env.local`. Running it again replaces the token. Deleting the item revokes it.

They put the lines in `~/.npmrc`, then install as usual:

```ini
@ui-sdk:registry=https://<registry domain>/
//<registry domain>/:_authToken=uisdk_alice_...
```

```bash
npm install @ui-sdk/react @ui-sdk/core   # npm update picks up new releases.
pnpm add @ui-sdk/react @ui-sdk/core      # pnpm update --latest picks up new releases.
npm whoami --registry https://<registry domain>/
```

## How it works

`app/[[...path]]/route.ts` hands every request to `lib/registry.ts`, which answers the requests installers make: a package's versions (`/@ui-sdk%2f<name>`), a version's tarball (`/@ui-sdk/<name>/-/<file>.tgz`), streamed from the private store, and `npm whoami` (`/-/whoami`). `lib/registry-store.ts` reads the Blob store and Global Config. `scripts/release.mjs` writes the layout the registry reads: `packages/@ui-sdk/<name>/index.json` beside each tarball. A token reads `uisdk_<username>_<secret>`, so the registry can find that username's hash with one Global Config read.
