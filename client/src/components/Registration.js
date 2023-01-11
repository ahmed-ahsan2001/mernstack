import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./registrationform.css";
const Registration = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const registerData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Sucessfull registration");
      history("/login");
    }
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="h1-signup">Sign Up</h1>
        <form method="POST" className="register-form" id="register-form">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            placeholder="Your Email"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
            placeholder="Your Phone Number"
          />
          <input
            type="text"
            name="work"
            id="work"
            autoComplete="off"
            value={user.work}
            onChange={handleInputs}
            placeholder="Your Profession"
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            placeholder="Your Password"
          />

          <input
            type="password"
            name="cpassword"
            id="cpassword"
            autoComplete="off"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
          />
        </form>
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <label className="label-signup" htmlFor="checkbox">
            I agree to these{" "}
            <NavLink className="linknav" to="/">
              Terms and Conditions
            </NavLink>
          </label>
        </div>
        <button className="sub-btn" onClick={registerData}>
          Sign Up
        </button>
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
