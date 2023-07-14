import React from 'react'
import "./goal.css"

import WhiteH2 from '../../Components/Typography/H2/whiteH2'
function Goal(props) {
  if(props.activeGoal){
    return (
      <div className="goal active-goal">
          <img className='goal-icon' src={props.goalIcon} alt="goals icon" />
          <div className="title">
              <WhiteH2 h2={props.h2}/>
              <p>{props.content}</p>
          </div>
  </div> 
    )
    }else {
      return(
        <div className="goal">
          <img className='goal-icon' src={props.goalIcon} alt="goals icon" />
          <div className="title">
            <WhiteH2 h2={props.h2}/>
          </div>
          <p>{props.content}</p>
       </div>
      )
    }

}

export default Goal
