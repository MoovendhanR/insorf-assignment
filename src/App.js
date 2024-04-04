import styles from "./App.module.css";
import LandingImageContainer from "./components/landingimagecontainer/LandingImageContainer";
import Navbar from "./components/navbar/Navbar";
// import landingPageImg from "./assets/right-image.png";
// import RightArrow from "./assets/rightarrow.png"
// import ArrowIcon from "./assets/arrow.png"
import NavBody from "./components/navbody/NavBody";

function App() {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.navContainer}`}>
        <Navbar />
        <NavBody/>
      </div>
      {/* <div
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
      </div> */}
      <LandingImageContainer/>
    </div>
  );
}

export default App;
