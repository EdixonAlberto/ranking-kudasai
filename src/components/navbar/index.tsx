'use client'

import { useState } from 'react'

import styles from './Navbar.module.scss'
import { Icons } from '~/components/Icons'

export function Navbar() {
  const [sectionName, setSectionName] = useState<string>('section_1')

  function classSection(name: string): typeof styles.active {
    return name === sectionName ? styles.active : ''
  }

  return (
    <footer className={styles.navbar}>
      <ul className={styles[sectionName]}>
        <li className={classSection('section_1')} onClick={() => setSectionName('section_1')}>
          <Icons.Cup styles={styles} />
        </li>

        <li className={classSection('section_2')} onClick={() => setSectionName('section_2')}>
          <Icons.Images styles={styles} />
        </li>

        <li className={classSection('section_3')} onClick={() => setSectionName('section_3')}>
          <Icons.User styles={styles} />
        </li>

        <li className={classSection('section_4')} onClick={() => setSectionName('section_4')}>
          <Icons.Chat styles={styles} />
        </li>
      </ul>
    </footer>
  )
}
