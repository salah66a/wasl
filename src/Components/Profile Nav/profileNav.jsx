import React from 'react'
import "./profile-nav.css"
import avatar from "../../Assets/profile avatar.svg"
function ProfileNav() {
  return (
    <div className='profile-nav'>
        <img src={avatar} alt="" />
        <div className="profile-nav__details">
            <h3>محمود احمد</h3>
            <h5>طبيب أخصائي</h5>
        </div>
    </div>
  )
}

export default ProfileNav
