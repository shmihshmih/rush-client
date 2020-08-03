import {HIDE_AUTH, SHOW_AUTH, LOG_IN, LOG_OUT} from "./type";
import {combineReducers} from "redux";
import * as axios from "axios";

const authInitialState = {
  isAuthOpen: false,
  authVisClass: "authNotVisible"
}

function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case SHOW_AUTH:
      return {...state, isAuthOpen: true, authVisClass: "authVisible"};
    case HIDE_AUTH:
      return {...state, isAuthOpen: false, authVisClass: "authNotVisible"};
    default:
      return {...state};
  }
}

const logInitialState = {
  email: "",
  isCarNumberVisible: false,
  isCarVisible: false,
  isPedestrian: false,
  isDriver: false}

function logInReducer(state = logInitialState, action) {
  switch(action.type) {
    case LOG_IN:

      console.log('state', state)
      console.log('action.payLoad', action.payLoad)

      const currentUser = {...action.payLoad}

      const storageName = 'userData'
      const logErrors = []

      try {
        axios.post('http://127.0.0.1:5000/api/auth/', {
          ...currentUser
        })
          .then((res) => {
            if(res.data && res.data.token) {
              console.log('avtorizovalis!')
              localStorage.setItem(storageName, JSON.stringify({
                userEmail: res.data.email, token: res.data.token
              }))
              //props.hideAuth()
            } else {
              if (res.data && (res.data.email || res.data.createdNow)) {

              } else {

              }
            }
          })
          .catch(function (error) {
            logErrors.push(error.message)
          });
      } catch (e) {
        logErrors.push(e.message)
      }

      return { logErrors, asd: 'asdasd'}
    case LOG_OUT:
      return;
    default:
      return {...state}
  }
}

function regOrLoginFormReducer(state = {form: ''}, action) {
  switch(action.type) {
    case 'REG_FORM':
      return {...state, form: 'REG_FORM'}
    case 'LOGIN_FORM':
      return {...state, form: 'LOGIN_FORM'}
    default:
      return {...state, figu:'figu'}
  }
}

export const rootReducer = combineReducers({
  isAuthOpenReducer: authReducer,
  isLogged: logInReducer,
  whichFormToOpen: regOrLoginFormReducer
})