import {CHANGE_CURRENT_LOG_FORM, LOG_STATUS} from "../type";
import { openLoginForm, openRegForm} from "./regLoginFormAction";
import {authAPI} from "../../api/authAPI";
import {hideAuth} from "./authAction";

const storageName = 'userData'

export const isUserExistTC = email => async dispatch => {
  const userExistence = await authAPI.isUserExist(email)
  if (userExistence.status === 666) {
    dispatch(openRegForm())
  }
  if (userExistence.status === 777) {
    dispatch(openLoginForm())
  }
  return userExistence
}

export const logIn = (email, password) => async dispatch => {
  const logInData = await authAPI.logIn(email, password)
  if (logInData.status === 888) {
    console.log('ne sovpal(((')
  }
  if (logInData.status === 555) {
    if (logInData && logInData.token) {
      localStorage.setItem(storageName, JSON.stringify({
        userEmail: logInData.email, token: logInData.token
      }))
      dispatch(logStatus())
      dispatch(hideAuth())
    }
  }
}

export const registration = formData => async dispatch => {
  const regData = await authAPI.registration(formData)
  if(regData.status === 999) {
    dispatch(logIn(regData.user.email, regData.user.password))
  }
}

export function logStatus() {
  return {
    type: LOG_STATUS,
    payload: JSON.parse(localStorage.getItem(storageName)) || false
  }
}

export function changeCurrentLogForm(userForm) {
  return {
    type: CHANGE_CURRENT_LOG_FORM,
    payload: userForm
  }
}