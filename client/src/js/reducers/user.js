import {
  LOAD_USER,
  LOGIN_USER,
  FAIL_USER,
  REGISTER_USER,
  CURRENT_USER,
  LOGOUT_USER,
} from "../const/user";
const initialState = {
  user: null,
  loadUser: false,
  errors: null,
  isAuth: false,
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, isAuth: true, user: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: null,
        loadUser: false,
        errors: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
