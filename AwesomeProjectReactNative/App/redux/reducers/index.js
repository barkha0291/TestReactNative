import {combineReducers} from "redux";
import apiReducer from "./home";
import NavigationReducer from "./navigation";
import userReducer from "./user";


const AppReducer = combineReducers({
    apiReducer,
    userReducer,
    NavigationReducer
});

export default AppReducer;