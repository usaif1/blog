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
		console.log("Add Post Error -", err.response.data.error[0].msg)
		let error
		err.response.data.error !== undefined
			? (error = err.response.data.error[0].msg)
			: (error = "Can't connect to server")
		console.log(error)
		dispatch({
			type: ADD_POST_FAIL,
			payload: error,
		})
	}
}

//clear posts
export const clearPosts = () => (dispatch) => {
	console.log("clear post")
}

//delete post
export const deletePost = (id) => async (dispatch) => {
	// console.log("Delete Post called")
	try {
		//imp -  delete request doesn't accept body. Instead we send the data under data. However, it is received as req.body
		const response = await axios.delete("/post/delete", {
			data: {
				id: id,
			},
		})
		console.log(response.data)
		dispatch({
			type: DELETE_POST,
		})
	} catch (err) {
		console.log(err.response)
	}
}
