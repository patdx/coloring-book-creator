import { useAppState, type PageSize } from './use-app-state'

export function Settings() {
  const pageSize = useAppState((state) => state.pageSize)
  const setPageSize = useAppState((state) => state.setPageSize)
  const margin = useAppState((state) => state.margin)
  const setMargin = useAppState((state) => state.setMargin)

  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <label htmlFor="page-size">Page Size</label>
      <select
        id="page-size"
        value={pageSize}
        className="py-0.5"
        onChange={(e) => setPageSize(e.target.value as PageSize)}
      >
        <option value={'A4' satisfies PageSize}>A4</option>
        <option value={'LETTER' satisfies PageSize}>Letter</option>
      </select>

      <label htmlFor="margin">Margin</label>
      <input
        type="checkbox"
        id="margin"
        checked={margin}
        onChange={(e) => setMargin(e.target.checked)}
      />
    </div>
  )
}
