//dependencies
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import ReactModal from "react-modal"

//imports
import NavbarUser from "../Layout/NavbarUser"
import { loadUser } from "../../actions/userActions"
import { getMyPosts, addPost, deletePost } from "../../actions/postActions"
import PostCard from "../Elements/PostCard"
import ErrorMessage from "../Error/ErrorMessage"
import Loader from "../Elements/Loader"
import "./MyPosts.css"
import "./ModalNewPost.css"

ReactModal.setAppElement(document.querySelector("#root"))

const MyPosts = (props) => {
	const [state, setState] = useState({
		isOpen: false,
		post: "",
	})

	const { post, loadUser, getMyPosts, deletePost } = props

	useEffect(() => {
		if (localStorage.getItem("token")) {
			loadUser()
		}
		getMyPosts()

		//eslint-disable-next-line
	}, [post.refresh])

	const openModal = (e) => {
		setState({ isOpen: true })
	}

	const closeModal = (e) => {
		setState({ isOpen: false })
	}

	const addNewPost = (e) => {
		e.preventDefault()
		props.addPost(state.post)
		setState({ isOpen: false })
	}

	const deletePostHandler = (e, id) => {
		deletePost(id)
	}

	const onTextInputHandler = (e) => {
		setState({ post: e.target.value, isOpen: true })
	}

	const postList =
		post.posts.length > 0 ? (
			post.posts.map((post) => {
				return (
					<PostCard
						key={post._id}
						id={post._id}
						name={post.username}
						post={post.post}
						date={post.date}
						canDelete={true}
						deletePost={deletePostHandler}
					/>
				)
			})
		) : (
			<Loader />
		)

	return (
		<div>
			{props.auth.user ? (
				<div>
					<NavbarUser user={props.auth.user} />
					<div className="userposts-container">
						<div className="userpostsheading-heading">
							<h1>My Posts</h1>
							<button className="userposts-btn-add" onClick={openModal}>
								Add New
							</button>
						</div>
						<div className="userposts-cardlist">
							{!post.error ? (
								postList
							) : (
								<ErrorMessage
									errorMsg={post.error}
									classname={"nopost"}
									iconSize={1.5}
									nopost={true}
								/>
							)}
						</div>
						<ReactModal
							isOpen={state.isOpen}
							// style={{ overlay: styles.overlay, content: styles.content }}
							overlayClassName="modal-overlay"
							className="modal-content"
						>
							<h2 className="modal-newpost-title">Add New Post</h2>
							<div className="modal-newpost-form-container">
								<form onSubmit={addNewPost}>
									<textarea
										name="post"
										cols="65"
										rows="8"
										className="modal-newpost-textarea"
										placeholder="Share Your Thoughts..."
										onChange={onTextInputHandler}
										value={state.post}
										required
									></textarea>
									<div className="modal-newpost-buttons">
										<input
											type="submit"
											value="Add"
											className="modal-newpost-button-add"
										/>
										<button
											onClick={closeModal}
											className="modal-newpost-button-cancel"
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</ReactModal>
					</div>
				</div>
			) : (
				<div className="loader-container">
					<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
				</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	post: state.post,
})

export default connect(mapStateToProps, {
	loadUser,
	getMyPosts,
	addPost,
	deletePost,
})(MyPosts)
