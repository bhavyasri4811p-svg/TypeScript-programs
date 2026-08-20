const express = require("express");
const app = express();
const PORT = 3004;
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
let students = [
    { id: 1, name: "Bhavya" },
    { id: 2, name: "Anu" }
];
app.get("/students", (req, res) => {
    res.json(students);
});
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name
    };
    students.push(student);
    res.status(201).json(student);
});
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        student.name = req.body.name;
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.json({ message: "Student deleted" });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
