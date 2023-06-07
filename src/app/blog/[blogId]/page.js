'use client'

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import styles from './blogId.module.css'
import Spinner from '@/components/spinner/spinner'

const Blog = ({ params }) => {

  const {blogId} = params
  const [blog, setBlog] = useState()

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3000/api/blog/blogWithId', {
        method: "POST", 
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: parseInt(blogId,10)
        })
      })
      let {data} = await resp.json()
      console.log(data)
      setBlog(data)
    })()
  },[blogId])

  
  return (
    <div className={styles.blogCon}>
      {!blog && <Spinner/>}
      {blog && <><div className={styles.blog_title}>
        <div>{blog.title}</div>
      </div>
      <div className={styles.short_desc}>
        <div>{blog.shortDesc}</div>
      </div>
      <div className={styles.img_div}>
        <div className={styles.blog_img}>
          <Image src={blog.image} alt={blog.id} fill/>
        </div>
      </div>
      <div className={styles.desc}>
        {blog.desc}
      </div></>}
    </div>
  )
}

export default Blog