import React from 'react'
import "./navbar.css"
import Logo from '../logo/logo'
import ListItem from '../Nav list item/listItem'
import Btn from '../BTN/btn'
import ProfileNav from '../Profile Nav/profileNav'

function Navbar(props) {
  if(props.login){
    return (
      <div className="container">
      <nav>
         <Logo/>
         <ProfileNav/>
       </nav>
   </div>
    )
  }else{
    return(
      <div className="container">
         <nav>
            <Logo/>
            <ListItem active={props.active}/>
            <Btn btnText ="تسجيل الدخول"/>
           
          </nav>
      </div>
    )
  }
}

export default Navbar
