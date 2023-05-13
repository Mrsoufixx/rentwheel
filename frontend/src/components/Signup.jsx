import React, { useState } from "react";
import "../registerStyle.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, phone, email, password, cPassword } = user;
    console.log(user)

    try {
      const res = await axios.post("/register", {
        name,
        phone,
        email,
        password,
        cPassword,
      });
      console.log(res)
      const data = res.data;
      

      if (data.status === 422 || !data) {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        window.alert("Registration successful");
        console.log("Registration successful");

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>

        <NavLink className="logo" to="/">
          {" "}
          <label>Bike</label>Book{" "}
        </NavLink>

        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exploreRentBikes">Bike Showcase</NavLink>
        </nav>

        <div id="login-btn">
          <button className="btn">
            <NavLink className="nav-link" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      </header>

      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled">Registration</div>
          <div className="content">
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <label className="details">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-box">
                  <label className="details">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-box">
                  <label className="details">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Enter your number"
                  />
                </div>
                <div className="input-box">
                  <label className="details">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="input-box">
                  <label className="details">Confirm Password</label>
                  <input
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    value={user.cPassword}
                    onChange={handleInputs}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div className="button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="register"
                  onClick={postData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
