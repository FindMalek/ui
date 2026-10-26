#!/bin/bash
# Runs a command once one of a few machine-wide test slots is free, so parallel
# sessions don't all run browsers at once and slow every run down.
# Usage: scripts/test-slot.sh <command...>   (UI_SDK_TEST_SLOTS sets the count, default 2).
# Example: scripts/test-slot.sh npx playwright test specs/slider --project react

slots=${UI_SDK_TEST_SLOTS:-2}
dir=/private/tmp/ui-sdk-test-slots
mkdir -p "$dir"

claim() {
  for i in $(seq 1 "$slots"); do
    local slot="$dir/$i"
    if mkdir "$slot" 2>/dev/null; then
      echo $$ > "$slot/pid"
      echo "$slot"
      return 0
    fi
    # A slot whose owner has exited is free again.
    local owner
    owner=$(cat "$slot/pid" 2>/dev/null)
    if [ -n "$owner" ] && ! kill -0 "$owner" 2>/dev/null; then
      rm -rf "$slot"
    fi
  done
  return 1
}

waited=0
until slot=$(claim); do
  [ $((waited % 60)) -eq 0 ] && echo "[test-slot] waiting for a free slot (${waited}s)."
  sleep 5
  waited=$((waited + 5))
done

# Headless Edge leaves a ~155 MB folder in the temp directory on every launch
# (675 of them filled 18 GB on 2026-10-09). Remove the ones older than 30
# minutes after each run, so browsers still running keep theirs.
clean_edge_temp() {
  [ "$(uname)" = Darwin ] || return 0
  find "${TMPDIR:-/tmp}" -maxdepth 1 -name 'com.microsoft.edgemac.*' -mmin +30 -exec rm -rf {} + 2>/dev/null
  return 0
}

trap 'rm -rf "$slot"; clean_edge_temp' EXIT
trap 'exit 130' INT TERM
"$@"
