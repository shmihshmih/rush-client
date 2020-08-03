import {HIDE_AUTH, SHOW_AUTH} from "../type";

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