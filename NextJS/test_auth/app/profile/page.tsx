import axios from "axios"
import { useEffect, useState } from "react"

export default async function profile(){
    

    
        const response = await axios.get("http://localhost:3000/api/profile")
    
        const data = JSON.stringify(response.data);

    return <div>
        Profile
        <br />
        Data from backend: {data}
    </div>
}