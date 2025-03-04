
import { useEffect } from 'react'
import './App.css'

function App() {

  function sendMessage(){
    
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);

  return (
    <div>
      <input type="text" placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
