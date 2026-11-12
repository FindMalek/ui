import { Toggle } from "@ui-sdk/react/toggle"
import { Component, type ReactNode } from "react"
import type { TaggedTile as TileData } from "./types"

class Boundary extends Component<
  { id: string; children: ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <p className="tile-error" role="alert">
          {this.props.id} failed: {this.state.error.message}
        </p>
      )
    }
    return this.props.children
  }
}

type Props = {
  tile: TileData
  selected: ReadonlySet<string>
  onToggle: (name: string, pressed: boolean) => void
}

export function Tile({ tile, selected, onToggle }: Props) {
  const { Demo } = tile
  return (
    <article
      className="tile"
      data-size={tile.size ?? "s"}
      data-tone={tile.tone ?? "white"}
      id={tile.id}
    >
      <div className="tile-stage">
        <Boundary id={tile.id}>
          <Demo />
        </Boundary>
      </div>
      <footer className="tile-copy">
        <p className="tile-title">
          <strong>{tile.title}</strong> {tile.blurb}
        </p>
        <div className="tile-uses" aria-label="Uses">
          {tile.uses.map((name) => (
            <Toggle
              key={name}
              className="tile-use"
              pressed={selected.has(name)}
              onPressedChange={(pressed) => onToggle(name, pressed)}
            >
              {name}
            </Toggle>
          ))}
        </div>
      </footer>
    </article>
  )
}
