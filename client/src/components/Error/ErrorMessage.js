//dependencies
import React from "react"
import { connect } from "react-redux"
import { BsXSquare } from "react-icons/bs"
import { IconContext } from "react-icons"
import { CgSmileSad } from "react-icons/cg"

//imports
import "./Error.css"

const ErrorMessage = (props) => {
	const iconSize = `${props.iconSize}rem`
	return (
		<div className={`${props.classname}-container`}>
			<div className={`${props.classname}-details`}>
				<IconContext.Provider
					value={{ size: iconSize, className: "error-icon", color: "#646463" }}
				>
					{props.classname === "nopost" ? <CgSmileSad /> : <BsXSquare />}
				</IconContext.Provider>
				<p className={`${props.classname}-message`}> {props.errorMsg}</p>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps)(ErrorMessage)
