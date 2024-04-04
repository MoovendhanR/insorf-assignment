import React,{ useState } from "react";
import  styles from './Navbar.module.css';
import LogoImg from "../../assets/logo.png"

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div >
        <header>
          <nav className={`${styles.navbar}`}>
            <a href='#home' className={`${styles.logo}`}><img width="140"  src={LogoImg} alt="logo"/> </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home'>About Us</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home'>Features +</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home'>Plans</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home'>Blog</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;