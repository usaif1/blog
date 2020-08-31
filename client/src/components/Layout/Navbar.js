//dependencies
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

//imports
import "./Navbar.css"
import { clearErrors } from "../../actions/userActions"

const Navbar = (props) => {
	const clearErrorsHandler = (e) => {
		props.clearErrors()
	}

	return (
		<div className="navbar-container">
			<ul className="ul">
				<div>
					<li className="navbar-li">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
				</div>
				<div className="empty-div"></div>
				<div className="li-container">
					<li className="navbar-li">
						<Link
							to="/register"
							className="nav-link"
							onClick={clearErrorsHandler}
						>
							Register
						</Link>
					</li>
					<li className="navbar-li">
						<Link to="/login" className="nav-link" onClick={clearErrorsHandler}>
							Login
						</Link>
					</li>
				</div>
			</ul>
		</div>
	)
}

export default connect(null, { clearErrors })(Navbar)
