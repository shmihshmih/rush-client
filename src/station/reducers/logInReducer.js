import {CHANGE_CURRENT_LOG_FORM, LOG_IN, LOG_OUT, LOG_STATUS, USER_REGISTRATION} from "../type";
import {logInitialState} from "../initial";

export function logInReducer(state = logInitialState, action) {
  switch(action.type) {
    case LOG_IN:
      return { ...state, ...action.payload}
    case LOG_OUT:
      return;
    case CHANGE_CURRENT_LOG_FORM:
      return { ...state, ...action.payload};
    case LOG_STATUS:
      return {...state, ...action.payload}
    case USER_REGISTRATION: {
      return {...state, ...action.payload}
    }
    default:
      return {...state}
  }
}