import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function Post() {
  const [posts,setPosts] = useState(null);

  useEffect(()=>{
    async function getPost(){
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      setPosts(await response.json());
    }

    getPost();

  },[]);

  return (
    <div className={styles.container}>
      <h4>Post List ....</h4>
      {
        posts && posts.map((post)=><li key={post.id}><Link href={`/post/${post.id}`}>{post.title}</Link></li>)
      }
    </div>
  )
}
