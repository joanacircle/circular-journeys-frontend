import { useEffect, useState } from 'react'
import './Shop.scss'

import FilterBar from './components/FilterBar/'
import ProductList from './components/ProductList/'
import SearchBar from './components/SearchBar/'
import Placeholder from 'components/Placeholder/Placeholder'
import SortBar from './components/SortBar/'


const Shop = () => {

  const [products, setProducts] = useState([])
  // 排序、搜尋後的資料
  const [displayProducts, setDisplayProducts] = useState([])

  const [categories, setCategories] = useState([])
  const categoryMenu = ['戶外登山', '背包收納', '行動配備', '旅行配件']

  const [priceRange, setPriceRange] = useState([0, 5000])


  // 載入Placeholder
  const [isLoading, setIsLoading] = useState(false)

  const [sortBy, setSortBy] = useState('')
  const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    setIsLoading(true)
    getData()
  }, [])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }
  }, [isLoading])

  useEffect(() => {
    setIsLoading(true)
    let newProducts = [...products]
    newProducts = handleSearch(newProducts, searchWord)
    newProducts = handleSort(newProducts, sortBy)
    newProducts = handleCategories(newProducts, categories)
    newProducts = handlePriceRange(newProducts, priceRange)
    setDisplayProducts(newProducts)
  }, [products, sortBy, searchWord, categories, priceRange])


  // 取得資料
  const getData = async () => {
    const response = await fetch(`${process.env.REACT_APP_DEV_URL}/shop`)
    const data = await response.json()
    setProducts(data)
    setDisplayProducts(data)
  }

  // 排序
  const handleSort = (products, sortBy) => {
    const newProducts = [...products]

    // 少到多
    if (sortBy === '1') {
      newProducts.sort((a, b) =>
        a.price - b.price
      )
    }
    // 多到少
    if (sortBy === '2') {
      newProducts.sort((a, b) =>
        b.price - a.price
      )
    }
    // 預設id
    if (sortBy === '' && newProducts.length > 0) {
      newProducts.sort((a, b) => a.id - b.id)
    }
    return newProducts
  }

  const handleSearch = (products, searchWord) => {
    let newProducts = [...products]

    if (searchWord.length) {
      newProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchWord.toLowerCase())
      })
    }
    return newProducts
  }

  const handleCategories = (products, categories) => {
    let newProducts = [...products]

    if (categories.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false
        const productCategories = product.categories.split(',')

        for (let i = 0; i < categories.length; i++) {
          if (productCategories.includes(categories[i])) {
            isFound = true
            break
          }
        }
        return isFound
      })
    }
    return newProducts
  }

  const handlePriceRange = (products, priceRange) => {
    let newProducts = [...products]
    newProducts = products.filter((p) => {
      return p.price >= priceRange[0] && p.price <= priceRange[1]
    })
    return newProducts
  }

  return (
    <>
      <div className="shop-container">
        <div className='search-bar'>
          <SearchBar
            searchWord={searchWord}
            setSearchWord={setSearchWord}
          />
        </div>

        <div className="col-md-12 shop-main-content">
          <div className="row">
            <div className="col-md-3">
              <FilterBar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                categoryMenu={categoryMenu}
                categories={categories}
                setCategories={setCategories}
              />
            </div>

            <div className="col-md-9">
              <div className="d-flex justify-between">
                <h4>商品列表</h4>
                <SortBar sortBy={sortBy} setSortBy={setSortBy} />
              </div>
              <br />
              {isLoading
                ? (
                  <Placeholder />
                )
                : (
                  <ProductList displayProducts={displayProducts} />
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Shop


  // Spinner
  // const spinner = (
  //   <div className="d-flex justify-content-center">
  //     <div className="spinner-border text-warning" role="status" >
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //   </div>
  // )
