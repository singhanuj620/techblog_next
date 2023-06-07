'use client'

import React, {useEffect, useState} from 'react'
import styles from './blogs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Spinner from '@/components/spinner/spinner'

const Blogs = () => {
  const [blogsData, setBlogsData] = useState()

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3000/api/blog/allBlogs', {
        method: "GET", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
        },
      })
      let {data} = await resp.json()
      setBlogsData(data)
    })()
  },[])
  
  return (
    <div className={styles.blogContainer}>
      {!blogsData && <Spinner/>}
    { blogsData && 
      blogsData.map((blog, ind) => 
        <div key={ind} className={styles.blog_main}>
          <div className={styles.imageDiv}>
            <Image src={blog.image} alt={blog.title} fill loading="lazy" />
          </div>
          <div className={styles.blog_text}>
            <div className={styles.blog_title}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </div>
            <div className={styles.blog_desc}>
              {blog.shortDesc}
            </div>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default Blogs