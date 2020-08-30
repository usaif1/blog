import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT_USER,
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
			console.log(action.payload)
			console.log("USER_LOADED reducer being fired")
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			}
		}

		case REGISTER_SUCCESS: {
			localStorage.setItem("token", action.payload.token)
			// console.log("Token set - " + localStorage.getItem("token"))
			return {
				...state,
				token: localStorage.getItem("token"),
				isAuthenticated: true,
			}
		}
		case LOGOUT_USER:
			localStorage.removeItem("token")
			return {
				...state,
				token: null,
				isAuthenticated: false,
				user: null,
			}
		case REGISTER_FAIL:
		case AUTH_ERROR:
			localStorage.removeItem("token")
			// console.log("Token removed")
			return {
				...state,
				token: null,
				error: action.payload,
				isAuthenticated: false,
			}

		default: {
			return state
		}
	}
}
