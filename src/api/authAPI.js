import * as axios from "axios";
import {BASE_URL} from "./config.default";

export const authAPI = {
   isUserExist: async (email) => {
     const userExisting = axios.post(BASE_URL + 'api/auth/', {email})
        .then( (res) => {
          return {...res.data}
        })
     return userExisting
  },
  logIn: async (email, password) => {
     const logInData = axios.post(BASE_URL + 'api/auth/', {email, password})
        .then( (res) => {
          return {...res.data}
        })
        .catch(function (error) {
          return error
        });

     return logInData
  },
  registration: async (formData) => {
     const regData = axios.post(BASE_URL + 'api/auth/', {...formData})
       .then( (res) => {
         return {...res.data}
       })
       .catch( (e) => {
         return e
       })
     return regData
  }
}
