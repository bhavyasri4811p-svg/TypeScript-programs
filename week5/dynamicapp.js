const express = require("express");
const app = express();
const PORT = 3003;
app.get("/user/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h2>User Details</h2>
              <p>Name: ${name}</p>`);
});
app.get("/book/:title/:author", (req, res) => {
    const { title, author } = req.params;
    res.send(`<h2>Book Details</h2>
              <p>Title: ${title}</p>
              <p>Author: ${author}</p>`);
});
app.get("/hello", (req, res) => {
    const name = req.query.name;
    res.send(`<h2>Hello</h2>
              <p>Hello ${name || "Guest"}!</p>`);
});
app.get("/movie", (req, res) => {
    const { name, year } = req.query;
    res.send(`<h2>Movie Details</h2>
              <p>Movie: ${name || "Not provided"}</p>
              <p>Year: ${year || "Not provided"}</p>`);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
