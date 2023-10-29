import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from '~/scss/main.module.scss'
import { Navbar } from '~/components/navbar/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ranking Kudasai',
  description: 'Aplicación web para los usuarios del discord de Kudasai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id={styles.app} lang="es">
      <body className={inter.className}>
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  )
}
