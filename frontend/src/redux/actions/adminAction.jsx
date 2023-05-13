// Define action types
export const ADMIN_ACTION_TYPE = 'ADMIN_ACTION_TYPE';

// Define action creators
export const adminAction = (payload) => ({
  type: ADMIN_ACTION_TYPE,
  payload,
});