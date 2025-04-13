"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/signup", (req, res) => {
    res.send("Hello World");
});
app.get("/signin", (req, res) => {
    res.send("Hello World");
});
app.get("/chat", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log("Server Running at port 3000");
});
