//dependencies
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator")

//middleware
const auth = require("../middleware/auth")

// imports
const User = require("../model/userModel")

//route - GET /users/getall
//desc  - show all users
router.get("/getall", async (req, res) => {
	const allUsers = await User.find()
	res.json({ users: allUsers })
})

//route - POST users/signup
//desc  - add new user
router.post(
	"/signup",
	[
		check("username", "Please add a username").not().isEmpty(),
		check("email", "Please enter a valid email").isEmail(),
		check("password", "Password must have 6 characters or more").isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.errors })
		}
		const { username, email, password } = req.body
		const secret = config.get("jwtSecret")
		const existingUser = await User.findOne({ email: email })
		if (existingUser) {
			res
				.status(400)
				.json({ error: [{ msg: "Email already registered. Sign in instead" }] })
			return
		}

		const hashedPassword = await bcrypt.hash(password, 10)
		const newUser = new User({ username, email, password: hashedPassword })
		await newUser.save()

		const payload = {
			user: {
				id: newUser.id,
			},
		}

		jwt.sign(payload, secret, (err, token) => {
			if (err) return console.log(err)
			res.json({ token: token })
		})
	}
)

//route - POST /users/login
//desc	- login users
router.post(
	"/login",
	[
		check("email", "Invalid Credentials").isEmail(),
		check("password", "Invalid Credentials").isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.errors })
		}
		const secret = config.get("jwtSecret")
		const { email, password } = req.body
		try {
			const existingUser = await User.findOne({ email: email })
			if (!existingUser) {
				res.status(404).json({ error: [{ msg: "No user found" }] })
				return
			}
			const isMatch = await bcrypt.compare(password, existingUser.password)

			// console.log("Match Value - " + isMatch)
			if (isMatch) {
				const payload = {
					user: {
						id: existingUser.id,
					},
				}
				const jwtToken = jwt.sign(payload, secret, (err, token) => {
					if (err) return res.status(400).send("Token Error")

					res.json({
						token: token,
					})
				})
			} else {
				res.status(400).json({ error: [{ msg: "Invalid Credentials" }] })
			}
		} catch (err) {
			console.log(err)
			res.json({ error: err })
		}
	}
)

////route - GET /users/auth
//desc	- get logged in user
router.get("/auth", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password")
		res.json({ user })
	} catch (error) {
		res.status(500).json({ error: [{ msg: "Server Error" }] })
	}
})

// -------------------------------VIEWS-------------------------------//

//route - GET /users/loginform
//desc	- from login users
router.get("/loginform", (req, res) => {
	res.render("loginform")
})

//route - GET /users/register
//desc  - form to add new user
router.get("/register", (req, res) => {
	res.render("adduser")
})

//exports
module.exports = router
