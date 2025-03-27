import axios from "axios"

async function Blogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return response.data;
}

export default async function blogs(){

    const blogs = await Blogs();

    return(
        <div>
            This is an test Blog page
        <br /><br /><br />
            {JSON.stringify(blogs)}
        </div>
    )
}