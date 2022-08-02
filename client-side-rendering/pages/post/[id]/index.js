import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

const index = () => {
  const [post, setPost] = useState(null);
  const { query: {id} } = useRouter();

  useEffect(() => {
    async function getSinglePost() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(await response.json());
    }

    if(id){
        getSinglePost();
    }
  }, [id]);

  return (
    <div style={{textAlign:'center'}}>
       <Link href='/'>Back to Home</Link>
      {post && (
        <div>
          <h3>Post Details ...</h3>
          <h4>{post.id}</h4>
          <h5>{post.title}</h5>
          <h6>{post.body}</h6>
        </div>
      )}
    </div>
  );
};

export default index;
