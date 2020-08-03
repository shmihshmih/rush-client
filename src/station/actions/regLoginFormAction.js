import {OPEN_LOGIN_FORM, OPEN_REG_FORM} from "../type";

export function openRegForm() {
  return {
    type: OPEN_REG_FORM,
    payload: 'registration'
  }
}

export function openLoginForm() {
  return {
    type: OPEN_LOGIN_FORM,
    payload: 'login'
  }
}