import { combineReducers } from "redux";
import CounterReducers from './reducers'

export default combineReducers({counter : CounterReducers})