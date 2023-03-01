import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './MainLayout.scss'
import { CartCountProvider } from 'components/ShoppingCart/CartCountProvider'

const MainLayout = () => {

  return (
    <>
      <>
        <CartCountProvider>
          <Header />

          <main className='main-content' >
            <div className='center-content'>
              <Outlet />
            </div>
          </main>

          <Footer />
        </CartCountProvider>
      </>
    </>
  )
}

export default MainLayout
