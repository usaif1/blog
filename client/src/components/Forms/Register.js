//dependencies
import React from "react"

//imports
import Navbar from "../Layout/Navbar"
import "./Register.css"

const Register = () => {
	return (
		<div>
			<Navbar />
			<div className="register-container">
				<div className="register-card">
					<h1 className="register-title">Register New User</h1>
					<form className="register-form">
						<div className="register-field">
							<input
								type="text"
								placeholder="Username"
								className="register-input"
							/>
						</div>
						<div className="register-field">
							<input
								type="email"
								placeholder="Email"
								className="register-input"
							/>
						</div>
						<div className="register-field">
							<input
								type="password"
								placeholder="Password"
								className="register-input"
							/>
						</div>
						<div className="register-field">
							<input
								type="password"
								placeholder="Password"
								className="register-input"
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

export default Register
