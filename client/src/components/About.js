import React from "react";
import Footer from "./Footer";
import styles from "../css/About.module.css";
import kishor_pic from "../images/kishor_pic.JPG";
const About = () => {
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.container_one}>
        <div className={styles.text_one}>
          <h1 className={styles.heading_one}>About Myself</h1>
          <p className={styles.para_one}>My Passion and Personality</p>
        </div>
      </div>

      <div className={styles.container_two}>
        <div className={styles.text_two}>
          <h1 className={styles.heading_two}>
            Some interesting facts about myself
          </h1>
          <p className={styles.para_two}>
            I am originally from Kathmandu, capital of Nepal. To pursue higher
            education, I came to Perth, WA in 2013. I have done Bahelor's of Information Technology from ECU followed by professional year program from National Institute of Technology. I
            love watching movies and reading novels. 
            Meditation in the weekend helps me kick start my day followed by
            cycling. Playing video games with friends and learning new topics in
            free time makes me feel good. I love helping people who are in need
            which I think is the best traits of mine. My favourite visited place
            is New York City.
          </p>
        </div>
        <div className={styles.image_two}>
          <img src={kishor_pic} alt=" Profile of Kishor" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
