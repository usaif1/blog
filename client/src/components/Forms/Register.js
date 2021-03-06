//dependencies
import React from "react"
import { connect } from "react-redux"

//imports
import Navbar from "../Layout/Navbar"
import "./Register.css"

//importing actions
import { registerUser, onInput, clearInput } from "../../actions/userActions"

const Register = (props) => {
	const onchangeHandler = (e) => {
		const details = {
			target: e.target.name,
			value: e.target.value,
		}
		props.onInput(details)
	}

	const onSubmitHandler = (e) => {
		e.preventDefault()
		const userdetails = {
			username: props.user.username,
			email: props.user.email,
			password: props.user.password,
		}
		console.log(userdetails)
		props.registerUser(userdetails)
		props.clearInput()
	}

	return (
		<div>
			<Navbar />
			<div className="register-container">
				<div className="register-card">
					<h1 className="register-title">Register New User</h1>
					<form className="register-form" onSubmit={(e) => onSubmitHandler(e)}>
						<div className="register-field">
							<input
								type="text"
								placeholder="Username"
								className="register-input"
								name="username"
								onChange={onchangeHandler}
							/>
						</div>
						<div className="register-field">
							<input
								type="email"
								placeholder="Email"
								className="register-input"
								name="email"
								onChange={onchangeHandler}
							/>
						</div>
						<div className="register-field">
							<input
								type="password"
								placeholder="Password"
								className="register-input"
								name="password"
								onChange={onchangeHandler}
							/>
						</div>
						<div className="register-submit">
							<input type="submit" value="Register" className="btn-submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
})

export default connect(mapStateToProps, { registerUser, onInput, clearInput })(
	Register
)
