//dependencies
import React from "react"
import { connect } from "react-redux"
import { BsXSquare } from "react-icons/bs"
import { IconContext } from "react-icons"
import { CgSmileSad } from "react-icons/cg"
import { Link } from "react-router-dom"

//imports
import "./AuthError.css"

const AuthError = (props) => {
	return (
		<div className="autherror-container">
			<p className="autherror-message">
				Server Error. Please{" "}
				<span>
					<Link to="/login">Login</Link>
				</span>{" "}
				Again
			</p>
		</div>
	)
}

export default AuthError
