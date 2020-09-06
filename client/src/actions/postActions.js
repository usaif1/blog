//dependencies
import axios from "axios"
import moment from "moment"

//imports
import {
	ADD_POST_SUCCESS,
	DELETE_POST,
	ADD_POST_FAIL,
	GET_MY_POSTS_SUCCESS,
	GET_MY_POSTS_FAIL,
	GET_ALL_POSTS,
	CLEAR_POSTS,
} from "./types"
import setAuthToken from "../utils/setAuthToken"

//get all posts
export const getAllPosts = () => async (dispatch) => {
	try {
		const response = await axios.get("/post/showall")
		// console.log(response.data)
		dispatch({
			type: GET_ALL_POSTS,
			payload: response.data,
		})
	} catch (err) {
		console.log(err)
	}
}

//get user posts
export const getMyPosts = () => async (dispatch) => {
	try {
		const response = await axios.get("/post/myposts")
		dispatch({
			type: GET_MY_POSTS_SUCCESS,
			payload: response.data.posts,
		})
	} catch (err) {
		console.log(err.response.data.error)
		dispatch({
			type: GET_MY_POSTS_FAIL,
			payload: err.response.data.error,
		})
	}
}

// add new post
export const addPost = (post) => async (dispatch) => {
	const date = moment().format("MMM D, YYYY LTS")
	console.log(date)
	setAuthToken(localStorage.getItem("token"))
	console.log("post -", post)
	try {
		const body = { post: post, date: date }
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
	dispatch({
		type: CLEAR_POSTS,
	})
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
