//dependencies
import React from "react"

//imports
import "./PostCard.css"

const PostCard = (props) => {
	return (
		<div className="postcard-container">
			<h2 className="postcard-heading">Saif</h2>
			<p className="postcard-datetime">March 9, 2020 10:45 P.M.</p>
			<div className="postcard-post-container">
				<p className="postcard-text">Some Custom Message</p>
			</div>
		</div>
	)
}

export default PostCard
