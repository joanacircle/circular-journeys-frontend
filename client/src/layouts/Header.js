import { Link } from 'react-router-dom'
import Logo from '../images/Logo/Logo'

import './Header.scss'
import { FaUserAlt } from 'react-icons/fa'
import { BiShoppingBag } from 'react-icons/bi'
// import { Option } from '../components/Navbar/NavbarStyles'
// import { Theme } from '../Styles/styled'

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link
            to="/"
            className='brand'
          ><Logo />
            <span className='title'><h1>Circular Journeys</h1></span>
          </Link>
          <section>
            <ul>
              <li>
                <Link to='/blog' title='Blog'>
                  <span className='links'>部落格</span>
                </Link>
              </li>

              <li>
                <Link to='/'>
                  <span className='links'>自由行</span>
                </Link>
              </li>
              <li>
                <Link to='/shop'>
                  <span className='links'>商城</span>
                </Link>
              </li>
              <li>
                <Link to='/shop'>
                  <BiShoppingBag size={30} />
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <FaUserAlt size={30} />
                </Link>
              </li>
            </ul>
          </section>
        </div>
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
