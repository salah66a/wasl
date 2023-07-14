import React from 'react'
import "./header.css"
import Navbar from '../../Components/Navbar/Navbar'
function Header() {
  return (
    <header>
        <Navbar active={true}/>
    </header>
  )
}

export default Header
