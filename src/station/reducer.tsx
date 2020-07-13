import {HIDE_AUTH, SHOW_AUTH} from "./type";
import {combineReducers} from "redux";

function authReducer(state: any, action: any) {
  switch (action.type) {
    case SHOW_AUTH:
      console.log('show auth');
      return {...state, isAuthOpen: true};
    case HIDE_AUTH:
      console.log('hide AUTH')
      return {...state, isAuthOpen: false};
    default:
      return {...state};
  }
}

export const rootReducer = combineReducers({
  auth: authReducer
})