//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"

//imports
import Navbar from "./Navbar"

const Home = (props) => {
	useEffect(() => {
		console.log(localStorage.getItem("token"))

		//eslint-disable-next-line
	}, [props.auth.token, props.auth.isAuthenticated])

	return (
		<div>
			<Navbar />
			<h1>Home Page. Welcome to the blog</h1>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps)(Home)
