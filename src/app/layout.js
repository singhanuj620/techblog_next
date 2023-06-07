import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Blogs',
  description: 'Technical blogs by Anuj Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}
      suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        
      </body>
    </html>
  )
}
