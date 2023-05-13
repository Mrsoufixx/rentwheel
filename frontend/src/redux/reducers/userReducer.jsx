const initialState = {
      loading: false,
      user: null,
      error: null,
      isAuthenticated: false,
      success:false

    };
    
    
    const userReducer = (state = initialState, action) => {
      switch (action.type) {
        // Handle different action types here
        default:
          return state;
      }
    };
    
    export default userReducer;
    
    function userLoginReducer(state = initialState, action) {
      switch (action.type) {
        case "LOADING":
          return {
            ...state,
            loading: true,
          };
        case "LOGIN_SUCCESS":
          return {
            ...state,
            loading: false,
            user: action.payload,
            isAuthenticated: true
          };
        case "LOGIN_FAILURE":
          return {
            ...state,
            loading: false,
            error: "Login failed. Please try again.",
          };
        case "LOGOUT":
          return {
            ...state,
            user: null,
            isAuthenticated: false
          };
        default:
          return state;
      }
    }
    
    function userRegistreReducer(state = initialState, action) {
      switch (action.type) {
        case "USER_REGISTER_REQUEST":
          return {
            ...state,
            loading: true,
            success:false

          };
        case "USER_REGISTER_SUCCESS":
          return {
            ...state,
            loading: false,
            user: action.payload,
            success:true
            // isAuthenticated: true
          };
        case "USER_REGISTER_FAIL":
          return {
            ...state,
            loading: false,
            success:false,
            error: action.payload,
          };
        default:
          return state;
      }
    }
    
    export {userLoginReducer,userRegistreReducer}