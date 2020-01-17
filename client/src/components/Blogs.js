import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "../css/Blogs.module.css";

const Blogs = () => {

return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.blog_one}><Link className={styles.link} to="/blog-arrow-function">
        Arrow Function
          </Link></div>
        <div className={styles.blog_two}><Link className={styles.link} to="/blog-generate-random-color-with-javascript">
        Random color generator with Javascript
          </Link></div>
        
        </div>

      <Footer />
    </div>
  );
};

export default Blogs;
