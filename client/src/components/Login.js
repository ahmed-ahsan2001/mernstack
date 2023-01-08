import React from "react";
import { NavLink } from "react-router-dom";
import "../loginform.css";
const Login = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Login</h1>
        <form className="register-form" id="register-form">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Your Email"
          />

          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Your Password"
          />
          <div className="recover">
            <NavLink className="linknav" to="">
              Forgot Password?
            </NavLink>
          </div>
        </form>
        <button className="sub-btn">Login</button>
        <div className="member">
          Not a member?
          <NavLink className="linknav" to="/registration">
            Register Now
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Login;
