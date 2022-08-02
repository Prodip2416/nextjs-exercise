import styles from '../styles/Home.module.css'
import Post from './post';

export default function Home() {
  return (
    <div className={styles.container}>
     <Post/>
    </div>
  )
}
