import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Filmotheque',
  description: 'Trouvez les films que vous recherchez'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google" content="notranslate"/>
      <meta name="robots" content="noindex,nofollow"/>
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
