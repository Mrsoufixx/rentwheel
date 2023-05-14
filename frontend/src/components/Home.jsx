import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../App";
import axios from "axios";
import Banner from "./home/Banner";
import StaticCards from "./home/StaticCards";
import Services from "./home/Services";
import Contact from "./home/Contact";

const Home = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { state, dispatch } = useContext(UserContext);

  const userContact = async () => {
    try {
      const res = await axios.get("/getdata");

      const data = res.data;

      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  

  const Loginbutton = () => {
    if (state) {
      return (
        <div>
          <button>
            <NavLink className="btn" to="/signout">
              logout
            </NavLink>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button>
            <NavLink className="btn" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      );
    }
  };

  return (
    <>
    
      <Banner/>

      <StaticCards/>

     <Services/>

<Contact/>
      

      
    </>
  );
};

export default Home;
