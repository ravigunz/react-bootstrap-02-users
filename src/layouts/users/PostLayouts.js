import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import axios from 'axios';

export default function PostLayouts() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            setPostList(response.data);
        }).catch((e) => {
            console.log(e);
        });
    }, []);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Posts</h1>
    {postList.length > 0 && postList.map((val, key) => {
        return (
            <div key={key} style={{ padding: '20px 0px', width: '60%'}}>
            <Posts id={val.id} title={val.title} body={val.body} userId={val.userId}/>
            </div>
        )
    })}
    </div>
  )
}

