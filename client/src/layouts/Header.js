import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo'
import Navbar from '../components/Navbar/Navbar'
import '../components/Navbar/NavbarStyles.scss'
import { FaUserAlt } from 'react-icons/fa'
// import { Container, Row, Col, Title, Theme } from '../../Styles/styled'
import { Option } from '../components/Navbar/NavbarStyles'

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center border-bottom">
        {/* <Navbar /> */}
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        ><Logo />

          <span className="fs-4">Circular Journeys</span>
        </a>

        <ul className='navbar-option-place'>
          <li className="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">
              首頁
            </Link>
          </li>
          <li>
            <Link to='/blog' title='Blog'>
              <Option>部落格</Option>
            </Link>
          </li>
          <li>
            <Link to='/shop'>
              <Option>商城</Option>
            </Link>
          </li>
          <li>
            <Link to='/#'>
              <Option>自由行</Option>
            </Link>
          </li>
          <li>
            <Link to='/user/login'>
              <FaUserAlt size={30} />
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header

  // import React, { Fragment } from 'react'
  // import '../components/Navbar/NavbarStyles.scss'
  // import { Link, Outlet } from 'react-router-dom'
  // import { Container, Row, Col, Title, Theme } from '../Styles/styled'
  // import { Option } from '../components/Navbar/NavbarStyles'
  // import Logo from '../images/Logo/Logo'
  // import { FaUserAlt } from 'react-icons/fa'

  // const Header = () => {
  //   return (
  //     <Fragment>
  //       <div className='navbar-fixed'>
  //         <Container className='navbar-container'>
  //           <Row align={'center'} justify={'space-between'}>
  //             <Col>
  //               <Link className='navbar-logo-place' to='/'>
  //                 <Logo />
  //                 <Title family={Theme.Family} size={Theme.H1} color={Theme.Orange}>circular journeys</Title>
  //               </Link>
  //             </Col>
  //             <Col>
  // < ul className = 'navbar-option-place' >
  //               <li>
  //                 <Link to='/blog' title='Blog'>
  //                   <Option>部落格</Option>
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link to='/shop'>
  //                   <Option>商城</Option>
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link to='/#'>
  //                   <Option>自由行</Option>
  //                 </Link>
  //               </li>
  //               <li>
  //                 <Link to='/user/login'>
  //                   <FaUserAlt size={30} />
  //                 </Link>
  //               </li>
  //             </ ul >
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Outlet />
//     </Fragment>
//   )
// }

// export default Header
