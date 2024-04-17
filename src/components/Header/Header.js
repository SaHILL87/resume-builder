import React from "react";
import resumeSvg from "../../assets/makemyresumelogo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={resumeSvg} alt="Company Logo" />
          <span className={styles.companyName}>MakeMyResume</span>
        </div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/build-resume">Build Resume</Link>
          <Link to="/contact-us">Contact Us</Link>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </>
  );
}

export default Header;
