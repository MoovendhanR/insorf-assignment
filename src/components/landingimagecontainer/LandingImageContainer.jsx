import React from 'react'
import landingPageImg from "../../assets/right-image.png";
import RightArrow from "../../assets/rightarrow.png"
import ArrowIcon from "../../assets/arrow.png";
import styles from "./LandingImageContainer.module.css"
const LandingImageContainer = () => {
  return (
    <div
    className={styles.backgroundContainer}
    style={{ backgroundImage: `url(${landingPageImg})` }}
  >
  <button className={`${styles.topRightbutton}`}>Contact Us</button>
  <button className={`${styles.bottomRightbutton}`}>BOOK FREE DEMO <img className={`${styles.RightArrow}`} src={RightArrow} alt="rightArrow" width={10}/> </button>

    <div className={`${styles.textContent}`}>
      <h1>
        MANAGEMENT &<br /> ORGANIZATION
      </h1>
      <br/>
      <br/>
      <p>
        Simplify administrative tasks to save time and resources. Make{" "}
        <br /> informed decisions with robust data analytics tools. Adopt
        scalable <br /> solutions for sustainable institutional growth.
      </p>
      <br/> 
      <button className={`${styles.customButton}`}>
      Click to know more
  <img src={ArrowIcon}className={`${styles.icon}`} alt="arrow" />
</button>
    </div>
    <br />
  </div>
  )
}

export default LandingImageContainer