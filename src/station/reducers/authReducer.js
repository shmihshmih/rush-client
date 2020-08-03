import {HIDE_AUTH, SHOW_AUTH} from "../type";

const authInitialState = {
  isAuthOpen: false,
  authVisClass: "authNotVisible"
}

export function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, isAuthOpen: true, authVisClass: "authVisible"};
    case HIDE_AUTH:
      return {...state, isAuthOpen: false, authVisClass: "authNotVisible"};
    default:
      return {...state};
  }
}