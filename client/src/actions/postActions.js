import {
	ADD_POST_SUCCESS,
	DELETE_POST,
	ADD_POST_FAIL,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAIL,
} from "./types"
import axios from "axios"
import setAuthToken from "../utils/setAuthToken"

//load user posts
export const getMyPosts = () => async (dispatch) => {
	try {
		const response = await axios.get("/post/myposts")
		console.log("load user data -", response.data)
		dispatch({
			type: GET_MY_POSTS_SUCCESS,
			payload: response.data.posts,
		})
	} catch (err) {
		dispatch({
			type: GET_MY_POSTS_FAIL,
			payload: err.response,
		})
	}
}

// add new post
export const addPost = (post) => async (dispatch) => {
	setAuthToken(localStorage.getItem("token"))
	console.log("post -", post)
	try {
		const body = { post: post }
		await axios.post("/post/addnew", body)
		dispatch({
			type: ADD_POST_SUCCESS,
		})
	} catch (err) {
		console.log("Add Post Error -", err)
		dispatch({
			type: ADD_POST_FAIL,
		})
	}
}

//clear posts
export const clearPosts = () => (dispatch) => {
	console.log("clear post")
}

//delete post
export const deletePost = (post) => (dispatch) => {}
