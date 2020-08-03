import {LOG_IN, LOG_OUT} from "../type";

const logInitialState = {
  email: "",
  isCarNumberVisible: false,
  isCarVisible: false,
  isPedestrian: false,
  isDriver: false}

export function logInReducer(state = logInitialState, action) {
  switch(action.type) {
    case LOG_IN:
      return { ...state, ...action.payload}
    case LOG_OUT:
      return;
    default:
      return {...state}
  }
}