//dependencies
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

//imports
import "./PostCard.css"

const PostCard = (props) => {
	return (
		<div className="postcard-container">
			<h2 className="postcard-heading">
				<Link className="postcard-link" to={`/profile/${props.id}`}>
					{props.name}
				</Link>
			</h2>
			<p className="postcard-datetime">{props.date}</p>
			<div className="postcard-post-container">
				<p className="postcard-text">{props.post}</p>
			</div>
		</div>
	)
}

export default PostCard
