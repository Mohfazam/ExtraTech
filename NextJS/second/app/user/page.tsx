import axios from "axios";
import {useState, useEffect} from "react";

export default async function user(){


    const response = await axios.get(" https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    await new Promise(r => setTimeout(r, 5000));

    const data = response.data;

    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Yo its an page route!!!!!!!!!!
        <br /><br />
        {data.name}
        <br /><br />
        {data.email}
    </div>
}