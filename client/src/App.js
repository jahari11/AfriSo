import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Home from './Pages/Home';
import ItemDetails from './Pages/itemdescription/ItemDetails';
import Checkout from './Pages/checkout/Checkout';
import Confirmation from './Pages/checkout/Confirmation';
import CartMenu from './Component/CartMenu';
import Shop from './Pages/Shop';
import About from './Pages/About'
import Contact from './Pages/Contact';
const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname])
  return null;
}


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' index element = { <Home /> } />
      <Route path='/itemshop' index element = { <Shop /> } />
      <Route path ='/about' index element ={<About />} />
      <Route path='item/:itemId' element ={ <ItemDetails/> } />
      <Route path='checkout' element ={<Checkout />} />
      <Route path='checkout/success' element={<Confirmation />} />
      <Route path = '/contact' element = {<Contact />} />
      </Routes>
      <CartMenu />
    </BrowserRouter>
    </>
  )
}

export default App
