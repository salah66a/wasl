import React from 'react'
import "./list-item.css"
function ListItem(props) {
  if(props.active){

    return (
      <ul className='active-list-item'>
            <li className='active'><a href="#home">الرئيسية</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
        </ul>
  )
}
  else{
  }
  return (
   
    <ul className='dark-list-item'>
        <li ><a href="#home">الرئيسية</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
    </ul>
  )
    
}
export default ListItem
