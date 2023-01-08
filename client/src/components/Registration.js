import React from "react";
import { NavLink } from "react-router-dom";
import "../registrationform.css";
const Registration = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Sign Up</h1>
        <form className="register-form" id="register-form">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Your Email"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Your Phone Number"
          />
          <input
            type="text"
            name="work"
            id="work"
            autoComplete="off"
            placeholder="Your Profession"
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Your Password"
          />

          <input
            type="password"
            name="cpassword"
            id="cpassword"
            autoComplete="off"
            placeholder="Confirm Password"
          />
        </form>
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">
            I agree to these{" "}
            <NavLink className="linknav" to="/">
              Terms and Conditions
            </NavLink>
          </label>
        </div>
        <button className="sub-btn">Sign Up</button>
        <div className="member">
          Already a member
          <NavLink className="linknav" to="/login">
            Login Here
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Registration;
