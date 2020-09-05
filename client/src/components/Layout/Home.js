//dependencies
import React from "react"
import { connect } from "react-redux"

//imports
import Navbar from "./Navbar"
import Footer from "./Footer"
import ErrorMessage from "../Error/ErrorMessage"
import "./Home.css"

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="home-container">
				<h1 className="home-heading">
					Welcome <span style={{ color: "#FF6100  " }}>Wanderers!</span>
				</h1>
				<p className="home-content">
					The Wall is a place for you to share your thoughts with the world!
				</p>
				<p className="home-content">
					So share your minds and see what's going on with others!
				</p>
				{/* <ErrorMessage errorMsg="No user found" /> */}
				<Footer />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps)(Home)
