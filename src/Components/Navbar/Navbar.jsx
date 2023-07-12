import React from 'react'
import "./navbar.css"
import Logo from '../logo/logo'
import ListItem from '../Nav list item/listItem'
import Btn from '../BTN/btn'

function Navbar() {
  return (
      <div className="container">
         <nav>
            <Logo/>
            <ListItem/>
            <Btn btnText ="تسجيل الدخول"/>
          </nav>
      </div>
  )
}

export default Navbar
