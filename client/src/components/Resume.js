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
        <div className={styles.summary}>
          <h1 className={styles.heading}>Summary</h1>
          <p className={styles.firstPara}>
          Hands-on experience in web development including both frontend and backend. In spite of having web development skills, I have 3 months of experience as an ICT support officer. Problem solver who is adaptive and consistent with innovative mind as well as can add values to the organisation by contributing to accomplish its goal.
          </p>
          </div>
        

        <div className={styles.technical}>
          <h1 className={styles.heading}>Technical Summary</h1>
          <div className={styles.paraDiv}>
          <p className={styles.firstPara}>
            Experience with HTML and CSS3 including Sass for design and layout.
          </p>
          <p className={styles.para}>
            Sound knowledge of JavaScript (ES6): arrow function, destructuring, spread operator, rest and default parameters, maps, subclasses, import, export, async, await and so on.
            </p>
          <p className={styles.para}>
            React - Class component,
            component lifecycle (mounting, updating and unmounting), higher
            order component (HOC), state and setState, React context, Functional
            component, React hooks, React router
          </p>
          <p className={styles.para}>
            Redux for state management and middleware redux thunk.
          </p>
          <p className={styles.para}>
            Good command of structured query
            language (MySQL)  for storing, manipulating and retrieving data in databases
            (Select, Insert, Update, Delete, Join) and so on
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
        	Passion to create innovative and creative projects.
          </p>
          <p className={styles.para}>
                     	 Better understanding of UI/UX design principles to enhance user experience. 
            </p>
            <p className={styles.para}>
               Scalable Vector Graphics (SVG) for designing scalable logo and icons.</p>
            <p className={styles.para}>
               Exposure to JavaScript framework – React Native for building native apps.</p>
        </div>
        </div>
        <div className={styles.work}>
          
          <h1 className={styles.heading}>Work Experience</h1>
        
          <div className={styles.paraDiv}>
          <h2 className={styles.headingTwo}>Web Developer</h2>
          <p className={styles.para}>
            - Perth, Western Australia (current)
          </p>
          <h3 className={styles.headingThree}>Frontend:</h3>
          <p className={styles.firstPara}>
            Has been working with HTML and  CSS3 for design and layout.
          </p>
          <p className={styles.para}>
            Hands on experience to make regular website to responsive that can well fit into mobile and tablet.
          </p>
          <p className={styles.para}>
            Day to day work on React. Created own personal website using Reactjs.
          </p>
          <p className={styles.para}>
            
            comfortable working with Javascript (ES6). Used to with new functionalities such as arrow function, maps, spread operator, class, destructing and so on. 
          </p>
          <p className={styles.para}>
            
            Have experimented with PHP and wordpress.
          </p>
          
          <p className={styles.para}>
            
            Redux for state managment and axios for http request to backend.
          </p>

          <h3 className={styles.headingThree}>Backend:</h3>
          <p className={styles.para}>
            
            Has worked with Nodejs and it's framework, Express.
          </p>
          <p className={styles.para}>
            
            Comfortable with both sql such as MySQL and no sql such as MongoDB.
            
          </p>
          <p className={styles.para}>
            
            Can perform CRUD opearation and thorough understanding of REST API.
          </p>
          
          <h3 className={styles.headingThree}>Others</h3>
          <p className={styles.para}>
            
            Have worked on version Control such as Git.
          </p>
          <p className={styles.para}>
            
            deployed app on cloud-platform such as heroku.
          </p>
          <p className={styles.para}>
            
            Visual studio code for coding and can commit and push to git repository through it.
          </p>
          
<br />
          <h2 className={styles.headingTwo}>Information Technology Officer</h2>
          <p className={styles.para}>
            - VenuesWest - Perth, Western Australia (May 2017 - July 2017)
          </p>
          <h3 className={styles.headingThree}>Key Responsiblities:</h3>
          <h3 className={styles.headingThree}>
            System Maintenance and Security
          </h3>
          <p className={styles.firstPara}>
            Database backups and initiated
            restores as required.
          </p>
          <p className={styles.para}>
            
            Created network users and
            maintained user access and passwords.
          </p>
          <p className={styles.para}>
            
            Maintained appropriate security
            measures with reference to user access and passwords.
          </p>
          <p className={styles.para}>
            
            Maintained the security of Venues
            West's computer based data both in terms of access and historical
            retention.
          </p>
          <p className={styles.para}>
            
            Monitored and maintained
            antivirus software systems to prevent the introduction of viruse on
            all Venues West computing equipment.
          </p>
          <p className={styles.para}>
            
            Maintained knowledge and
            awareness of security vulnerabilities and protection.
          </p>

          <h3 className={styles.headingThree}>Software/Hardware Support</h3>
          <p className={styles.para}>
            
            Provided frontline end user
            support for all Venues West business applications.
          </p>
          <p className={styles.para}>
            
            Maintained appropriate records on
            Help Desk requests.
          </p>
          <p className={styles.para}>
            
            Configured and installed personal
            computers and printers both stand-alone and networked.
          </p>
          <p className={styles.para}>
            
            Assisted with the perparation and
            configuration of peripheral devices for attachment to the network
            environment.
          </p>
          <p className={styles.para}>
            
            Assisted with the installation
            and testing the integrity of any new stand-alone and multi-user
            software prior to allowing user access.
          </p>
          <p className={styles.para}>
            
            Ensured all the functional ICT
            procedural manuals and end user guides are kept up-to-date and
            distributed as and when required.
          </p>

          <h3 className={styles.headingThree}>Adminstrative Duties</h3>
          <p className={styles.para}>
            
            Ensured computer assests database
            is maintained and balances back to the central register.
          </p>
          <p className={styles.para}>
            
            Liaised with IT coordinator and
            other directorates and branches in maintaining variable information
            on Intranet web pages. Monitored and maintained Venues West's
            Intranet web site providing appropriate staff with access and
            assistance as necessary.
          </p>
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
	Source code is available in GitHub repository - (https://github.com/kranach2/MessagingWebApp.git)
          </p>
          </div>
        </div>
    
        <div className={styles.professional}>
          <h1 className={styles.heading}>Professional Development</h1>
          <div className={styles.professionalDiv}>
          <p className={styles.firstPara}>
             Keeping myself up-to-date on
            latest technological advances and trends through various sources
            including but not limited to websites, youtube and online learning
            platform
          </p>
          <p className={styles.para}>
             Reading blogs, discussing in
            web-forum and learning from online tutorial site such as
            freeCodeCamp, udemy and so on
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
