//imports
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	INPUT_TEXT,
	CLEAR_INPUT,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT_USER,
} from "./types"
import axios from "axios"
import setAuthToken from "../utils/setAuthToken"

//ACTIONS

//on input
export const onInput = (details) => (dispatch) => {
	dispatch({
		type: INPUT_TEXT,
		payload: details,
	})
}

//load user
export const loadUser = () => async (dispatch) => {
	setAuthToken(localStorage.getItem("token"))
	try {
		const response = await axios.get("/users/auth")
		console.log("User data (load user action)", response.data.user)
		dispatch({
			type: USER_LOADED,
			payload: response.data.user,
		})
	} catch (err) {
		console.log(err)
		dispatch({
			type: AUTH_ERROR,
		})
	}
}

// register user
export const registerUser = (userdetails) => async (dispatch) => {
	console.log("registerUser called")
	try {
		const response = await axios.post("/users/signup", userdetails)
		console.log(response.data)
		dispatch({
			type: REGISTER_SUCCESS,
			payload: response.data,
		})
		dispatch(loadUser())
	} catch (err) {
		console.log(err.response.data.error)
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.error,
		})
	}
}

//login user
export const login = () => async (dispatch) => {
	console.log("User login action")
}

//logout user
export const logout = () => async (dispatch) => {
	dispatch({
		type: LOGOUT_USER,
	})
}

//clear input fields
export const clearInput = () => (dispatch) => {
	dispatch({
		type: CLEAR_INPUT,
	})
}
