const express = require("express");
const app = express();
const PORT = 3005;
app.use(express.json());
let books = [
    { id: 1, name: "Java" },
    { id: 2, name: "Python" }
];
app.get("/books", (req, res) => {
    res.json(books);
});
app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.status(201).json(book);
});
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        book.name = req.body.name;
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(b => b.id !== id);
    res.json({ message: "Book deleted successfully" });
});
app.listen(PORT, () => {
    console.log(`REST API running at http://localhost:${PORT}`);
});
