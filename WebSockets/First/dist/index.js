"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
console.log("Server Started");
//event handler
wss.on("connection", function (socket) {
    console.log("User Connected");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
