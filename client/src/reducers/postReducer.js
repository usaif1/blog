import {
	DELETE_POST,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAIL,
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
} from "../actions/types"

const initialState = {
	posts: [],
	error: null,
	refresh: false,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_MY_POSTS_SUCCESS:
			console.log("reducer get posts success fired, payload - ", action.payload)
			return {
				...state,
				posts: [...action.payload],
			}
		case ADD_POST_SUCCESS:
			return {
				...state,
				refresh: !state.refresh,
			}
		case ADD_POST_FAIL:
			return {
				...state,
			}
		case GET_MY_POSTS_FAIL:
			return {
				...state,
			}
		default:
			return {
				...state,
			}
	}
}
