import React from "react";
import styles from "../css/Contact.module.css";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      
        <div className={styles.intro}>
          <h1 className={styles.headingOne}>Join up </h1>
          <p className={styles.para}>
            Stay connected for web design and development.
          </p>
      </div>
      
      <div className={styles.firstConnection}>
        <i>Connect with me </i>
      </div>
      <div className={styles.socialIcons}>
        <a className={styles.socialLink} href="https://www.facebook.com/kkeysor.rana"
            target="_self">
          <i
            style={{ color: "rgb(59, 89, 152)" }}
            className="fab fa-facebook"
          ></i>
        </a>
        <a className={styles.socialLink} href="https://www.instagram.com/keysor19/"
            target="_self">
          <i
            style={{ color: "rgb(247,119,55)" }}
            className="fab fa-instagram"
          ></i>
        </a>
        <a className={styles.socialLink} href="https://www.linkedin.com/in/kishor-rana-chhetri/"
            target="_self">
          <i
            style={{ color: "rgb(40,103,178)" }}
            className="fab fa-linkedin"
          ></i>
        </a>
      </div>

      <div className={styles.secondConnection}>
        <i>or reach out to me directly</i>
      </div>
      <div className={styles.contactIcons}>
        <div>
          <i className="fas fa-envelope"> <span className={styles.email}>kishorranachhetri@gmail.com</span>  </i>
        </div>
        <div>
          <i className="fas fa-phone"> <span className={styles.phone}> 0410****** (on request) </span> </i>
        </div>
        <div>
        <i className="fas fa-map-marker"> <span className={styles.place}> Perth, Western Australia </span> </i>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
