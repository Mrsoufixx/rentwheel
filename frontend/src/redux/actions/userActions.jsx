import axios from "axios";

// Define action types
export const USER_ACTION_TYPE = 'USER_ACTION_TYPE';

// Define action creators
export const userAction = (payload) => ({
  type: USER_ACTION_TYPE,
  payload,
});


export const userLoginAction = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      reqObj
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log("login success");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    console.log("login failed");
    dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "LOGIN_FAILURE" });
  }
};


export const userRegisterAction = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING", payload: true });
    const response = await axios.post(
      "http://localhost:5000/api/users/register",
      registerData
    );
    // dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error.response.data);
    // dispatch({ type: "LOADING", payload: false });
    dispatch({ type: "USER_REGISTER_FAIL", payload: error.response.data });
  }
};
