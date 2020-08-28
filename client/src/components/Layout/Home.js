//dependencies
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//imports
import Navbar from "./Navbar"

const Home = () => {
	return (
		<div>
			<Navbar />
			<h1>Home Page. Welcome to the blog</h1>
		</div>
	)
}

export default Home
