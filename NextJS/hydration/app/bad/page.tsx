"use client"

import { useState } from "react"

export default function bad(){

    const [count, setCount] = useState(0);

    return <div>
        Bad Page
        <br />
        Count : {count}
        <br />
        
        <button onClick={() => {
            setCount(c => c + 1);
        }}>Click here</button>
    </div>
}