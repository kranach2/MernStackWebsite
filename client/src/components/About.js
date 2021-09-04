import React from "react";

import Footer from "./Footer";
import styles from "../css/About.module.css";
import kishor_pic from "../images/kishor_pic.JPG";
const About = () => {



  return (
    <div className={styles.aboutContainer}>

      <div className={styles.intro}>
       
          <h1 className={styles.headingOne}>About Myself</h1>
      </div> 
<div className={styles.infoContainer}>
<div className={styles.grid}>
      <div className={styles.facts}>
          <h1 className={styles.headingTwo}>
            Some facts about myself
          </h1>
          <p className={styles.para}>
            I am Full stack developer who likes coding and problem solving. In addition, I have 
            experience as an IT Support. I have done Bachelor's of Information Technology from ECU. 
            Similarly, I am CompTIA A+, Network+ and Security+ certified professional.
          </p>
        </div>

        <div className={styles.image}>
          <img src={kishor_pic} alt=" Profile of Kishor" />
        </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default About;
