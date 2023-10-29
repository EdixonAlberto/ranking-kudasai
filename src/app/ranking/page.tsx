import styles from './Ranking.module.scss'
import Image from 'next/image'
import { Icons } from '~/components/Icons'
import { Tools } from '~/utils/Tools.util'

interface IRankingProps {
  searchParams: {
    username: string
  }
}

export default async function Ranking({ searchParams }: IRankingProps) {
  const userSession = {
    username: searchParams.username
  }

  async function getUsers(): Promise<IUser[]> {
    try {
      // const response = await fetch('API_URL', {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/json'
      //   }
      // })
      // const responseJson = (await response.json()) as IUser[]
      // if (response.status !== 200) throw responseJson
      // return responseJson

      const users = await import('~/data/users.json', {
        assert: { type: 'json' }
      })

      return users.default
    } catch (error) {
      // TODO: Apply handler error last
      console.log('ERROR ->', error)
      return []
    }
  }

  const users = await getUsers()

  function getLeaders(users: IUser[]): IUser[] {
    const leaders = users.sort((a, b) => b.kick - a.kick)
    return [leaders[1], leaders[0], leaders[2]]
  }

  return (
    <div className={styles.ranking}>
      {/* TODO: return to login from server component */}
      {/* <Icons.Back styles={styles} /> */}

      <h2>Ranking</h2>

      <div className={styles.leaders}>
        <p className={styles.subtitle}>Lideres de Kicks</p>

        <div className={styles.table}>
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
      </div>

      <div className={styles.ranking_list}>
        <p className={styles.subtitle}>Ranking de Kicks</p>

        <ul className={styles.container}>
          {users.map((user, i) => {
            return (
              <li key={i} className={styles.item + (user.username === userSession.username ? ' ' + styles.active : '')}>
                <span>#{i + 1}</span>
                <Image src={Tools.getAvatar(user)} width={35} height={35} alt={`Avatar ${user.nick}`} />
                <span>{user.nick}</span>
                <span>{user.kick} kicks</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
