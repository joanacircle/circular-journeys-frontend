import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import './Shop.scss'
import FilterBar from './components/FilterBar/'
import ProductList from './components/ProductList/'
import SearchBar from './components/SearchBar/'
import SortBar from './components/SortBar/'
// data
import { data } from './data/'

const Shop = () => {
  const [products, setProducts] = useState([])
  // 2. 排序、搜尋後的資料
  const [displayProducts, setDisplayProducts] = useState([])
  // 載入spinner
  const [isLoading, setIsLoading] = useState(false)

  // x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  // Spinner
  const spinner = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  useEffect(() => {
    setIsLoading(true)
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <div className="">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Filter</h5>
                  </div>

                  <div className="col-md-9">

                    <SearchBar />

                    <div className="d-flex justify-between">
                      <h5>商品列表</h5>
                      <h5 className="text-danger">
                        <Link to="../checkout" title="結帳">結帳</Link>
                      </h5>
                      <SortBar />

                    </div>
                    <hr />
                    <br />
                    {isLoading
                      ? (
                        spinner
                      )
                      : (
                        <ProductList products={displayProducts} />
                      )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <h1>Filter Bars</h1>
              </div>
              <div className="col-md-9">
                <h2>商品列表</h2>
              </div>

            </div>
          </div>
        </div>
      </div> */}
    </>
  )

  // // sample users
  // const [users, setUsers] = useState([
  //   {
  //     product_id: '000001',
  //     product_name: '載入中',
  //     description: '00'
  //   },
  //   {
  //     product_id: '000002',
  //     product_name: '載入中',
  //     description: '00'
  //   },
  //   {
  //     product_id: '000003',
  //     product_name: '載入中',
  //     description: '00'
  //   },
  //   {
  //     product_id: '000004',
  //     product_name: '載入中',
  //     description: '00'
  //   }
  // ])

  // const [loader, setLoader] = useState(false)

  // const getUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
  //     )
  //     console.log(response.data)

  //     if (Array.isArray(response.data)) {
  //       setUsers(response.data)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   setLoader(true)
  //   getUsers()
  // }, [])

  // // 自動於2秒後關閉載入指示動畫
  // useEffect(() => {
  //   if (loader) {
  //     setTimeout(() => {
  //       setLoader(false)
  //     }, 2000)
  //   }
  // }, [loader])

  // const loaderIcon = (
  //   <div className="d-flex justify-content-center">
  //     <div className="spinner-border text-danger" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   </div>
  // )
  // /*
  // 放在index.html header
  // <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
  //   integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
  // */

  // const display = (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>ID</th>
  //         <th>產品</th>
  //         <th>敘述</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {users.map((v, i) => {
  //         return (
  //           <tr key={v.id}>
  //             <td>{v.id}</td>
  //             <td>{v.name}</td>
  //             <td>{v.age}</td>
  //           </tr>
  //         )
  //       })}
  //     </tbody>
  //   </table>
  // )
  // return <>
  //   <div className='shop-content'>
  //     <h1>暫存</h1>
  //     {loader ? loaderIcon : display}
  //     {/* {display} */}
  //   </div>
  // </>
}

export default Shop
