import styles from './blogs.module.css'

export default function RootLayout({ children }) {
  return (
    <div className={styles.blogs_page}>
        {children}
    </div>
  )
}
