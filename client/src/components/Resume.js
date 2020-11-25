import React from "react";
import Footer from "./Footer";
import styles from "../css/Resume.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.intro}>
        
          <h1 className={styles.headingOne}>Know more about me </h1>
        
      </div>

      <div className={styles.resumeDetails}>

      
        <div className={styles.technical}>
        <h1 className={styles.heading}>Technical Skills</h1>
           <h2 className={styles.headingTwo}>Frontend/Backend</h2>
           <div className={styles.paraDiv}>
          <p className={styles.firstPara}>
            Experience with HTML and CSS3 including Sass for design and layout.
          </p>
          <p className={styles.para}>
            Sound knowledge of JavaScript (ES6): arrow function, destructuring, spread operator, rest and default parameters, maps, subclasses, import, export, async, await and so on.
            </p>
          <p className={styles.para}>
            React - Class component,
            component lifecycle, higher
            order component (HOC), React context, Functional
            component, React hooks, React router
          </p>
          <p className={styles.para}>
            Redux for state management and middleware redux thunk.
          </p>
          <p className={styles.para}>
            Good command of structured query
            language (MySQL)  for storing, manipulating and retrieving data in databases
          </p>
          <p className={styles.para}>
            Thorough understanding of MongoDB
            and its operations.
          </p>
          <p className={styles.para}>
            	Node- set up environment to run node and create server, knowledge of inbuilt modules and external modules.
          </p>
          <p className={styles.para}>
            In-depth knowledge of express web
            application framework for node.js to create server and build web
            applications and APIs.
          </p>
          <p className={styles.para}>
            Good grasp of server-side scripting language, PHP and content management system like WordPress with hands on experience.
          </p>
          <p className={styles.para}>
            Comprehensive understanding of Restful API.
          </p>

          <p className={styles.para}>
            AJAX for requesting data from web server using XMLHttpRequest.
          </p>
          <p className={styles.para}>
            Sound knowledge of Axios/Fetch to perform HTTP request for retrieving, posting, deleting and modifying data from APIs.</p>
            <p className={styles.para}>
            JSON for exchanging data between server and browser.</p> 
          <p className={styles.para}>
            Good insight of Code Version Control-
            Git (through command line and VS code)
          </p>
          <p className={styles.para}>
          	Deployment of apps in the cloud-based platform.
          </p>
          
          <p className={styles.para}>
            Ability to create web applications with clean and maintainable code.
          </p>
          <p className={styles.para}>
            Knowledge of Responsive web design (through media queries in CSS and Bootstrap) along with cross-browser compatibility.
          </p>
          <p className={styles.para}>
                     	 Better understanding of UI/UX design principles to enhance user experience. 
            </p>
            <p className={styles.para}>
               Scalable Vector Graphics (SVG) for designing scalable logo and icons.</p>
            <p className={styles.para}>
               Exposure to JavaScript framework – React Native for building native apps.</p>
        </div>
         
         
           <h2 className={styles.headingTwo}>CompTIA IT Operations Specialist - CIOS (A+ and Network+ certified)</h2>
           <div className={styles.paraDiv}>
          <p className={styles.firstPara}>
          	Mobile Devices | Networking | Hardware | Virtualization and Cloud Computing | Hardware and Network Troubleshooting.
          </p>
          <p className={styles.para}>
        Operating Systems | Security | Software Troubleshooting | 
        Operational Procedures
            </p>
          <p className={styles.para}>
          Networking Concepts | Infrastructure | Network Operations | Network Security | Network Troubleshooting and Tools</p>
         </div>
          
        </div>
        

        <div className={styles.projects}>
          <h1 className={styles.heading}>Web Projects</h1>
          <div className={styles.paraDiv}>
          <p className={styles.firstPara}>Personal Website built with MongoDB, Express, React, Node (MERN Stack), HTML and CSS (http://www.iamkishor.info/).
            	All the source code can be accessed from GitHub repository - (https://github.com/kranach2/MernStackWebsite).
          </p>
          <p className={styles.para}>
            Messaging web app powered by React, Express, MongoDB and Socket.io (https://react-chatter-app.herokuapp.com/).
	Source code is available in GitHub repository - (https://github.com/kranach2/ReactMessagingApp.git)
          </p>
          </div>
        </div>
    
        <div className={styles.certification}>
          <h1 className={styles.heading}>Certifications</h1>
          <div className={styles.certificationDiv}>
          <p className={styles.firstPara}>
          CompTIA IT Operations Specialist – CIOS      
          </p>
          <p className={styles.firstPara}>
          CompTIA Network+                                                                         
          </p>
          <p className={styles.firstPara}>
          CompTIA A+ 
          </p>
        
          </div>
        </div>

        <div className={styles.education}>
        <h1 className={styles.heading}>Education</h1>
<div className={styles.educationDiv}>
<p className={styles.firstPara}>ACS Professional Year Program (ICT)
 <i> - National Institute of Technology (NIT) – Perth, Western Australia - Sept 2016 – Aug 2017 </i></p>

<p className={styles.para}>Bachelor Degree in Information
  Technology - <i> Edith Cowan University – Perth, Western Australia - Feb 2013 – Jul 2016 </i></p>
</div>
</div>

        

      </div>
      <Footer />
    </div>
  );
};

export default Resume;
