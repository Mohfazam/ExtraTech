import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  function sendMessage(){
    
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App