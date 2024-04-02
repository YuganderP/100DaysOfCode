const express = require("express");
const app = express();
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get("/hello",(req,res)=>{
    res.send("hello world")
})
// Define route for handling requests
app.get("/", (req, res) => {
    // Extract username, password, and secret from request headers
    const userName = req.headers.username;
    const password = req.headers.password;
    const secret = req.headers.secret;
    // Check if username or password is incorrect
    if (userName !== "sam" || password !== "123") {
        // Send 401 Unauthorized status and error message
        res.status(401).json({
            message: "Invalid username / password" // Corrected spelling
        });
        return;
    }

    
    if (secret !== "3") {
        // Send 401 Unauthorized status and error message
        res.status(401).json({
            message: "Invalid SecretId" // Corrected spelling
        });
        return;
    }

    // If all checks pass, send success message
    res.send("The appointment has been confirmed");
});
