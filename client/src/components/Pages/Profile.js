//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"

//imports
import { loadUser, logout, getProfile } from "../../actions/userActions"
import Loader from "../Elements/Loader"
import NavbarUser from "../Layout/NavbarUser"
import ErrorMessage from "../Error/ErrorMessage"
import PostCard from "../Elements/PostCard"
import AuthError from "../Error/AuthError"
import "./Profile.css"

const Profile = (props) => {
	const { loadUser, post, getProfile } = props

	useEffect(() => {
		if (localStorage.getItem("token")) {
			loadUser()
		}
		getProfile(props.match.params.id)
		// eslint-disable-next-line
	}, [
		props.auth.isAuthenticated,
		props.post.profileUser,
		props.match.params.id,
	])

	const postList =
		post.profilePosts.length > 0 ? (
			post.profilePosts.map((post) => {
				return (
					<PostCard
						key={post._id}
						id={post._id}
						name={post.username}
						post={post.post}
						date={post.date}
						canDelete={false}
						noRedirect={true}
					/>
				)
			})
		) : (
			<ErrorMessage
				errorMsg={"No Post Found"}
				classname={"nopost"}
				iconSize={1.5}
				nopost={true}
			/>
		)

	const page = props.post.profileUser ? (
		<div>
			{props.auth.user ? (
				<div>
					<NavbarUser user={props.auth.user} />
					<div className="profile-container">
						<h1 className="profile-username">{props.post.profileUser}</h1>
						<h1 className="profile-heading">Posts - </h1>
						<div className="profile-cardlist">{postList}</div>
					</div>
				</div>
			) : (
				<AuthError />
			)}
		</div>
	) : (
		<Loader />
	)

	return <div>{page}</div>
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	post: state.post,
})

export default connect(mapStateToProps, { loadUser, logout, getProfile })(
	Profile
)
