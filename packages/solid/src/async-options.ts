import {
  createAsyncOptions,
  type AsyncOptionsContext,
  type AsyncOptionsOptions,
  type AsyncOptionsState,
} from "@ui-sdk/core/async-options"
import { createSignal, onCleanup } from "solid-js"

/**
 * Options loaded for what the user types, latest first. Pass `items`, `status`
 * and `setQuery` (as `onQueryChange`) to a combobox with `filter={false}`.
 * The state is reactive: a part that reads `items` or `status` follows every load.
 * @stable
 */
function useAsyncOptions<Item>(
  load: (
    query: string,
    context: AsyncOptionsContext,
  ) => Promise<Item[] | { items: Item[]; hasMore?: boolean }>,
  options?: AsyncOptionsOptions,
) {
  const helper = createAsyncOptions<Item>(load, options)
  const [state, setState] = createSignal<AsyncOptionsState<Item>>(helper.getState())
  onCleanup(helper.subscribe(() => setState(helper.getState())))
  // Cancels on unmount, so a load that lands later changes nothing.
  onCleanup(() => helper.cancel())
  return {
    /** The items loaded for the text. */
    get items() {
      return state().items
    },
    /** The text the items were loaded for. */
    get query() {
      return state().query
    },
    /** Whether a load is running, failed, or neither. */
    get status() {
      return state().status
    },
    /** What the last load failed with. */
    get error() {
      return state().error
    },
    /** Whether `loadMore()` has another page to load. */
    get hasMore() {
      return state().hasMore
    },
    setQuery: helper.setQuery,
    reload: helper.reload,
    loadMore: helper.loadMore,
  }
}

export { createAsyncOptions } from "@ui-sdk/core/async-options"
export type {
  AsyncOptions,
  AsyncOptionsContext,
  AsyncOptionsOptions,
  AsyncOptionsState,
  AsyncOptionsStatus,
} from "@ui-sdk/core/async-options"

export { useAsyncOptions }
