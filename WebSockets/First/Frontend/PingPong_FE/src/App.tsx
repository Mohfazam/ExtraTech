import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [Ws, setWs] = useState(); 

  function sendMessage(){
    Ws.send("ping");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    
    setWs(ws);
    ws.onmessage = (e) => { 
      console.log(e.data);
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App