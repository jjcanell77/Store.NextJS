import './globals.css'

export const metadata = {
  title: 'Pop Shop',
  description: 'Hyperinflated pop figures store - best prices 2033',
}

import { Inter } from 'next/font/google'
// import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={' flex flex-col relative ' + inter.className}> 
        <Header />
        <div className='flex-1 min-h-screen'>
          {children}
        </div>
        <Footer/>
        <div id="portal"></div>
      </body>
    </html>
  )
}
