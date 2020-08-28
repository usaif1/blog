//dependencies
import React from "react"

//imports
import Navbar from "../Layout/Navbar"
import "./Login.css"

const Login = () => {
	return (
		<div>
			<Navbar />
			<div className="login-container">
				<div className="login-card">
					<h1 className="login-title">Login User</h1>
					<form className="login-form">
						<div className="login-field">
							<input type="email" placeholder="Email" className="login-input" />
						</div>
						<div className="login-field">
							<input
								type="password"
								placeholder="Password"
								className="login-input"
							/>
						</div>
						<div className="login-submit">
							<input type="submit" value="Login" className="btn-submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
