//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"

//imports
import { loadUser, logout } from "../../actions/userActions"
import NavbarProfile from "../Layout/NavbarProfile"

const Profile = (props) => {
	useEffect(() => {
		// console.log("Printing auth state", props.auth)
		if (props.auth.isAuthenticated) {
			props.loadUser()
			// console.log(props.auth)
		} else if (!localStorage.getItem("token")) {
			props.history.push("/")
		}
		// eslint-disable-next-line
	}, [props.auth.isAuthenticated])

	const onLogoutHandler = (e) => {
		props.logout()
	}

	const name = "Some User"

	return (
		<div>
			<NavbarProfile />
			<h1>Profile</h1>
			<p>Welcome {props.auth.user ? props.auth.user.username : name}</p>
			<button onClick={onLogoutHandler}>Logout</button>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { loadUser, logout })(Profile)
