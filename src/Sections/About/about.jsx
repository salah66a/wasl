import React from 'react'
import "./about.css"
import icon1 from "../../Assets/logo2.svg"
import icon2 from "../../Assets/logo3.svg"
import AboutItem from '../../Components/About Item/aboutItem'
function About() {
  return (
    <section className='about'>
        <div className="container">
            <div className="items">
                <AboutItem icon ={icon1} title = "عن وصل" content="نظام إلكتروني يتيح للأخصائيين ومحللين السلوك التطبيقي العمل على تقييم وتأهيل وتدريب الحالات التي تعاني من اضطراب طيف التوحد والاضطرابات النمائية الأخرى وفق نظام تحليل السلوك التطبيقي (ABA)"/>
                <AboutItem icon ={icon2} title = "خدماتنا" content="نسعى لتقديم أفضل الخدمات التي تتناسب مع احتياجات المختصين في المجال، والتي تبدأ بالتقييمات الأولية وإدراج الخطة العلاجية المناسبة التي تتوافق مع إمكانيات وقدرات ومدى ادراك كل حالة من خلال مقياس (ABLLS) وتقديم الجلسات اليومية وذلك لتحقيق أهداف الخطط العلاجية ومتابعة تقييم الحالات ومدى نسبة تطورها بشكل مستمر."/>
            </div>
        </div>
        
    </section>
  )
}

export default About
