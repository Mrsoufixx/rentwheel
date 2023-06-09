import React, { createContext, useReducer, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // import Routes component

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addbikes from "./components/dashboardComponents/Addbikes";
import Rentbikereports from "./components/dashboardComponents/Rentbikereports";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Getrentbikes from "./components/dashboardComponents/Getrentbikes";
import Mycart from "./components/Mycart";
import Rentabike from "./components/Rentabike";
import Rentbikecart from "./components/Rentbikecart";
import Rentbikereviews from "./components/Rentbikereviews";
import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";

import {initialState, reducer} from "./reducer/UseReducer"
import {adminInitialState, adminreducer} from "./reducer/UseReducerAdmin"
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {
  

  const [state, dispatch] = useReducer(reducer, initialState)
  const [adminState, dispatchadmin] = useReducer(adminreducer, adminInitialState)

  return (
    <>
    <Navbar/>
      <UserContext.Provider value={{state, dispatch}}>
        <Routes> {/* wrap all Route components inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/rentbike" element={<Rentabike />} />
          <Route path="/rentbikecart" element={<Rentbikecart />} />
          <Route path="/rentbikereviews" element={<Rentbikereviews />} />
          <Route path="/exploreRentBikes" element={<ExploreRentBike />} />
        </Routes>
      </UserContext.Provider>

      <AdminContext.Provider value={{adminState, dispatchadmin}}>
        <Routes> {/* wrap all Route components inside Routes */}
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/adminsignout" element={<AdminSignout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addbikes" element={<Addbikes />} />
          <Route path="/rentbikesreports" element={<Rentbikereports />} />
          <Route path="/availableusers" element={<Availableusers />} />
          <Route path="/getrentbikesforadmin" element={<Getrentbikes />} />
        </Routes>
      </AdminContext.Provider>
      <Footer/>
    </>
  );
}

export default App;



// import React from 'react';
// import { Provider } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';

// import Home from './components/Home';
// import Signin from './components/Signin';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard';
// import AdminSignin from './components/AdminSignin';
// import AdminSignout from './components/AdminSignout';
// import AddBikes from './components/dashboardComponents/AddBikes';
// import RentBikeReports from './components/dashboardComponents/RentBikeReports';
// import AvailableUsers from './components/dashboardComponents/AvailableUsers';
// import GetRentBikes from './components/dashboardComponents/GetRentBikes';
// import MyCart from './components/MyCart';
// import RentABike from './components/RentABike';
// import RentBikeCart from './components/RentBikeCart';
// import RentBikeReviews from './components/RentBikeReviews';
// import Signout from './components/Signout';
// import ExploreRentBike from './components/ExploreRentBike';

// import store from './redux/store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signout" element={<Signout />} />
//         <Route path="/mycart" element={<MyCart />} />
//         <Route path="/rentbike" element={<RentABike />} />
//         <Route path="/rentbikecart" element={<RentBikeCart />} />
//         <Route path="/rentbikereviews" element={<RentBikeReviews />} />
//         <Route path="/exploreRentBikes" element={<ExploreRentBike />} />
//         <Route path="/adminsignin" element={<AdminSignin />} />
//         <Route path="/adminsignout" element={<AdminSignout />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/addbikes" element={<AddBikes />} />
//         <Route path="/rentbikesreports" element={<RentBikeReports />} />
//         <Route path="/availableusers" element={<AvailableUsers />} />
//         <Route path="/getrentbikesforadmin" element={<GetRentBikes />} />
//       </Routes>
//     </Provider>
//   );
// };

// export default App
