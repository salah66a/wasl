import React from 'react'
import "./login-page.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Sections/Footer/footer'
import Btn from '../../Components/BTN/btn'
import user from "../../Assets/user name.svg"
import lock from "../../Assets/Lock.svg"
function LoginPage() {
  return (
    <div>
      <Navbar/>
          <section className="login">
              <div className="container">
                  <span><a href="#home">الصفحة الرئيسية</a></span>
                  <span> | </span>
                  <span><a href="#login">تسجيل الدخول</a></span>
              </div>
              <form action="" className='login-form'>
                  <h2>تسجيل الدخول</h2>
                  <div className="user">
                      <input type="text" placeholder='اسم المستخدم' />
                      <img src={user} alt="" />
                      </div>
                  <div className="password">
                      <input type="password" placeholder='كلمة المرور' />
                      <img src={lock} alt="" />
                  </div>
                  <Btn btnText ="تسجيل الدخول"/>
              </form>
          </section>
      <Footer/>
    </div>
  )
}

export default LoginPage
