import HomeShop from './HomeShop/HomeShop'
import HomeBlog from './HomeBlog/HomeBlog'
import { useIsLoggedIn } from 'hooks/useIsLoggedIn'
import { userInfo } from 'components/userInfo/UserInfo'

const Home = () => {
  const { userData } = userInfo()
  console.log(userData)
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
