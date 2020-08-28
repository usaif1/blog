//dependencies
import React from "react"
import { Link } from "react-router-dom"

//imports
import "./Navbar.css"

const Navbar = () => {
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
						<Link to="/register" className="nav-link">
							Register
						</Link>
					</li>
					<li className="navbar-li">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
				</div>
			</ul>
		</div>
	)
}

export default Navbar
