"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    function sendMessage() {
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    }, []);
    return (<div>
      <input type="text" placeholder='Message...'/>
      <button onClick={sendMessage}>Send</button>
    </div>);
}
exports.default = App;
