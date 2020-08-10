import {HIDE_AUTH, SHOW_AUTH} from "../type";
import {authInitialState} from "../initial";

export function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, ...action.payload};
    case HIDE_AUTH:
      return {...state, ...action.payload};
    default:
      return {...state};
  }
}