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
		const posts = await Post.find()
		if (posts.length === 0) {
			return res.json({ Err: "No Post Found" })
		}
		res.json(posts)
	} catch (err) {
		res.send([err])
	}
})

//route - GET /post/myposts
//desc  - show user's posts
//access - PRIVATE
router.get("/myposts", auth, async (req, res) => {
	try {
		const response = await Post.find({ owner: req.user.id })
		res.json({ posts: response })
	} catch (err) {
		res.status(500).json({ error: err })
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
			check("post", "The post must have more than 10 words").isLength({
				min: 10,
			}),
		],
	],
	async (req, res) => {
		const errors = validationResult(req.body)
		if (!errors.isEmpty()) {
			console.log(errors)
			return res.status(400).json({ error: errors.errors })
		}
		const user = await User.findById(req.user.id)
		const username = user.username
		const { post } = req.body
		try {
			const newPost = new Post({
				owner: req.user.id,
				username: username,
				post,
				date: moment().format("LL h:mm:ss a").toString(),
			})
			await newPost.save()
			res.json({ posts: newPost })
		} catch (err) {
			console.log(err)
			res.status(500).json({ error: err })
		}
	}
)

//route - PUT /post/update
//desc  - update an existing post
//access - PRIVATE

//route - DELETE /post/delete
//desc  - delete an existing post
//access - PRIVATE

//exports
module.exports = router
