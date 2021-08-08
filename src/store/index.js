import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import imageListReducer from '../reducers/imageList'
import thunk from 'redux-thunk'
import modalReducer from "../reducers/modal";

const reducer = combineReducers({
    imageList: imageListReducer,
    modal: modalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); 
export default store;