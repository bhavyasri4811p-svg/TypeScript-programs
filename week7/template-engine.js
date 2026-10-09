const express = require("express");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});
app.post("/register", (req, res) => {
    const username = req.body.username;
    const age = Number(req.body.age);

    if (username.length < 3) {
        res.render("index", {
            title: "Registration Failed",
            error: "Username must have at least 3 characters",
            user: null
        });
    } else if (age < 18) {
        res.render("index", {
            title: "Registration Failed",
            error: "Age must be at least 18 years",
            user: null
        });
    } else {
        res.render("index", {
            title: "Registration Successful",
            error: null,
            user: username
        });
    }
});
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
