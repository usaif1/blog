const jwt = require("jsonwebtoken")
const config = require("config")

const authenticate = (req, res, next) => {
	//get token from header
	const token = req.header("x-auth-token")

	//check token
	if (!token) {
		return res.status(401).json({ Error: "No token. Authorization Denied!" })
	}

	//verify token

	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"))
		req.user = decoded.user
		next()
	} catch (err) {
		res.status(500).json({ Error: "Invalid Token" })
	}
}

module.exports = authenticate
