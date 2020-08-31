//dependencies
import React from "react"
import { connect } from "react-redux"
import { BsXSquare } from "react-icons/bs"
import { IconContext } from "react-icons"

//imports
import "./Error.css"

const ErrorMessage = (props) => {
	return (
		<div className="error-container">
			<div className="error-details">
				<IconContext.Provider
					value={{ size: "0.8rem", className: "error-icon" }}
				>
					<BsXSquare />
				</IconContext.Provider>
				<p className="error-message"> {props.errorMsg}</p>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps)(ErrorMessage)
