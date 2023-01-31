import ProductItem from './ProductItem'

function OrderList({ products, setProducts }) {
  // 更新products
  // params:
  // id 目前要更新的資料id
  // valueObject: object  ex. { count:3 }
  const updateCount = (id, valueObject) => {
    const newProducts = products.map((v2, i2) => {
      return id === v2.id ? { ...v2, ...valueObject } : { ...v2 }
    })

    setProducts(newProducts)
  }

  // params: id 目前要刪除的資料id
  const deleteProduct = (id) => {
    // 刪除這個id的資料 相當於 回傳一個新的陣列不包含此id的資料
    setProducts(products.filter((v2, i2) => id !== v2.id))
  }

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3 items
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          const { id, name, price, img, count } = v

          return (
            <ProductItem
              key={id}
              name={name}
              price={price}
              img={img}
              count={count}
              updateCount={updateCount}
              id={id} // updateCount需要id
              deleteProduct={deleteProduct}
            // setCount={(newCount) => {
            //   updateCount(id, { count: newCount })
            // }}
            // setCount={(newCount) => {
            //   // 相當於更新物件陣列中其一的資料
            //   const newProducts = products.map((v2, i2) => {
            //     return id === v2.id ? { ...v2, count: newCount } : { ...v2 }
            //   })

            //   setProducts(newProducts)
            // }}
            />
          )
        })}

        <div className="back-to-shop">
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
