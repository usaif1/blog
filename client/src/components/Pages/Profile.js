//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"

//imports
import { loadUser, logout } from "../../actions/userActions"
import NavbarUser from "../Layout/NavbarUser"

const Profile = (props) => {
	useEffect(() => {
		if (localStorage.getItem("token")) {
			props.loadUser()
		}
		console.log(props.match.params.id)

		// eslint-disable-next-line
	}, [props.auth.isAuthenticated])

	const message = props.auth.user
		? `Welcome ${props.auth.user.username}`
		: "Loading..."

	return (
		<div>
			{props.auth.user ? <NavbarUser user={props.auth.user} /> : "Loading.."}
			<h1>{message}</h1>
		</div>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { loadUser, logout })(Profile)
