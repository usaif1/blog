//dependencies
const express = require("express")
const path = require("path")
//const ejs = require("ejs")

//imports
const connectDB = require("./db/db")
const postRoutes = require("./routes/postRoutes")
const userRoutes = require("./routes/userRoutes")

//initialize express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//connect to db
connectDB()

//setting up view engine
app.set("view engine", "ejs")

//setting up routes
app.use("/post", postRoutes)
app.use("/users", userRoutes)

// server static assets in production
if (process.env.NODE_ENV === "production") {
	//set up static folder
	app.use(express.static("client/build"))
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	})
}

//defining port
const port = process.env.PORT || 5000

//starting the server
app.listen(port, () => {
	console.log("Server up on port " + port)
})
