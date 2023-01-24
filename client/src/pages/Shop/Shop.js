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
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <h1>Filter</h1>
                  </div>

                  <div className="col-md-9">
                    <div className="d-flex justify-between">
                      <h2 className="display-6">商品列表</h2>
                      <h2 className="text-danger display-6 font-weight-bold">
                        <Link to="../checkout" title="結帳">
                          結帳
                        </Link>
                      </h2>
                    </div>
                    <hr />

                    <div className="padding"></div>

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
