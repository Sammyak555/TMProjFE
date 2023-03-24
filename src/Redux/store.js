import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  
  
  import thunk from "redux-thunk";
  import {userReducer} from "../Redux/User/reducer.js"
  import { projectReducer } from "./Operation/reducer.js";
  
  const rootReducer = combineReducers({
    userReducer,
    projectReducer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );