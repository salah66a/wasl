import React from 'react'
import "./list-item.css"
function ListItem() {
  return (
    <div >
        <ul className='list-item'>
            <li className='active'><a href="#home">الرئيسية</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
        </ul>
    </div>
  )
}
export default ListItem
