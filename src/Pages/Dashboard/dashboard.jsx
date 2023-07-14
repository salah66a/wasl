import React from 'react'
import "./dashboard.css"
// import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Sections/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar'
import DashboardItem from '../../Components/Dashboard Item/dashboardItem'
import DashboardIcon1 from "../../Assets/new-file 1.svg"
import DashboardIcon2 from "../../Assets/file 1.svg"
import DashboardIcon3 from "../../Assets/statistical-graphic 1.svg"
function Dashboard(props) {
  return (
    <>
      <Navbar login={props.login}/>
          <section className="dashboard">
              <div className="container">
                  <span><a href="#home">الصفحة الرئيسية</a></span>
                  <span> | </span>
                  <span><a href="#dashboard">لوحة التحكم</a></span>
                  <div className="dashboard-items">
                      <DashboardItem title ="فتح ملف جديد" DashboardIcon={DashboardIcon1}/>
                      <DashboardItem title ="ملفات المرضى" DashboardIcon={DashboardIcon2}/>
                      <DashboardItem title ="الإحصائيات"DashboardIcon={DashboardIcon3}/>
                  </div>
              </div>
             </section>
      <Footer/>
    </>
  )
}

export default Dashboard
