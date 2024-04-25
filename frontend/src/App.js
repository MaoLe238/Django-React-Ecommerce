import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <main className='py-5'>
          <Container>
            <Routes>
              <Route path='/' Component={HomeScreen} exact></Route>
              <Route path='/login' Component={LoginScreen} exact></Route>
              <Route path='/register' Component={RegisterScreen} exact></Route>
              <Route path='/profile' Component={ProfileScreen} exact></Route>
              <Route path='/shipping' Component={ShippingScreen} exact></Route>
              <Route path='/placeorder' Component={PlaceOrderScreen} exact></Route>
              <Route path='/order/:orderId' Component={OrderScreen} exact></Route>
              <Route path='/payment' Component={PaymentScreen} exact></Route>
              <Route path='/product/:id' Component={ProductScreen} ></Route>
              <Route path='/cart/:id?' Component={CartScreen} ></Route>

              <Route path='/admin/userlist' Component={UserListScreen} exact></Route>
              <Route path='/admin/user/:userId/edit' Component={UserEditScreen} exact></Route>
              
              <Route path='/admin/productlist' Component={ProductListScreen} exact></Route>
              <Route path='/admin/product/:productId/edit' Component={ProductEditScreen} exact></Route>

              <Route path='/admin/orderlist' Component={OrderListScreen} exact></Route>
            </Routes>
          </Container>
        </main>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
