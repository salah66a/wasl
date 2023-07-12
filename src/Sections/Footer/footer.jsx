import React from 'react'
import "./footer.css"
import footerLogo from "../../Assets/footer logo.svg"
import SocialMedia from '../../Components/Social Media/socialMedia'
import socialIcon1 from  "../../Assets/facebook icon.svg"
import socialIcon2 from  "../../Assets/Instagram icon.svg"
import socialIcon3 from  "../../Assets/Twitter icon.svg"
import socialIcon4 from  "../../Assets/Snapchat icon.svg"
import socialIcon5 from  "../../Assets/tiktok-square icon.svg"
function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="logo-social">
            <div className="logo">
              <img src={footerLogo} alt="" />
            </div>
            <div className="social">
              <span>تابعنا على مواقع التواصل</span>
              <div className="social-logos">
                  <SocialMedia socialIcon = {socialIcon1}/>
                  <SocialMedia socialIcon = {socialIcon2}/>
                  <SocialMedia socialIcon = {socialIcon3}/>
                  <SocialMedia socialIcon = {socialIcon4}/>
                  <SocialMedia socialIcon = {socialIcon5}/>
              </div>
            </div>
          </div>
          <hr />
          <div className="copy-right">
            <span> &copy;   وصل 2023. جميع الحقوق محفوظة</span>
            <a href="#use">الخصوصية وشروط الاستخدام</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
