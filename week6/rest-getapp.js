const express = require("express");
const app = express();
const PORT = 3006;
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to My API",
        status: "Running"
    });
});
app.get("/movies", (req, res) => {
    const movies = [
        { id: 1, name: "Avatar", year: 2009 },
        { id: 2, name: "Titanic", year: 1997 },
        { id: 3, name: "Inception", year: 2010 }
    ];
    res.json(movies);
});
app.get("/movie/:id", (req, res) => {
    const movieId = req.params.id;
    res.json({
        id: movieId,
        name: "Inception",
        genre: "Science Fiction",
        available: true
    });
});
app.listen(PORT, () => {
    console.log(`JSON server running at http://localhost:${PORT}`);
});
