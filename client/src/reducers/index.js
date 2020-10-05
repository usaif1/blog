import { combineReducers } from "redux"
import userReducer from "./userReducer"
import authReducer from "./authReducer"
import postReducer from "./postReducer"

export default combineReducers({
	user: userReducer,
	auth: authReducer,
	post: postReducer,
})
