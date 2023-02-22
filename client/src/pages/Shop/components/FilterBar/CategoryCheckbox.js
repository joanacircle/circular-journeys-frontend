import './CategoryCheckbox.scss'

const CategoryCheckbox = ({ value, handleSelected, categories }) => {


  return (
    <>
      <div className="checkbox-card">
        <label className='checkbox-label'>
          <input
            type="checkbox"
            className="icheck"
            value={value}
            checked={categories.includes(value)}
            onChange={handleSelected}
          />{' '}
          <h5 className='checkbox-h5'>{value}</h5>
        </label>
      </div>
    </>
  )
}

export default CategoryCheckbox
