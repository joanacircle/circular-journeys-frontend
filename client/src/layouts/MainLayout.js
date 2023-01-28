import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './MainLayout.scss'

const MainLayout = () => {
  return (
    <>
      <>
        <Header />

        <main className='main-content' >
          <div className='center-content'>
            <Outlet />
          </div>
        </main>

        <Footer />
      </>
    </>
  )
}

export default MainLayout
