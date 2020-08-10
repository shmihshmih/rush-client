import {HIDE_AUTH, SHOW_AUTH} from "../type";

export function hideAuth() {
  return {
    type: HIDE_AUTH,
    payload: {isAuthOpen: false, authVisClass: "authNotVisible"}
  }
}

export function showAuth() {
  return {
    type: SHOW_AUTH,
    payload:  {isAuthOpen: true, authVisClass: "authVisible"}
  }
}