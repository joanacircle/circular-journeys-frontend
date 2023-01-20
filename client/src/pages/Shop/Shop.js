import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Shop.scss'
// 改為資料夾方式中的index.js
import FilterBar from './components/FilterBar/'
import ProductList from './components/ProductList/'
import SearchBar from './components/SearchBar/'
import SortBar from './components/SortBar/'

import { data } from './data/'
const Shop = () => {
  // 產品用的資料
  // 1. 從伺服器來的原始資料
  const [products, setProducts] = useState([])
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayProducts, setDisplayProducts] = useState([])

  // 下面四個狀態是對應到四種不同的表單元素
  const [tags, setTags] = useState([])
  const tagTypes = ['大螢幕', '小螢幕', '一般螢幕', '蘋果', '安卓']

  // radio
  const [priceRange, setPriceRange] = useState('所有')
  const priceRangeTypes = ['所有', '1萬以下', '1~2萬']

  const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  // 載入指示的spinner動畫用的
  const [isLoading, setIsLoading] = useState(false)

  // x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  // 初始化資料-didMount
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)

    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setProducts(data)
    setDisplayProducts(data)
  }, [])

  // 四個表單元素的處理方法
  const handleSearch = (products, searchWord) => {
    let newProducts = [...products]

    if (searchWord.length) {
      newProducts = products.filter((product) => {
        // includes -> String API
        return product.name.includes(searchWord)
      })
    }

    return newProducts
  }

  const handleSort = (products, sortBy) => {
    let newProducts = [...products]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newProducts = [...newProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === '2') {
      newProducts = [...newProducts].sort((a, b) => b.price - a.price)
    }

    // 預設用id 小至大
    if (sortBy === '' && newProducts.length > 0) {
      newProducts = [...newProducts].sort((a, b) => a.id - b.id)
    }

    return newProducts
  }

  const handleTags = (products, tags) => {
    let newProducts = [...products]

    // tags = 代表使用者目前勾選的標籤陣列
    // console.log(tags)

    // 處理勾選標記
    if (tags.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false

        // 原本資料裡的tags字串轉為陣列
        const productTags = product.tags.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          // includes -> Array api
          if (productTags.includes(tags[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newProducts
  }

  const handlePriceRange = (products, priceRange) => {
    let newProducts = [...products]

    // 處理價格區間選項
    switch (priceRange) {
      case '1萬以下':
        newProducts = products.filter((p) => {
          return p.price <= 10000
        })
        break
      case '1~2萬':
        newProducts = products.filter((p) => {
          return p.price >= 10000 && p.price <= 20000
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newProducts
  }

  // 當四個過濾表單元素有更動時
  // componentDidUpdate + didMount
  // ps. 一開始也會載入
  useEffect(() => {
    // 搜尋字串太少不需要搜尋
    if (searchWord.length < 3 && searchWord.length !== 0) { return }

    // 先開起載入指示器
    setIsLoading(true)

    let newProducts = []

    // 處理搜尋
    newProducts = handleSearch(products, searchWord)

    // 處理排序
    newProducts = handleSort(newProducts, sortBy)

    // 處理勾選標記
    newProducts = handleTags(newProducts, tags)

    // 處理價格區間選項
    newProducts = handlePriceRange(newProducts, priceRange)

    setDisplayProducts(newProducts)
  }, [searchWord, products, sortBy, tags, priceRange])

  // bootstrap 的spinner
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 真正要呈現的資料
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <FilterBar
                      priceRangeTypes={priceRangeTypes}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      tagTypes={tagTypes}
                      tags={tags}
                      setTags={setTags}
                    />
                  </div>

                  <div className="col-md-9">
                    <div className='d-flex justify-between'>
                      <h2 className='display-6'>
                        商品列表
                      </h2>
                      <h2 className='text-danger display-6 font-weight-bold'>
                        <Link to='../checkout' title='結帳'>結帳</Link>
                      </h2>
                    </div>
                    <hr />
                    <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    />
                    <div className="padding"></div>
                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />
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
