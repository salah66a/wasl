import React from 'react'
import "./about-item.css"
import PurpleH2 from '../Typography/H2/PurpleH2'

function AboutItem(props) {
  return (
    <div className='about-item'>
          <img src={props.icon} alt="about icon" />
          <PurpleH2 title ={props.title}/>
          <p>{props.content}</p>
    </div>
  )
}

export default AboutItem
