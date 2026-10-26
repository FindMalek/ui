import * as React from "react"
import {
  createChange,
  createConnect,
  css,
  definePrimitive,
  live,
  type ChangeDetails,
  type ConnectDraft,
  type ConnectReason,
} from "@ui-sdk/core"
import { createParts, usePart, type PartProps } from "@ui-sdk/react/primitive"

type FlowNode = { value: string; label: string; x: number; y: number }

type FlowEdge = { from: string; to: string }

type FlowState = { nodes: FlowNode[]; edges: FlowEdge[]; connecting: ConnectDraft | null }

type FlowOptions = {
  nodes: FlowNode[]
  onEdgesChange?: (edges: FlowEdge[], details: ChangeDetails<ConnectReason>) => void
}

const size = { width: 112, height: 40 }

const nodeOf = (port: string) => port.slice(0, port.lastIndexOf(":"))

function portPoint(nodes: FlowNode[], port: string) {
  const node = nodes.find((other) => other.value === nodeOf(port))!
  return { x: node.x + (port.endsWith(":out") ? size.width : 0), y: node.y + size.height / 2 }
}

function curve(from: { x: number; y: number }, to: { x: number; y: number }) {
  const reach = Math.max(30, Math.hypot(to.x - from.x, to.y - from.y) / 2)
  return `M${from.x},${from.y} C${from.x + reach},${from.y} ${to.x - reach},${to.y} ${to.x},${to.y}`
}

const flow = definePrimitive({
  name: "flow",
  options: { nodes: "value", onEdgesChange: "callback" },
  state: (options: FlowOptions): FlowState => ({ nodes: options.nodes, edges: [], connecting: null }),
  live: ["connecting"],
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    const connect = createConnect<FlowState>(context, {
      slot: "port",
      draft: "connecting",
      canConnect: (from, to) =>
        from.endsWith(":out") &&
        to.endsWith(":in") &&
        nodeOf(from) !== nodeOf(to) &&
        !store.get().edges.some((edge) => edge.from === from && edge.to === to),
      point: (clientX, clientY) => {
        const box = context.element("root")!.getBoundingClientRect()
        return { x: clientX - box.left, y: clientY - box.top }
      },
      label: (port) => store.get().nodes.find((node) => node.value === nodeOf(port))!.label,
      connect: (from, to, details) => change("edges", [...store.get().edges, { from, to }], details),
    })
    return {
      connect,
      nodeKeydown(event: KeyboardEvent, node: string) {
        if (connect.keydown(event)) return
        if (event.key.toLowerCase() !== "c" || event.ctrlKey || event.metaKey) return
        event.preventDefault()
        connect.start(`${node}:out`)
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { edges: FlowEdge[] }>({
      state: (state) => ({ edges: state.edges }),
      attrs: () => ({ style: css({ position: "relative" }) }),
    }),
    node: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, { key }) => {
        const node = state.nodes.find((other) => other.value === key)!
        const to = state.edges
          .filter((edge) => nodeOf(edge.from) === key)
          .map((edge) => state.nodes.find((other) => other.value === nodeOf(edge.to))!.label)
        return {
          role: "button",
          tabindex: "0",
          "aria-description": to.length ? `Connected to ${to.join(", ")}.` : undefined,
          style: css({
            position: "absolute",
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${size.width}px`,
            height: `${size.height}px`,
          }),
        }
      },
      on: { keydown: (event, { api, key }) => api.nodeKeydown(event, key) },
    }),
    port: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (_state, { key }) => ({
        "aria-hidden": "true",
        "data-side": key.endsWith(":out") ? "right" : "left",
        style: "touch-action:none",
      }),
      live: live<FlowState, any, { value: string }>((state, { api, key }) => ({
        "data-connect": api.connect.role(state, key),
      })),
      on: { pointerdown: (event, { el, api, key }) => api.connect.pointerdown(event, key, el!) },
    }),
    edge: slot<{ value: string; from: string; to: string }>({
      props: { value: "string", from: "string", to: "string" },
      attrs: (state, { props }) => ({
        d: curve(portPoint(state.nodes, props.from), portPoint(state.nodes, props.to)),
      }),
    }),
    draft: slot({
      live: live<FlowState, any, {}>((state) => {
        const draft = state.connecting
        if (!draft) return { d: "" }
        const end = draft.to ? portPoint(state.nodes, draft.to) : draft
        return { d: curve(portPoint(state.nodes, draft.from), end) }
      }),
    }),
  }),
})

const parts = createParts(flow, { root: "div", node: "div", port: "span", draft: "path" })

const Flow = parts.Root

const FlowNode = parts.Node

const FlowPort = parts.Port

function FlowEdgePath({ edge, ...props }: { edge: FlowEdge } & PartProps<"path">) {
  return usePart(
    flow,
    "edge",
    { value: `${edge.from}>${edge.to}`, from: edge.from, to: edge.to },
    props,
    "path",
  )
}

const FlowDraft = parts.Draft

const nodes: FlowNode[] = [
  { value: "prompt", label: "Prompt", x: 8, y: 70 },
  { value: "answer", label: "Answer", x: 200, y: 16 },
  { value: "summary", label: "Summary", x: 200, y: 124 },
]

const port =
  "absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-background bg-muted-foreground/60 data-[side=left]:-left-1.5 data-[side=right]:-right-1.5 data-[connect=candidate]:bg-foreground/60 data-[connect=source]:bg-foreground data-[connect=target]:scale-150 data-[connect=target]:bg-foreground"

function Example() {
  return (
    <Flow nodes={nodes} className="h-45 w-80 text-sm">
      {({ edges }) => (
        <>
          <svg className="pointer-events-none absolute inset-0 size-full overflow-visible fill-none stroke-2">
            {edges.map((edge) => (
              <FlowEdgePath key={`${edge.from}>${edge.to}`} edge={edge} className="stroke-foreground" />
            ))}
            <FlowDraft className="stroke-foreground/60 [stroke-dasharray:4_4]" />
          </svg>
          {nodes.map((node) => (
            <FlowNode
              key={node.value}
              value={node.value}
              aria-label={node.label}
              className="grid place-items-center rounded-lg border border-border bg-background shadow-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {node.label}
              {node.value === "prompt" ? (
                <FlowPort value="prompt:out" className={port} />
              ) : (
                <FlowPort value={`${node.value}:in`} className={port} />
              )}
            </FlowNode>
          ))}
        </>
      )}
    </Flow>
  )
}

export {
  Example,
  flow,
  Flow,
  FlowDraft,
  FlowEdgePath,
  FlowNode,
  FlowPort,
  type FlowEdge,
  type FlowOptions,
  type FlowState,
}
