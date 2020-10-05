//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { v4 as uuid } from "uuid"

//imports
import Navbar from "../Layout/Navbar"
import {
	onInput,
	clearInput,
	login,
	clearErrors,
	loadUser,
} from "../../actions/userActions"
import ErrorMessage from "../Error/ErrorMessage"
import Footer from "../Layout/Footer"
import "./Login.css"

const Login = (props) => {
	const onSubmitHandler = (e) => {
		e.preventDefault()
		const userDetails = {
			email: props.user.email,
			password: props.user.password,
		}
		props.login(userDetails)
		props.clearInput()
	}

	const onChangeHandler = (e) => {
		const details = {
			target: e.target.name,
			value: e.target.value,
		}

		props.onInput(details)
	}

	useEffect(() => {
		if (props.auth.isAuthenticated && props.auth.user) {
			props.history.push(`/profile/${props.auth.user._id}`)
		} else if (localStorage.getItem("token")) {
			props.loadUser()
		}
		//eslint-disable-next-line
	}, [props.auth.isAuthenticated, props.auth.user, props.history])

	const errors = props.auth.error
		? props.auth.error.map((error) => (
				<ErrorMessage
					key={uuid()}
					errorMsg={error.msg}
					classname={"error"}
					iconSize={0.8}
				/>
		  ))
		: null

	return (
		<div>
			<Navbar />
			<div className="login-container">
				<div className="login-card">
					<h1 className="login-title">Login User</h1>
					<form className="login-form" onSubmit={onSubmitHandler}>
						<div className="login-field">
							<input
								type="email"
								name="email"
								value={props.user.email}
								placeholder="Email"
								className="login-input"
								onChange={onChangeHandler}
							/>
						</div>
						<div className="login-field">
							<input
								type="password"
								name="password"
								value={props.user.password}
								placeholder="Password"
								className="login-input"
								onChange={onChangeHandler}
							/>
						</div>
						<div className="login-submit">
							<input type="submit" value="Login" className="btn-submit" />
						</div>
					</form>
				</div>
				{errors}
			</div>
			<Footer />
		</div>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
	auth: state.auth,
})

export default connect(mapStateToProps, {
	onInput,
	clearInput,
	login,
	clearErrors,
	loadUser,
})(Login)
