import {HIDE_AUTH, SHOW_AUTH} from "./type";
import {combineReducers} from "redux";

function authReducer(state, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, isAuthOpen: true};
      break;
    case HIDE_AUTH:
      return {...state, isAuthOpen: false};
      break;
    default:
      return {...state, isAuthOpen: false};
      break;
  }
}

export const rootReducer = combineReducers({
  isAuthOpenReducer: authReducer
})