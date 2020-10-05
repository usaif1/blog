//dependencies
import React from "react"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { RiDeleteBin6Line } from "react-icons/ri"

//imports
import "./PostCard.css"

const PostCard = (props) => {
	return (
		<div className="postcard-container">
			<h2 className="postcard-heading">
				{props.noRedirect ? (
					props.name
				) : (
					<Link className="postcard-link" to={`/profile/${props.id}`}>
						{props.name}
					</Link>
				)}
			</h2>
			<p className="postcard-datetime">{props.date}</p>
			<div className="postcard-post-container">
				<p className="postcard-text">{props.post}</p>
			</div>
			{props.canDelete ? (
				<div className="postcard-deleteicon-container">
					<IconContext.Provider
						value={{ color: "red", className: "postcard-deleteicon" }}
					>
						<RiDeleteBin6Line
							onClick={(e) => {
								// console.log(props.id)
								props.deletePost(e, props.id)
							}}
						/>
					</IconContext.Provider>
				</div>
			) : null}
		</div>
	)
}

export default PostCard
