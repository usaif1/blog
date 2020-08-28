//dependencies
const express = require("express")
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
app.get("/", (req, res) => {
	res.render("addnew")
})
app.use("/post", postRoutes)
app.use("/users", userRoutes)

//defining port
const port = process.env.PORT || 5000

//starting the server
app.listen(port, () => {
	console.log("Server up on port " + port)
})
