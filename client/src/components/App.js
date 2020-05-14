import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import Navbar from "./Navbar";
import Rmenu from "./Rmenu";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import Resume from "./Resume";
import Contact from "./Contact";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import Register from "./Register";
import Login from "./Login";
import Login1 from "./Login1";

// const Home = lazy( () => import("./Home"));
 //const About = lazy( () => import("./About"));
// const Blog = lazy( () => import("./Blog"));
// const Resume = lazy( () => import("./Resume"));
// const Contact = lazy( () => import("./Contact"));
// const Navbar = lazy( () => import("./Navbar"));
// const Rmenu = lazy( () => import("./Rmenu"));
// const TermsOfService = lazy( () => import("./TermsOfService"));
// const PrivacyPolicy = lazy( () => import("./PrivacyPolicy"));
// const Register = lazy( () => import("./Register"));
// const Login = lazy( () => import("./Login"));

function App() {
  const [change, setchange] = useState(false);
  const handleClick = ()=>{
    setchange(!change);
    
    }

  return (
    <div className="App">
      <Router>
        <Navbar handleClick={handleClick}/>
        <Rmenu show={change} handleClick={handleClick}/>
        <ScrollToTop> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blogs" component={Blogs} />
         <Route path="/blog-arrow-function" component={BlogOne} />
         <Route path="/blog-generate-random-color-with-javascript" component={BlogTwo} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/login1" component={Login1} />
        </Switch>
        </ScrollToTop>
        
        </Router>  
    </div>
  );
}
export default App;

