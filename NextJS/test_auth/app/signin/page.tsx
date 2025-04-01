"use client"

import axios from "axios"
import { useState } from "react"

export default function signin(){

    const [response, setResponse] = useState("");

    return <div>

        <h1>Sign In Page</h1>
        <br />
        <input type="text" placeholder="Enter your Username"/>
        <input type="Password" placeholder="Enter your Password"/>
        <button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/signin", {
                username:"test2",
                password:"test2@123"
            });

            localStorage.setItem("token", response.data.token);
            setResponse(JSON.stringify(response.data));
        }}>Sign In</button>

        <div>
            response: {response}
        </div>
    </div>
}