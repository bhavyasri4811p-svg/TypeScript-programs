const express = require("express");
const app = express();
const PORT = 3002;
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Bhavya's Express App</h1><p>Home Page</p>");
});
app.get("/services", (req, res) => {
    res.send("<h2>Our Services</h2><p>We provide simple web services using Express.js.</p>");
});
app.get("/profile", (req, res) => {
    res.send("<h2>Profile</h2><p>This is my Express application profile page.</p>");
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "success",
        application: "My Express App",
        message: "Express server is running properly"
    });
});
app.listen(PORT, () => {
    console.log(`Express server started at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});
