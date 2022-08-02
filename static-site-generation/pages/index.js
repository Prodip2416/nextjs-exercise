import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Post from './post'

export default function Home() {
  return (
    <div className={styles.container}>
      <Post/>
      <h4>Not to see all post that because of getServerSideProps only work on pages. it never work on Component. Here Post act like as a Component</h4>
      <Link href='/post'>Click here to see all Post</Link>
    </div>
  )
}