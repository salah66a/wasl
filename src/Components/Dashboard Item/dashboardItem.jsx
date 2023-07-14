import React from 'react'
import "./dashboard-item.css"

function DashboardItem(props) {
  return (
        <div className="dashboard-item">
            <img src={props.DashboardIcon}alt="" />
            <h2>{props.title}</h2>
        </div>
  )
}

export default DashboardItem
