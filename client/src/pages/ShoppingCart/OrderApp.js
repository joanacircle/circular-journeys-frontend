import { useState } from 'react'
// import './OrderApp.scss'
// 以下相當於 import OrderList from './OrderList/index'
import OrderList from './OrderList'
import Summary from './Summary'

const sampleData = [
  {
    id: 1,
    name: '白色T-shirt',
    price: 100,
    img: 'https://i.imgur.com/ba3tvGm.jpg'
  },
  {
    id: 2,
    name: '黑色T-shirt',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg'
  },
  {
    id: 3,
    name: '咖啡色T-shirt',
    price: 300,
    img: 'https://i.imgur.com/1GrakTl.jpg'
  }
]

function OrderApp() {
  // 擴充product物件多一個count屬性
  const [products, setProducts] = useState(
    sampleData.map((v, i) => ({ ...v, count: 1 }))
  )

  // 計算總數量(數量 累加)
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
      total += products[i].count
    }

    return total
  }

  // 計算總價(單價x數量 累加)
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < products.length; i++) {
      total += products[i].count * products[i].price
    }

    return total
  }

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList products={products} setProducts={setProducts} />
          <Summary
            totalNumber={calcTotalNumber()}
            totalPrice={calcTotalPrice()}
          />
        </div>
      </div>
    </>
  )
}

export default OrderApp
