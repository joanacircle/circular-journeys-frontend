import HomeShop from './HomeShop/HomeShop'
import HomeBlog from './HomeBlog/HomeBlog'
import { useIsLoggedIn } from 'hooks/useIsLoggedIn'

const Home = () => {
  // user is login?
  const { isLogin } = useIsLoggedIn()
  console.log(isLogin)
  return (
    <div>
      <HomeBlog />
      <HomeShop />
    </div>

  )
}

export default Home
