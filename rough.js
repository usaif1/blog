// const moment = require("moment")
// moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

// const date = Date.now().toLocaleString() //moment().format("LL, h:mm:ss a").toString()
// console.log(date)

// // const year = date.getFullYear().toString()
// // console.log(year)

// // const month = date.getMonth().toString()
// // console.log(month)

// // const day = date.getUTCDate().toString()
// // console.log(day)

// // const hour = date.getHours().toString()
// // console.log(hour)

// // const min = date.getMinutes().toString()
// // console.log(min)

// // const sec = date.getSeconds().toString()
// // console.log(sec)

// // const fullDate
// Promise.resolve(1)
// 	.then((x) => x + 1)
// 	.then((x) => {
// 		throw new Error("my err")
// 	})
// 	.catch(() => 1)
// 	.then((x) => x + 1)
// 	.then((x) => console.log(x))
// 	.catch(console.error)

var express = require("express")
const app = express()
const server = require("http").createServer("app")

server.listen(80, "domain")

app.get("/:id(\\d+", (req, res) => {
	var id = req.params.id
	res.end("receivbed" + id)
	console.log("id=" + id)
})
