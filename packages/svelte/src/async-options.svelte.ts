import {
  createAsyncOptions,
  type AsyncOptionsContext,
  type AsyncOptionsOptions,
  type AsyncOptionsState,
} from "@ui-sdk/core/async-options"
import { onDestroy } from "svelte"

/**
 * Options loaded for what the user types, latest first. Returns the state,
 * which reading tracks, and `setQuery`, for a combobox with `filter={false}`.
 * Call it in a component's script.
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
  let state = $state.raw<AsyncOptionsState<Item>>(helper.getState())
  const unsubscribe = helper.subscribe(() => (state = helper.getState()))
  onDestroy(() => {
    unsubscribe()
    helper.cancel()
  })
  return {
    /** The items, the status, whether more pages exist and the last error. Reading it tracks it. */
    get state() {
      return state
    },
    setQuery: helper.setQuery,
    reload: helper.reload,
    loadMore: helper.loadMore,
  }
}

export { useAsyncOptions }
