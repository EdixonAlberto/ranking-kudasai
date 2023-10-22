'use client'

import styles from './Login.module.scss'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  return (
    <div className={styles.login}>
      <h1>Kudasai</h1>
      <div className={styles.banner}></div>

      <p>
        Ingresa tu <strong>username</strong> de Kudasai
      </p>
      <input type="text" name="username" placeholder="Username" autoFocus />
      <button type="submit" onClick={() => router.push('/ranking')}>
        <span>Ingresar</span>
      </button>
    </div>
  )
}
