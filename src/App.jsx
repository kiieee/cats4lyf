import { useState, useRef } from 'react'
import './index.css'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import About from './pages/about'

const App = () => {
  const [total, setTotal] = useState()
  const [open, setOpen] = useState()
  const [catsInBasket, setCatsInBasket] = useState()
  const navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const modalRef = useRef()

  const handleClickOutside = (event) => {
    if (modalRef.current === event.target) {
      handleClose()
    }
  }

  const handleMove = () => {
    setOpen(false)
    navigate('checkout')
  }

  return (
    <div id='wrapper'>

      <div id='navbar'>  
        <nav className='navbar'>
          <h2>Cats4Lyfe</h2>
          <Link to = '/'> Home </Link>
          <Link to = '/about'> About Us </Link>
          <Link to = '/checkout'> Checkout </Link>
          <button id='basketBtn' onClick={handleOpen}>Basket</button>
        </nav>
      </div>
      
      <div id='pathways'>
        <Routes>
          <Route path='/' element={<Home setCatsInBasket = {setCatsInBasket} />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/checkout' element={<Checkout catsInBasket = {catsInBasket} />}></Route>
        </Routes>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default App