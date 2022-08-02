import Link from "next/link";
import styles from "../../styles/Home.module.css";
  
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return {
    props: {
      posts: await response.json(),
    },
  };
}

export default function Post({ posts }) {
  return (
    <div className={styles.container}>
      <h4>Post List ....</h4>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </div>
  );
}