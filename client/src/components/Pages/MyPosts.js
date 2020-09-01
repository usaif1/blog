//dependencies
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { v4 as uuid } from "uuid"
import ReactModal from "react-modal"

//imports
import NavbarUser from "../Layout/NavbarUser"
import { loadUser } from "../../actions/userActions"
import PostCard from "../Elements/PostCard"
import "./MyPosts.css"

const MyPosts = (props) => {
	const [state, setState] = useState({ isOpen: false })

	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.loadUser()
		}
		// eslint-disable-next-line
	}, [props.auth.isAuthenticated])

	const openModal = (e) => {
		setState({ isOpen: true })
	}

	const closeModal = (e) => {
		setState({ isOpen: false })
	}

	return (
		<div>
			{props.auth.user ? <NavbarUser user={props.auth.user} /> : "Loading.."}
			<div className="userposts-container">
				<div className="userpostsheading-heading">
					<h1>My Posts</h1>
					<button className="userposts-btn-add" onClick={openModal}>
						Add New
					</button>
				</div>
				<div className="userposts-cardlist">
					<PostCard />
				</div>
				<ReactModal isOpen={state.isOpen}>
					<p>I'm the modal</p>
					<button onClick={closeModal}>close modal</button>
				</ReactModal>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { loadUser })(MyPosts)
