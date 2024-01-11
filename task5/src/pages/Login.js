import React from 'react'
import Navbar from "../components/Navbar";
import  LoginStyle  from "../style/LoginStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";

const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/profile");
  };

    const handleSignUpClick = () => {
      const container = document.getElementById('logincontainer');
      container.classList.add('right-panel-active');
    };
  
    const handleSignInClick = () => {
      const container = document.getElementById('logincontainer');
      container.classList.remove('right-panel-active');
    };
    

  return (
    <div className="loginParent">
    <Navbar />
    <div className='loginbox'>
      <h2>Welcome to the world of entrepreneurship</h2>
      <div className="logincontainer" id="logincontainer">
        <div className="loginform-container loginsign-up-container">
          <form onSubmit={onClick}>
            <h1 className='loginheading'>Create Account</h1>
            <div className="social-container">
        <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button className='loginbutton'>Sign Up</button>
          </form>
        </div>
        <div className="loginform-container loginsign-in-container">
          <form onSubmit={onClick}>
            <h1 className='loginheading'>Sign in</h1>
            <div className="social-container">
        <a href="" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button className='loginbutton'>Sign In</button>
          </form>
        </div>
        <div className="loginoverlay-container">
          <div className="loginoverlay">
            <div className="loginoverlay-panel overlay-left">
              <h1 className='loginheading'>Welcome Back!</h1>
              <p className='loginpara'> To keep connected with us, please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="loginoverlay-panel overlay-right">
              <h1 className='loginheading'>Hello, Friend!</h1>
              <p className='loginpara'>Enter your personal details and start the journey with us</p>
              <button className="ghost" id="signUp"  onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>
  )
}

export default Login