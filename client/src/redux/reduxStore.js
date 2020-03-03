import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import sendObjectCreatorReducer from "./sendObjectCreatorReducer";
import trafficTableReducer from "./trafficTableReducer";

let reducers = combineReducers({
  authReducer,
  sendObjectCreatorReducer,
  trafficTableReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;