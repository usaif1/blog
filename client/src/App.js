//dependencies
import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//imports
import Register from "./components/Forms/Register"
import Login from "./components/Forms/Login"
import Profile from "./components/Pages/Profile"
import Home from "./components/Layout/Home"
import setAuthToken from "./utils/setAuthToken"

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
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
