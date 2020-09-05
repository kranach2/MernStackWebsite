import React from "react";
import { useState, useEffect } from "react";
import styles from "../css/Login.module.css";
import Footer from "./Footer";
import axios from "axios";
const Login1 = () => {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState(null);
  const [login, setLogin] = useState(false);
  const [store, setStore] = useState(null);
  const [comment, setcomment] = useState("Add comments....");
  const[error, seterror]=useState(false);
  useEffect(() => {
    storeCollector()
  }, []);

  const storeCollector = () =>{
    let store = JSON.parse(localStorage.getItem("login"));
    setStore(store)
    
    if(store){
setLogin(true);

    }
  }

  const handleLogout = ()=>{
    localStorage.clear(store);
   setLogin(false);
   setmessage("Logged out successfully");
    
  }

  const handleEmail = e => {
    return setemail(e.target.value);
  };
  const handlePassword = e => {
    return setpassword(e.target.value);
  };
  const handleEmailKey = () => {
    return seterror("");
  };
  const handlePasswordKey = () => {
    return seterror("");
  };
  
  const handleComment = (e) =>{
    setcomment(e.target.value);
}
  
  const handleSubmitComment = e => {
    e.preventDefault();
    let token =  store.token;
    let name = store.name 
    const comments = {
      blogId:"2",
      comment: comment,
      name:name
    };
  
    axios.post("comments/add", comments, { headers : {
      
      "x-auth-token":token
      
            }}).then(res => { 
      
      setLogin(true);
      setcomment("");
      setmessage("Posted succesfully!");
      
      
    });
  

  }
  const handleSubmit = e => {
    e.preventDefault();

      const user = {
        email: email,
        password: password,
        
      };
    
      axios.post("userauthentication", user).then(res => { 
        
        localStorage.setItem("login", JSON.stringify({
          login:true,
          token:res.data.token,
          name: `${res.data.user.firstname} ${res.data.user.lastname}`
          
        }));        
        setmessage("You are Loggedin!");
        seterror("");     
        setpassword("");
        setemail("");
        storeCollector()
      })
      .catch(err=>{
        if(err.response){
          return seterror(err.response.data.msg);
      }})
   
  };

  return (
    <div className={styles.wrapper}>
      { !login ?
      
      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.center_div}>
            <h2 className={styles.heading_two}>Login In</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.email_div}>
                <input
                  onChange={handleEmail}
                  onKeyDown={handleEmailKey}
                  className={styles.email}
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email &#42;"
                />
              </div>
              <br />
              <div className={styles.password_div}>
                <input
                onChange={handlePassword}
                onKeyDown={handlePasswordKey}
                  className={styles.password}
                  value={password}
                  type="password"
                  name="password"
                  placeholder="Password &#42;"
                />
              </div>
              <br />
              <div className={styles.message_span}>
      <span className={styles.message}>{message}</span>
      </div>
              <div className={styles.error}>{error}</div>
              <div className={styles.login_button_div}>
                <button className={styles.login_button} type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      :
      
      <div className={styles.comment_container}>
        <div className={styles.header}>
      <p className={styles.header_para}>Welcome {store.name}</p>
          <button onClick={handleLogout} className={styles.logout_button}>Logout</button>
          </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmitComment}>
          <textarea
          onChange={handleComment}
            className={styles.textarea}
            name="comment"
            id=""
            cols="30"
            rows="10"
            value={comment}
          ></textarea>
          <button className={styles.submitComment} type="submit" >Submit</button>
        </form>
      </div>
      <div className={styles.message_span}>
      <span className={styles.message}>{message}</span>
      </div>
</div>
}
      <Footer />

    </div>

    
  );
};
export default Login1;
