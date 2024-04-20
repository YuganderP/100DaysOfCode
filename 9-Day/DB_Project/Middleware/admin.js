const { admin } = require("../DB/index.js");
const AdminCredentialsCheck = require("../Middleware/AdminCredentials")

function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    
    admin.find({ username, password }).then((value) => {
        if (value.length > 0) {
            next(); // User found, proceed to the next middleware
        } else {
            res.status(404).send("User not found"); // User not found, send appropriate response
        }
    }).catch((error) => {
        res.status(500).send("Error finding user"); // Handle any errors that occur during the database operation
    });
}

module.exports = adminMiddleware;