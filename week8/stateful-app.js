const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
function checkLogin(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/login");
    }
}
app.get("/login", (req, res) => {
    res.render("login", {
        error: null
    });
});
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "admin" && password === "123") {
        req.session.loggedIn = true;
        req.session.username = username;
        res.cookie("lastVisit", new Date().toLocaleString());
        res.redirect("/dashboard");
    } else {
        res.render("login", {
            error: "Invalid username or password"
        });
    }
});
app.get("/dashboard", checkLogin, (req, res) => {
    res.render("dashboard", {
        username: req.session.username,
        lastVisit: req.cookies.lastVisit
    });
});
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("lastVisit");
        res.redirect("/login");
    });
});
app.listen(PORT, () => {
    console.log(`Login server started at http://localhost:${PORT}`);
});
