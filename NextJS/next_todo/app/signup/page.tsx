"use client"

import axios from "axios"

export default function signup(){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" /> 
            <input type="password" placeholder="password" />
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup")
            }}>Sign Up</button>
        </div>
    </div>
}