import React from 'react'
import "./home.css"
import Header from '../../Sections/Header/Header'
import About from '../../Sections/About/about'
import Goals from '../../Sections/Goals/Goals'
import Footer from '../../Sections/Footer/footer'
function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Goals/>
      <Footer/>
    </>
  )
}

export default Home
