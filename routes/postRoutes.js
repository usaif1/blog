//dependencies
const express = require("express")
const router = express.Router()
const moment = require("moment")
const { check, validationResult } = require("express-validator")
const auth = require("../middleware/auth")

//imports
const Post = require("../model/postModel")
const User = require("../model/userModel")

//route	 - GET /post/showall
//desc	 - show all quotes
//access - PUBLIC
router.get("/showall", async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 })
		if (posts.length === 0) {
			return res.json({ Err: "No Post Found" })
		}
		res.json(posts)
	} catch (err) {
		res.status(500).json({ error: err })
	}
})

//route - GET /post/myposts
//desc  - show user's posts
//access - PRIVATE
router.get("/myposts", auth, async (req, res) => {
	try {
		const response = await Post.find({ owner: req.user.id }).sort({ date: -1 })
		if (response.length === 0) {
			return res.status(404).json({ error: "No Post Found!" })
		}
		res.json({ posts: response })
	} catch (err) {
		res.status(500).json({ error: "Server Error" })
	}
})

//route - POST /post/addnew
//desc  - add new post
//access - PRIVATE
router.post(
	"/addnew",
	[
		auth,
		[
			check("post", "Post should have at least 10 characters").isLength({
				min: 10,
			}),
		],
	],
	async (req, res) => {
		const errors = validationResult(req)
		console.log(req.body.post)
		if (!errors.isEmpty()) {
			console.log(errors)
			return res.status(400).json({ error: errors.errors })
		}
		const user = await User.findById(req.user.id)
		const username = user.username
		const { post, date } = req.body
		try {
			const newPost = new Post({
				owner: req.user.id,
				username: username,
				post,
				date: date,
			})
			await newPost.save()
			res.json({ posts: newPost })
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: err })
		}
	}
)

//route - DELETE /post/delete
//desc  - delete an existing post
//access - PRIVATE
router.delete("/delete", async (req, res) => {
	try {
		const post = await Post.findByIdAndDelete(req.body.id)
		res
			.status(200)
			.json({ msg: `Document ${req.body.id} successfully removed!`, post })
	} catch (err) {
		res.status(400).json({ error: err })
	}
})

//exports
module.exports = router
