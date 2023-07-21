import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
       <Announcement/>
       <Navbar/>
       <Hero/>
       <Categories/>
       <Slider/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Home
