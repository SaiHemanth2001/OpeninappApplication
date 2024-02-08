import React from 'react';
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

function ComponentWithDualBackground() {


  return (
    <div>
      <div className='leftHalfStyle'>
        <svg className='logo' width="87" height="81" viewBox="0 0 87 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="44.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
          <path d="M2.02979 37.0531L32.0871 51.7478L58.8048 29.7058L84.8545 43.0646" stroke="#605BFF" stroke-width="6" />
        </svg>

        <h1 className='title'>BASE</h1>
        <div className="footer">
          <div className="icons">
            <FaGithub className='git' />
            <AiFillTwitterCircle className='twitter' />
            <FaLinkedin className='linkedin' />
            <IoLogoDiscord className='discord' />
          </div>
        </div>
      </div>
      <div className='rightHalfStyle'>
        <div >
          <h2 className="Auth-form-title"><b>Sign In</b></h2>
          <h6 className="Auth-form-title">Sign in to your account</h6>
          <br/>
          <div className="button-container">
            <button className="rounded-button"><FcGoogle /> Sign in with Google</button>
            <button className="rounded-button"><FaApple /> Sign in with Apple</button>
          </div>
          <br />
          <form className="Auth-form" >
            <div className="Auth-form-content">


              <div className="form-group mt-3">
                <label><b>Email address</b></label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label><b>Password</b></label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <a type="submit" className="button3" href='/upload'>
                  Sign In
                </a>
                <div className='d-grid slide'>
                  <a href='/' style={{ textDecoration: 'none' }}>Forgot password?</a>
                </div>
              </div>
            </div>
          </form>
          <span style={{ color: 'grey' }}>Don't have an account? <a href='/' style={{ textDecoration: 'none' }}>Register here</a> </span>
        </div>
      </div>
    </div>
  );
}

export default ComponentWithDualBackground;
