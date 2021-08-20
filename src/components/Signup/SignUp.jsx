import React, { useState } from "react";
import "./Signup.css";

const SignUp = () => {
  const [active, setActive] = useState(false);

  //   const changeClass = () => {
  //     setActive("signUp");
  //   };
  //   const changeClass1 = () => {
  //     setActive("signIn");
  //   };

  return (
    <div className="signUpForm">
      <div className={active ? "con right-panel-active" : "con"}>
        <div className="form-container sign-up-container">
          <form
            action="#"
            className=" sign-form d-flex align-items-center justify-content-center flex-column text-center"
          >
            <h1 className="signIn-text">Create Account</h1>
            <div className="social-container"></div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" className="sign-input" />
            <input type="email" placeholder="Email" className="sign-input" />
            <input
              type="password"
              placeholder="Password"
              className="sign-input"
            />
            <button className="btn ph-btn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            className="sign-form d-flex align-items-center justify-content-center flex-column text-center"
            action="#"
          >
            <h1 className="signIn-text">Sign in</h1>
            <div className="social-container"></div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" className="sign-input" />
            <input
              type="password"
              placeholder="Password"
              className="sign-input"
            />
            {/* <a href="#">Forgot your password?</a> */}
            <button className="btn ph-btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left d-flex align-items-center justify-content-center flex-column text-center">
              <h1>Welcome Back!</h1>
              <p className="des-text">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setActive(false)}
                className="ghost ph-btn"
                id="signIn "
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="des-text">
                Enter your personal details and start journey with us
              </p>
              <button
                onClick={() => setActive(true)}
                className="ghost ph-btn"
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
