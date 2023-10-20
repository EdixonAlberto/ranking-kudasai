import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from '~/scss/main.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ranking Kudasai',
  description: 'Esta página muestra un ranking de usuarios para el servidor de discord de kudasai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html id={styles.app} lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
