import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import adminReducer from './reducers/adminReducer';

// Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
