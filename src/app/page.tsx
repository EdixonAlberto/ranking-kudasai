'use client'

import { useEffect, useState } from 'react'
import styles from './Ranking.module.scss'
import { Icons } from '~/components/Icons'
import { Tools } from '~/utils/Tools.util'

const userSession = {
  name: 'edixon'
}

export default function Ranking() {
  const [users, setUsers] = useState<IUser[]>([])

  async function getUsers(): Promise<void> {
    try {
      const response = await fetch('/static/json/users.json', {
        method: 'GET',
        headers: {
          Accept: 'Application/json'
        }
      })

      const responseJson = (await response.json()) as IUser[]
      if (response.status !== 200) throw responseJson
      setUsers(responseJson)
    } catch (error) {
      // TODO: Apply handler error last
      console.log(error)
      return
    }
  }

  function getLeaders(users: IUser[]): IUser[] {
    // TODO: sort by kicked
    return users.filter((_u, i) => i < 3)
  }

  // MOUNTED
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className={styles.ranking}>
      <h2>Ranking Kudasai</h2>

      <p>Lideres</p>

      <div className={styles.leaders}>
        {users.length &&
          getLeaders(users).map((user, i) => {
            return (
              <div key={i} className={styles.user}>
                <div
                  className={styles.avatar}
                  style={{
                    backgroundImage: `url(${Tools.getAvatar(user)})`
                  }}
                >
                  {i === 1 && <Icons.King styles={styles} />}
                  <div className={styles.number}>{i === 0 ? '2' : i === 1 ? '1' : '3'}</div>
                </div>

                <p>{user.nick}</p>

                <div className={styles.kick}>
                  <Icons.Exit styles={styles} />
                  <span>{user.kick}</span>
                </div>
              </div>
            )
          })}
      </div>

      <div className={styles.ranking}>
        <ul className={styles.container}>
          {users.map((user, i) => {
            return (
              <li className={styles.item + (user.username === userSession.name ? ' ' + styles.active : '')}>
                <span>{i + 1}</span>
                <img src={Tools.getAvatar(user)} alt={`Avatar ${user.nick}`} />
                <span>{user.nick}</span>
                <span>{user.kick} kick</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
