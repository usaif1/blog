//dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { v4 as uuid } from "uuid"

//imports
import Navbar from "../Layout/Navbar"
import ErrorMessage from "../Error/ErrorMessage"
import Footer from "../Layout/Footer"
import "./Register.css"

//importing actions
import {
	registerUser,
	onInput,
	clearInput,
	loadUser,
	clearErrors,
} from "../../actions/userActions"

const Register = (props) => {
	const onchangeHandler = (e) => {
		const details = {
			target: e.target.name,
			value: e.target.value,
		}
		props.onInput(details)
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		const userdetails = {
			username: props.user.username,
			email: props.user.email,
			password: props.user.password,
		}
		await props.registerUser(userdetails)
		props.clearInput()
	}

	useEffect(() => {
		if (props.auth.isAuthenticated && props.auth.user) {
			props.history.push(`/profile/${props.auth.user._id}`)
		} else if (localStorage.getItem("token")) {
			props.loadUser()
		}

		//eslint-disable-next-line
	}, [props.auth.isAuthenticated, props.history, props.auth.user])

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
	// const errors = <ErrorMessage />
	return (
		<div>
			<Navbar />
			<div className="register-container">
				<div className="register-card">
					<h1 className="register-title">Register New User</h1>
					<form className="register-form" onSubmit={onSubmitHandler}>
						<div className="register-field">
							<input
								type="text"
								placeholder="Username"
								className="register-input"
								name="username"
								value={props.user.username}
								onChange={onchangeHandler}
								required
							/>
						</div>
						<div className="register-field">
							<input
								type="email"
								placeholder="Email"
								className="register-input"
								name="email"
								value={props.user.email}
								onChange={onchangeHandler}
								required
							/>
						</div>
						<div className="register-field">
							<input
								type="password"
								placeholder="Password"
								className="register-input"
								name="password"
								value={props.user.password}
								onChange={onchangeHandler}
								required
							/>
						</div>
						<div className="register-submit">
							<input type="submit" value="Register" className="btn-submit" />
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
	registerUser,
	onInput,
	clearInput,
	loadUser,
	clearErrors,
})(Register)
