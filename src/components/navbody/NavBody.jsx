import React from 'react'
import styles from "./NavBody.module.css"
import ArrowIcon from "../../assets/arrow.png"
import ArrowIconRed from "../../assets/redarrow.png"
import navimg1 from "../../assets/left-image1.png"
import navimg2 from "../../assets/left-image2.png"
import navimg3 from "../../assets/left-image3.png"

const NavBody = () => {
  return (
    <div className={`${styles.navBodyContainerMain}`}>
        <div className={`${styles.navBodyContainer}`}>

      <p>Our Smart <span style={{color:"#BE0101",fontWeight:600}}>EdTech Solutions</span> Will</p> 
      <h1>Elevate Your Grouwth <br/> on Every Front</h1>
      <article>Transform education, foster collaboration, and ,ake informed decisions <br/> with our solutions. Empowering management, inspiring teachers, and<br/> enriching the learing journey for all is our core focus</article>
   <div className={`${styles.navBodyButtoncontainer}`}>
        <button className={`${styles.navBodybuttonone}`}>Learn More</button>
        <button className={`${styles.navBodybuttontwo}`}>
        <img src={ArrowIcon}alt="arrowFun" className={`${styles.navBodyicon}`} width={10} height={10}/>
        </button>
      </div>
        </div>
     <div className={`${styles.navBodyimageCont}`}>
        <div  style={{ backgroundImage: `url(${navimg1})` }} className={`${styles.navBodyimageContone}`}>
               <div className={`${styles.navbodyContInside}`}>
                <p className={`${styles.navbodyContInsideone}`}>STUDENTS<br/> & PARENTS</p>
                <img className={`${styles.navbodyContInsidetwo}`} src={ArrowIconRed} alt='aero'  width={15} height={15}/>
               </div>
        </div>
        <div  style={{ backgroundImage: `url(${navimg2})` }} className={`${styles.navBodyimageConttwo}`}>
        <div className={`${styles.navbodyContInside}`}>
                <p className={`${styles.navbodyContInsideone}`}>TEACHER<br/> & STAFFS</p>
                <img className={`${styles.navbodyContInsidetwo}`} src={ArrowIconRed} width={15} height={15} alt='aero'/>
               </div>
        </div>
        <div  style={{ backgroundImage: `url(${navimg3})` }} className={`${styles.navBodyimageContthree}`}>
        <div className={`${styles.navbodyContInside}`}>
                <p className={`${styles.navbodyContInsideone}`}>ADMIN<br/> & FINANCE TEAM</p>
                <img className={`${styles.navbodyContInsidetwo}`} src={ArrowIconRed} alt='aero'  width={15} height={15}/>
               </div>
        </div>
     </div>

    </div>
  )
}

export default NavBody