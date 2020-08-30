import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_USER,
	INPUT_TEXT,
	CLEAR_INPUT,
} from "../actions/types"

const initialState = {
	username: "",
	email: "",
	password: "",
}

export default function (state = initialState, action) {
	switch (action.type) {
		case INPUT_TEXT: {
			return {
				...state,
				[action.payload.target]: action.payload.value,
			}
		}
		case CLEAR_INPUT: {
			return {
				...state,
				username: "",
				email: "",
				password: "",
			}
		}
		default: {
			return {
				...state,
			}
		}
	}
}
