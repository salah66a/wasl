import React from 'react'
import "./social-media.css"
function SocialMedia(props) {
  return (
    <div className='social-media'>
        <img src={props.socialIcon} alt="socialIcon" />
    </div>
  )
}

export default SocialMedia
