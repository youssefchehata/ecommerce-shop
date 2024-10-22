import React from 'react';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {logout} from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import SearchBox from './SearchBox';

const Header = () => {
   const {cartItems }= useSelector((state) => state.cart);
   const {userInfo} = useSelector((state) => state.auth);

   const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

   const logoutHandler = async() => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
    }

  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='YoShop' width='30' height='30' />
              YoShop
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            <SearchBox />
            <LinkContainer to='/cart' >
             <Nav.Link > <FaShoppingCart /> Cart {cartItems.length > 0 && <Badge pill bg='success' marginLeft='5px'>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge>}</Nav.Link>
             </LinkContainer>
             {userInfo ?(
               <>
               <NavDropdown title={userInfo.name} id='username'>
                 <NavDropdown.Item as={Link} to='/profile'>
                   Profile
                 </NavDropdown.Item>
                 <NavDropdown.Item onClick={logoutHandler}>
                   Logout
                 </NavDropdown.Item>
               </NavDropdown>
             </>
             ):(   <LinkContainer to='/login'> 
            <Nav.Link href='/login'> <FaUser /> Sign In </Nav.Link>
             </LinkContainer>)}


             {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
