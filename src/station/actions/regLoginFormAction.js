import {CLOSE_LOGIN_REG_FORM, OPEN_LOGIN_FORM, OPEN_REG_FORM} from "../type";

export function openRegForm() {
  return {
    type: OPEN_REG_FORM,
    payload: {formType: 'registration'}
  }
}

export function openLoginForm() {
  return {
    type: OPEN_LOGIN_FORM,
    payload: {formType: 'login'}
  }
}

export function closeLoginRegForm() {
  return {
    type: CLOSE_LOGIN_REG_FORM,
    payload: {formType: null}
  }
}