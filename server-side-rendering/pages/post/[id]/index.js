import React from "react";
import Link from "next/link";

export async function getServerSideProps({params}) {
  const response = await fetch( `https://jsonplaceholder.typicode.com/posts/${params.id}`);
  return {
    props: {
      post: await response.json(),
    },
  };
}

const index = ({post}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link href="/">Back to Home</Link>
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
