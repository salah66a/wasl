import React from 'react'
import "./goal.css"

import WhiteH2 from '../../Components/Typography/H2/whiteH2'
function Goal(props) {
  if(props.activeGoal){
    return (
      <div className="goal active-goal">
      <img src={props.goalIcon} alt="goals icon" />
      <WhiteH2 h2={props.h2}/>
  </div> 
    )
    }else {
      return(
        <div className="goal">
        <img src={props.goalIcon} alt="goals icon" />
        <WhiteH2 h2={props.h2}/>
    </div>
      )
    }

}

export default Goal
