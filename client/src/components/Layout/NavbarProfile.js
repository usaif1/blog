//dependencies
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

//imports
import { logout } from "../../actions/userActions"
import "./NavbarProfile.css"

const NavbarProfile = (props) => {
	const onLogoutHandler = (e) => {
		props.logout()
	}

	return (
		<div className="pbar-container">
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div className="pbar-list-container">
					<ul className="pbar-ul">
						<li className="pbar-li">
							<Link to="" className="pbar-link">
								Profile
							</Link>
						</li>
						<li className="pbar-li">
							<Link to="" className="pbar-link">
								My Posts
							</Link>
						</li>
						<li className="pbar-li">
							<Link to="" className="pbar-link">
								Explore
							</Link>
						</li>
					</ul>
				</div>
				<div className="pbar-list-container">
					<ul className="pbar-ul">
						<li className="pbar-li">
							<Link to="" className="pbar-link" onClick={onLogoutHandler}>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default connect(null, { logout })(NavbarProfile)
