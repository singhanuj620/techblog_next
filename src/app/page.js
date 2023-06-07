import Image from 'next/image'
import styles from './page.module.css'
import Blogs from './blogs/page'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Tech Blogs by Anuj</div>
      <div className={styles.description}>A blogging website with latest <span className={styles.yellowBar}>tech information.</span></div>
      <div className={styles.homeBlogContainer}>
        <Blogs/>
      </div>
    </div>
  )
}
