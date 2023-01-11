import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./loginform.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("login failed");
    } else {
      window.alert("sucessfully logged in");
      navigate("/");
    }
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="h1-login">Login</h1>
        <form method="POST" className="register-form" id="register-form">
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Your Email"
            value={email}
          />

          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Your Password"
          />
          <div className="recover">
            <NavLink className="linknav" to="">
              Forgot Password?
            </NavLink>
          </div>
        </form>
        <button onClick={loginUser} className="sub-btn">
          Login
        </button>
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
