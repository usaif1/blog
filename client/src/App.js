//dependencies
import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//imports
import Register from "./components/Forms/Register"
import Login from "./components/Forms/Login"
import Profile from "./components/Pages/Profile"
import Home from "./components/Layout/Home"
import setAuthToken from "./utils/setAuthToken"
import MyPosts from "./components/Pages/MyPosts"
import Explore from "./components/Pages/Explore"

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route exact path="/profile/:id" component={Profile} />
						<Route
							exact
							path="/profile"
							render={() => {
								return (
									<div>
										<h2>Unauthorized</h2>
										<p>
											Go to the{" "}
											<Link to="/login" style={{ textDecoration: "none" }}>
												Login
											</Link>{" "}
											page instead.
										</p>
										<p>
											Or you can{" "}
											<Link to="/register" style={{ textDecoration: "none" }}>
												Register
											</Link>{" "}
											here
										</p>
									</div>
								)
							}}
						/>
						<Route exact path="/posts/:id" component={MyPosts} />
						<Route exact path="/explore" component={Explore} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
