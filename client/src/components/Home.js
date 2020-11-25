import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {gsap} from "gsap";
import Footer from "./Footer";
import styles from "../css/Home.module.css"



const Home = () => {

const firstHeading = useRef();
const secondHeading = useRef();

useEffect(() => {
  // let tl = gsap.timeline();
gsap.from(firstHeading.current, {duration: 3, ease:"expo.out", x: -1000 , scale: 1.2, skewX: 60, rotation: 360, color:"rgba(26, 188, 156,1.0)"})
  gsap.from(secondHeading.current, {duration: 3, ease: "expo.out", x: window.innerWidth, scale: 1.2, skewX: 60, rotation: 360, color: "rgba(26, 188, 156,1.0)", delay:1})
  
}, [firstHeading, secondHeading])

  //.to(".grey", {duration: 1, x: 200, scale: 2, y: 20});

    return (
      <div className={styles.homeContainer}>
        
        <div className={styles.mainContainer}>
          <div ref={firstHeading} className={styles.firstHeading}>
        <h1>Kishor Rana Chhetri</h1>
        </div>
        <div ref={secondHeading} className={styles.secondHeading}>
        <h3>Full Stack Developer/CompTIA IT Operations Specialist</h3>
        </div>
        <div>

        </div>
        <button className={styles.button}><Link className={styles.link} to="/resume">View my Resume</Link></button>
        </div>
       
       <div className={styles.infoContainer}>
   <div className={styles.cardContainer}>
     <div className={styles.content}>
     <div className={styles.front}>
About this website
     </div>
     <div className={styles.back}>
     <p>This website aims to introduce myself and showcase my skills, knowledge and experience. Moreover, as we know, sharing is caring, it also contains blog on javascript and its frameworks including both front and backend. I will post blogs on different topics based on my knowledge and experience. I have comment section as well to make it more interactive and readers can express their opinions regarding particular topics.</p>
     </div>
     </div>
   </div>
   <div className={styles.cardContainer}>
     <div className={styles.content}>
     <div className={styles.front}>
What I can do
     </div>
     <div className={styles.back}>
     <p>I can build interactive website that has both frontend and backend. With hands on experience with PHP and wordpress, I have already developed some websites. As there is increasing demand of skilled person in web development, I have prepared myself with the latest technology and tools. Similarly, I now have skills in  MongoDB, Express, React and Node which is in combined called MERN stack. With these skills, I can build full stack interactive website for small businesses to medium businesses.</p>
     </div>
     </div>
   </div>

   <div className={styles.cardContainer}>
     <div className={styles.content}>
     <div className={styles.front}>
Tools and technologies
     </div>
     <div className={styles.back}>
     <p>Regarding this website, it is developed using HTML, CSS, MongoDB, Express, React and Node. VsCode has been used for scripting.It has followed best practices that we find in modern websites. It is responsive meaning it is mobile and tablet friendly. All the source codes can be accessed from github repository.</p>
     </div>
     </div>
   </div>
   
</div>
<Footer />
    </div>
      
    )
  };
  export default Home;
  
  