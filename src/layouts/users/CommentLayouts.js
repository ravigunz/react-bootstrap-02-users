import React, { useEffect, useState } from "react";
import axios from "axios";
import Comments from "./Comments";

export default function CommentLayouts() {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setCommentsList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
      <h1>Comments</h1>
      {commentsList.length > 0 &&
        commentsList.map((val, key) => {
          return (
            <div key={key} style={{ padding: '20px 0px', width: '60%' }}>
              <Comments
                id={val.id}
                name={val.name}
                email={val.email}
                body={val.body}
              />
            </div>
          );
        })}
    </div>
  );
}
