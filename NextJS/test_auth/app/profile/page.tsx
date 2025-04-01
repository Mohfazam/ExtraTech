"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function profile(){
    const [res, setRes] = useState("");

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3000/api/profile")
        setRes(JSON.stringify(response.data));
        }
        fetchData();
    }, [])

    return <div>
        Profile
        <br />
        Data from backend: {res}
    </div>
}