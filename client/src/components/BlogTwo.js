import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import styles from "../css/BlogOne.module.css";
import htmlCode from "../images/html.jpg";
import cssCode from "../images/css.jpg";
import jsCode from "../images/js.jpg";

const BlogTwo = () => {
    const [comment, setcomment] = useState([]);

  useEffect(() => {
    axios
      .get("comments")
      .then(response => {
        setcomment(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

     let filterComment= comment.filter(com =>{
        return com.blogId === "2";
      })
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.blog_section}>
                    <h1 className={styles.heading}>Generate random color with javascript</h1>
                    <p className={styles.para}>
                        Today I am going to talk about how to generate random colors using javascript at a regular interval. We are going to use colors based on hex code. For instance (#000000).
          <br /><br />
                        Let's start....
            <br /><br />
                        First of all we need 3 files. They are index.html, index.css and index.js. <br />
                        index.html is for layout and index.css is for  styling to make our content look better. The main functionality will be in index.js. We can create these files in any text-editor such as Visual Studio Code, Sublime text, Atom or even notepad.
            <br /><br />
                        Step 1: Create a index.html. 
            <br />
            index.html file has parent div with child, div and button.  The codes are given below.
            </p>
                    <div className={styles.img_div}>
                        <img className={styles.blog_img} src={htmlCode} alt="HTML Code" />
                        
                    </div>
                   
                    <p className={styles.para}>
                    Step 2: Create index.css file.
                    <br/> In this file, we will use css property to style the elements of index.html. The codes are given below.
                    </p>
                        <div className={styles.img_div}>
                            <img className={styles.blog_img} src={cssCode} alt="CSS Code" />
                        </div>
                    
                    <p className={styles.para}>
                    Step 3: Create index.js file. <br/>
                    We are going to use HTML DOM to manipulate the elements. 
                    First of all, we are selecting the target div with id, my_id, where we want to have random background color to fill it. As it has id attribute, we are using "getElementById" method to access it.  Similarly, we do same for the button element. Moreover, we are adding the "addEventListener" method which will have click event and annonymous function, which will be called when the button is clicked. <br/>
                    Now, lets declare some variable with let keyword as we are using ES6 version of Javascript. As we want to use hex code color, we need "#" and declare it. Now, we need hexadecimal values that is A-F and 0-16. So we declare variable with value as shown in the picture below.
                    Finally, we have variable name total to get total value. <br/>We are using "setInterval" method because when user clicks the button, the div element will be filled with random background color after every one second. We are using one second to see the result quicker but can be set any timeframe. Then, we are using for loop. In for loop, we are using "Math.random and Math.floor" in order to get random value and round that value downward to its nearest integer. 
                In order to get six values with "#". We have looped six times. The inner loops work first and repeats until it satisfies the condition. Then,  outer loop just above the inner loop works until the condition is true. Then moves to its outer loop and this way, code continues to execute until it reaches the topmost outer loop. As we have used "setInterval" method, the process never ends. To end the infinite execution, "clearInterval" method can be used. But in this tutorial, it has been used.
                     The code are given below.
                     </p>
                        <div className={styles.img_div}>
                            <img className={styles.blog_img} src={jsCode} alt="JS Code" />
                        </div>
                        <br/><br/>
                        <p className={styles.para}>
                        It's done. Please comment below if you have any queries. cheers!
                    </p>
                </div>

            </div>

            <div className={styles.comments}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.table_header}>Comments</th>
                        </tr>
                        
                    </thead>

                    {filterComment.map(comments => {
                        return (
                            <tbody key={comments._id}>
                                <tr>
                                    
                                    <td className={styles.table_data}>  {comments.comment}
                                        <br />
                                        <span className={styles.span}>-commented by: {comments.name}</span> &nbsp;
                  <span className={styles.span}>on: {moment(comments.commentDate.slice(0, 10)).format("DD/MM/YY")}</span>

                                    </td>
                                   
                                </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
            <div className={styles.links}>
                <p className={styles.link_para}>To comment:</p>
                <Link className={styles.link_one} to="/register">
                    Register
        </Link>{" "}
                or &nbsp;
        <Link className={styles.link_two} to="/login1">
                    Log In
        </Link>
            </div>

            <Footer />
        </div>
    );
};

export default BlogTwo;
