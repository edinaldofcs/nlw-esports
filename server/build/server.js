import express from "express";
const app = express();
app.get('/ads', (req, res) => {
    return res.json({ message: "teste" });
});
app.listen(5000, () => {
    console.log("teste4");
});
