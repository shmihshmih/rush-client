import {CLOSE_LOGIN_REG_FORM, OPEN_LOGIN_FORM, OPEN_REG_FORM} from "../type";
import {regFormInitialState} from "../initial";

export function regFormReducer(state = regFormInitialState, action) {
  switch(action.type) {
    case OPEN_REG_FORM:
      return {...action.payload}
    case OPEN_LOGIN_FORM:
      return {...action.payload}
    case CLOSE_LOGIN_REG_FORM:
      return {...action.payload}
    default:
      return {...state}
  }
}