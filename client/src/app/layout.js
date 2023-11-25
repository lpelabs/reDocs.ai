import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'reDocs.ai',
  description: 'Generate docs for your code',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="//code.tidio.co/sjncqkcq1mbxu3rqhuhuoqwcmxqxwodm.js" async></script>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
