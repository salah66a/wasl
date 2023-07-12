import React from 'react'
import "./goals.css"
import goalIcon1 from "../../Assets/lamb icon.svg"
import goalIcon2 from "../../Assets/hand icon.svg"
import goalIcon3 from "../../Assets/strategic vision icon.svg"
import Goal from '../../Components/Goal/goal'

function Goals() {
  return (
   
     <section className="goals">
           <Goal goalIcon ={goalIcon1} h2="أهدافنــــا"/>
           <Goal activeGoal ={true} goalIcon ={goalIcon2} h2="رسالتنـــــــا"/>
           <Goal goalIcon ={goalIcon3} h2="رؤيتنــــــــا"/>
     </section>
    
  )
}
export default Goals
