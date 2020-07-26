import {HIDE_AUTH, SHOW_AUTH, LOG_IN, LOG_OUT} from "./type";

export function hideAuth() {
  return {
    type: HIDE_AUTH
  }
}

export function showAuth() {
  return {
    type: SHOW_AUTH
  }
}

export function logIn(user) {
  return {
    type: LOG_IN,
    payLoad: user
  }
}

export function logOut(user) {
  return {
    type: LOG_OUT
  }
}