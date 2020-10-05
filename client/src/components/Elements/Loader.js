//dependencies
import React from "react"
import Loader from "react-loader-spinner"

//imports
import "./Loader.css"

const PageLoader = () => {
	return (
		<div className="loader-container">
			<Loader type="BallTriangle" color="#535353" height={60} width={65} />
		</div>
	)
}

export default PageLoader
