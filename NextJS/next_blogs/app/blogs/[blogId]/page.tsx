import axios from 'axios'

export default async function BlogPage({params}:any){

    const postId = params.blogId;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data;
    return <div>
        userId: {data.userId}
        <br />
        id: {data.id}
        <br />
        Title: {data.title}
        <br />
        body: {data.body}
    </div>
}