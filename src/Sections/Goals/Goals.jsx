import React from 'react'
import "./goals.css"
import goalIcon1 from "../../Assets/lamb icon.svg"
import goalIcon2 from "../../Assets/hand icon.svg"
import goalIcon3 from "../../Assets/strategic vision icon.svg"
import Goal from '../../Components/Goal/goal'

function Goals() {
  return (
   
     <section className="goals">
           <Goal goalIcon ={goalIcon1} h2="أهدافنــــا" content ="تطوير سبل التقييم والتأهيل والتدريب لزيادة قدرة الأخصائيين ومحللين السلوك على تقديم خدمات تحليل السلوك للحالات التي تعاني من اضطراب طيف التوحد والاضطرابات النمائية بكل يسر وسهولة"/>
           <Goal activeGoal ={true} goalIcon ={goalIcon2} h2="رسالتنـــــــا" content = "تقديم خدمات تحليل السلوك التطبيقي إلكترونياً لمساعدة الأخصائيين ومحللي السلوك على الاستفادة من التقنية خلال موقع “وصل”"/>
           <Goal goalIcon ={goalIcon3} h2="رؤيتنــــــــا" content="تتمثل رؤيتنا في تقديم منظومة إلكترونية متكاملة تتيح للأخصائيين ومحللين السلوك التطبيقي جميع الخدمات التي تسهم في تطوير الحالات التي تعاني من اضطراب طيف التوحد والاضطرابات النمائية الاخرى"/>
     </section>
    
  )
}
export default Goals
