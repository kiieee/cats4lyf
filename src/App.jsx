import { useState, useRef } from 'react'
import './index.css'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home'
import Checkout from './pages/checkout'
 
const App = () => {
  const [total, setTotal] = useState()
  const [open, setOpen] = useState(false);
  const [catsInBasket, setCatsInBasket] = useState ([])
  const navigate = useNavigate()
 
  const handleClose = () => {
    setOpen(false);
  };
 
  const handleOpen = () => {
    setOpen(true);
  };
 
  const modalRef = useRef();
 
  const handleClickOutside = (event) => {
    if (modalRef.current === event.target) {
      handleClose();
    }
  };
 
  const handleMove = () => {
    setOpen(false);
    navigate('/Checkout')
  }
 
  return (
    <div>
 
      <nav className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Checkout'>Checkout</Link>
        <button id="basket" onClick={handleOpen}>Basket</button>
      </nav>
 
      <Routes>
        <Route path='/About' element={<About />}></Route>
        <Route path='/' element={<Home setCatsInBasket = {setCatsInBasket} />}></Route>
        <Route path='/Checkout' element={<Checkout catsInBasket = {catsInBasket} />}>Checkout</Route>
      </Routes>
 
      {open && (
        <div className="modalBg" ref={modalRef} onClick={handleClickOutside}>
         
          <div className='iconModal'>
 
            <div className='Products'>
            {catsInBasket.map((cat, index) => {
            return (
                <div key={index}>
                  <h2>{cat.name}</h2>
                  <h2>£{cat.price}</h2>
                </div>
            )
        })}
        <h2>Total Price: £{catsInBasket.reduce((total, cat) => total+cat.price, 0)}</h2>
            </div>
 
            <button id='x' onClick={handleClose}>X</button>
            <button id='close' onClick={handleMove}>Go To Checkout</button>
 
          </div>
        </div>
      )
    }
 
    </div>
  )
}
 
export default App