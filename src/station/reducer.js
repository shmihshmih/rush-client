import {HIDE_AUTH, SHOW_AUTH} from "./type";
import {combineReducers} from "redux";

const initialState = {
  isAuthOpen: false,
  authVisClass: "authNotVisible"
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, isAuthOpen: true, authVisClass: "authVisible"};
    case HIDE_AUTH:
      return {...state, isAuthOpen: false, authVisClass: "authNotVisible"};
    default:
      return {...state};
  }
}

export const rootReducer = combineReducers({
  isAuthOpenReducer: authReducer
})