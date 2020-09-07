import {
	DELETE_POST,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAIL,
	ADD_POST_SUCCESS,
	ADD_POST_FAIL,
	GET_ALL_POSTS,
	CLEAR_POSTS,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAIL,
} from "../actions/types"

const initialState = {
	posts: [],
	error: null,
	refresh: false,
	allposts: [],
	profileUser: null,
	profilePosts: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_MY_POSTS_SUCCESS:
			return {
				...state,
				posts: [...action.payload],
			}
		case ADD_POST_SUCCESS:
			return {
				...state,
				refresh: !state.refresh,
				error: null,
			}
		case ADD_POST_FAIL:
			return {
				...state,
				error: action.payload,
			}
		case GET_MY_POSTS_FAIL:
			return {
				...state,
				error: action.payload,
			}
		case DELETE_POST:
			return {
				...state,
				refresh: !state.refresh,
			}
		case GET_ALL_POSTS:
			return {
				...state,
				allposts: action.payload,
			}
		case CLEAR_POSTS:
			return {
				...state,
				posts: [],
			}
		case GET_PROFILE_SUCCESS:
			return {
				...state,
				profileUser: action.payload.username,
				profilePosts: [...action.payload.posts],
				refresh: !state.refresh,
			}
		case GET_PROFILE_FAIL:
			return {
				...state,
				error: action.payload,
			}
		default:
			return {
				...state,
			}
	}
}
