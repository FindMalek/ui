import {
  createAsyncOptions,
  type AsyncOptionsContext,
  type AsyncOptionsOptions,
  type AsyncOptionsState,
} from "@ui-sdk/core/async-options"
import { onScopeDispose, shallowRef } from "vue"

/**
 * Options loaded for what the user types, latest first. Returns reactive state
 * and `setQuery`, for a combobox with `:filter="false"`.
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
  const state = shallowRef<AsyncOptionsState<Item>>(helper.getState())
  onScopeDispose(helper.subscribe(() => (state.value = helper.getState())))
  onScopeDispose(() => helper.cancel())
  return { state, setQuery: helper.setQuery, reload: helper.reload, loadMore: helper.loadMore }
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
