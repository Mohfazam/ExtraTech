import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 });

//event handler
wss.on("connection", function(socket){
    console.log("User Connected");
    setInterval(() => {
        socket.send("HEllo " + Math.round(100 * (Math.random())))
    }, 2000);

    socket.on("message", function(e){
        console.log(e);
        socket.send(e.toString() + " " + Math.round(100 * (Math.random())));
    });
});