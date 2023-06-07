import React from 'react'
import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="nav">
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/blogs"><li>Blogs</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar