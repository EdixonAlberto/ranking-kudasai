'use client'

import { useState, ChangeEvent } from 'react'
import styles from './Login.module.scss'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')

  return (
    <div className={styles.login}>
      <h1>Kudasai</h1>
      <div className={styles.banner}></div>

      <p>
        Ingresa tu <strong>username</strong> de Discord
      </p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        autoFocus
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => setUsername(target.value)}
      />
      <button type="submit" onClick={() => router.push(`/ranking?username=${username}`)}>
        <span>Ingresar</span>
      </button>

      <div className={styles.link}>
        <span>¿No eres miembro del servidor de Kudasai?</span>{' '}
        <a href="https://discord.gg/kudasai" target="_blank" rel="noopener noreferrer">
          Unete aquí
        </a>
      </div>
    </div>
  )
}
