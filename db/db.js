const mongoose = require("mongoose")

const connectDB = async () => {
	const uri =
		"mongodb+srv://usaif1311:saif@1311@cluster0.qzw10.mongodb.net/posts?retryWrites=true&w=majority"

	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		console.log("Connected to DB")
	} catch (err) {
		return console.log(err)
	}
}

module.exports = connectDB
