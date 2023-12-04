import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/header'
import Footer from './components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lab 10, Problem 3',
  description: 'My Lab 10, Problem 3 for CPS 530, TMU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
