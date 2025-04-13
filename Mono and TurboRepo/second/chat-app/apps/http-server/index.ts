import express from "express"
const app = express();
app.use(express.json());


app.get("/signup", (req, res) => {
    res.send("Hello World");
})

app.get("/signin", (req, res) => {
    res.send("Hello World");
})

app.get("/chat", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Server Running at port 3000");
})