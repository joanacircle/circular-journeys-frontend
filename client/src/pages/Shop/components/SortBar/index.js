import './SortBar.scss'

const SortBar = (props) => {
  const { sortBy, setSortBy } = props
  return (
    <>
      <div className="row">
        <div className="btn-group">
          <select
            className="sortbar-select form-select form-select-sm"
            aria-label=".form-select-sm example"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">選擇排序</option>
            <option value="1">價格排序-由少至多</option>
            <option value="2">價格排序-由多至少</option>
          </select>
        </div>
      </div>
    </>

  )
}

export default SortBar
