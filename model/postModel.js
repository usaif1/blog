//dependencies
const mongoose = require("mongoose")
const moment = require("moment")

let date = moment().format("LL, h:mm:ss a").toString()

const postSchema = new mongoose.Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	username: {
		type: String,
	},
	post: {
		type: String,
	},
	date: {
		type: String,
	},
})

const Post = mongoose.model("posts", postSchema)

module.exports = Post
