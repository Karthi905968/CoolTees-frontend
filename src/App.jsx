import React,{useEffect,useState} from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { SignIn } from './Components/SignIn'
import SignUP from './Components/SignUp'
import Cart from './Components/Cart'
import Shipping from './Components/Shipping'
import Thankyou from './Components/Thankyou'
const App = () => {

  const [showFooter, setShowFooter] = useState(true);
  const pageUrl = window.location.href;
  useEffect(() => {
    if (pageUrl.includes('shipping') || pageUrl.includes('thankyou')) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  },[pageUrl,showFooter]);

  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUP/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shipping' element={<Shipping/>}/>
            <Route path='/thankyou' element={<Thankyou/>}/>
        </Routes>
        {showFooter && <Footer/>}
    </Router>
  )
}

export default App