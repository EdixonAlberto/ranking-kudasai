'use client'

import styles from './Navbar.module.scss'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Icons } from '~/components/Icons'

type TPages = 'ranking' | 'gallery' | 'chat' | 'profile'

export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [pageName, setPageName] = useState<TPages>('ranking')

  function classSection(page: TPages): typeof styles.active {
    return page === pageName ? styles.active : ''
  }

  function goPage(page: TPages): void {
    setPageName(page)
    router.push('/' + page)
  }

  if (['/', '/login'].includes(pathname)) return null

  return (
    <footer className={styles.navbar}>
      <ul className={styles[pageName]}>
        <li className={classSection('ranking')} onClick={() => goPage('ranking')}>
          <Icons.Cup styles={styles} />
        </li>

        <li className={classSection('gallery')} onClick={() => goPage('gallery')}>
          <Icons.Images styles={styles} />
        </li>

        <li className={classSection('chat')} onClick={() => goPage('chat')}>
          <Icons.Chat styles={styles} />
        </li>

        <li className={classSection('profile')} onClick={() => goPage('profile')}>
          <Icons.User styles={styles} />
        </li>
      </ul>
    </footer>
  )
}
