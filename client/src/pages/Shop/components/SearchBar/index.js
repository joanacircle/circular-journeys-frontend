import React from 'react'

function SearchBar(props) {
  const { searchWord, setSearchWord } = props
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="以商品名稱搜尋"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
    </>
  )
}

export default SearchBar
