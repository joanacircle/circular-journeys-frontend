function ProductItem({
  name,
  price,
  img,
  count,
  // setCount,
  updateCount,
  id,
  deleteProduct
}) {
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                // setCount(count + 1)
                updateCount(id, { count: count - 1 })
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                // setCount(count + 1)
                updateCount(id, { count: count + 1 })
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            {price}{' '}
            <span
              className="close"
              onClick={() => {
                deleteProduct(id)
              }}
            >
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
