//imports
import { REGISTER_USER, LOGIN_USER, INPUT_TEXT, CLEAR_INPUT } from "./types"
import axios from "axios"

//ACTIONS

//on input
export const onInput = (details) => (dispatch) => {
	dispatch({
		type: INPUT_TEXT,
		payload: details,
	})
}

// register user
export const registerUser = (userdetails) => async (dispatch) => {
	console.log("Register User Action Called")
	console.log(userdetails)

	try {
		const response = await axios.post("/users/signup", userdetails)
	} catch (error) {}
}

//login user
export const login = () => (dispatch) => {
	console.log("Action login Called")
}

//clear input fields
export const clearInput = () => (dispatch) => {
	dispatch({
		type: CLEAR_INPUT,
	})
}
