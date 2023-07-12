import React from 'react'
import "./btn.css"
function Btn(props) {
  return (
    <div className='btn'>
        <button>{props.btnText}</button>
    </div>
  )
}

export default Btn
