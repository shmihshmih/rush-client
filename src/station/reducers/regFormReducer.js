import {OPEN_LOGIN_FORM, OPEN_REG_FORM} from "../type";

export function regFormReducer(state = '', action) {
  console.log('action regFormReducer', action)
  switch(action.type) {
    case OPEN_REG_FORM:
      return {...action.payload}
    case OPEN_LOGIN_FORM:
      return {...action.payload}
    default:
      return {...state, caca:" default"}
  }
}