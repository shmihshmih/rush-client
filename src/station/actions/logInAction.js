import * as axios from "axios";
import {LOG_IN, LOG_OUT} from "../type";

const storageName = 'userData'
const logErrors = []

export function logIn(user) {
  const currentUser = {...user}
  try {
    axios.post('http://127.0.0.1:5000/api/auth/', {
      ...currentUser
    })
      .then( async (res) => {
        if(res.data && res.data.token) {
          console.log('avtorizovalis!')
          localStorage.setItem(storageName, JSON.stringify({
            userEmail: res.data.email, token: res.data.token
          }))
          //hideAuth()
        } else {
          if (res.data && (res.data.email || res.data.createdNow)) {
            //openRegForm = Object.assign({},{v:'login'})
          } else {
            //openRegForm = Object.assign({},{v:'register'})
          }
        }
      })
      .catch(function (error) {
        logErrors.push(error.message)
      });
  } catch (e) {
    logErrors.push(e.message)
  }
  return {
    type: LOG_IN,
    payLoad: {user: {...currentUser}, logErrors}
  }
}

export function logOut(user) {
  return {
    type: LOG_OUT
  }
}