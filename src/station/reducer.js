import {HIDE_AUTH, SHOW_AUTH} from "./type";
import {combineReducers} from "redux";

const initialState = {
  isAuthOpen: false
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, isAuthOpen: true};
    case HIDE_AUTH:
      return {...state, isAuthOpen: false};
    default:
      return {...state, isAuthOpen: false};
  }
}

export const rootReducer = combineReducers({
  isAuthOpenReducer: authReducer
})