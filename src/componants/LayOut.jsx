import React from 'react'
import Navbar from './Navbar'
import Footer from './HomeFolder/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


const LayOut = () => {



  return (
    <div>
<Navbar />
<ScrollToTop />
<Outlet />
<Footer />
    </div>
  )
}

export default LayOut