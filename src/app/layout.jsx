import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filmotheque',
  description: 'Nous affichons des films',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header> <NavBar /></header>
        <main>
          <div className="slide bg-cyan-950">
            {children}
          </div>
        </main>
        <Footer />
        </body>
    </html>
  )
}
