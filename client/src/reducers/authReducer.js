import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT_USER,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	CLEAR_ERRORS,
} from "../actions/types"

const initialState = {
	token: null,
	isAuthenticated: null,
	user: null,
	error: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOADED: {
			// console.log(action.payload)
			// console.log("USER_LOADED reducer being fired")
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		}

		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token)
			// console.log("Token set - " + localStorage.getItem("token"))
			return {
				...state,
				token: localStorage.getItem("token"),
				isAuthenticated: true,
			}

		case LOGOUT_USER:
			localStorage.removeItem("token")
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
				error: null,
			}
		case REGISTER_FAIL:
		case LOGIN_FAIL:
			localStorage.removeItem("token")
			// console.log("Token removed")
			return {
				...state,
				token: null,
				error: action.payload,
				isAuthenticated: false,
			}
		case AUTH_ERROR:
			return {
				...state,
				error: "Server Error",
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			}
		default: {
			return state
		}
	}
}
