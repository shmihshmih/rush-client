import {combineReducers} from "redux";
import {authReducer} from "./reducers/authReducer";
import {logInReducer} from "./reducers/logInReducer";
import {regFormReducer} from "./reducers/regFormReducer";

export const rootReducer = combineReducers({
  isAuthOpenReducer: authReducer,
  isLogged: logInReducer,
  whichFormOpen: regFormReducer,
  currentLogForm: logInReducer
})