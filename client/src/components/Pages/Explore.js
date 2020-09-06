//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"

//imports
import NavbarUser from "../Layout/NavbarUser"
import { loadUser } from "../../actions/userActions"
import { getAllPosts } from "../../actions/postActions"
import PostCard from "../Elements/PostCard"
import Loader from "../Elements/Loader"

import "./Explore.css"

const Explore = (props) => {
	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.loadUser()
		}
		props.getAllPosts()
		// eslint-disable-next-line
	}, [])

	return (
		<div>
			{props.auth.user ? (
				<div>
					<NavbarUser user={props.auth.user} />
					<div className="explore-container">
						<h1 className="explore-heading">Explore</h1>
						<div className="explore-cardlist">
							{props.post.allposts.length > 0 ? (
								props.post.allposts.map((post) => {
									return (
										<PostCard
											key={post._id}
											id={post._id}
											name={post.username}
											post={post.post}
											date={post.date}
											canDelete={false}
										/>
									)
								})
							) : (
								//add loader here
								<Loader />
							)}
						</div>
					</div>
				</div>
			) : (
				"Loading"
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	post: state.post,
})

export default connect(mapStateToProps, { loadUser, getAllPosts })(Explore)
