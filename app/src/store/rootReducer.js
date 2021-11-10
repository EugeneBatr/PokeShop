import { combineReducers } from "redux";
import authReducer from "../pages/loginPage/reducers";


const rootReducer = combineReducers({
        auth: authReducer
});

export default rootReducer