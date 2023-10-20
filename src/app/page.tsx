import styles from './Ranking.module.scss'
import { IconKing } from '~/components/icon/king'

export default function Ranking() {
  const users = [
    {
      name: 'Aqua',
      avatar: '/avatar-1.png',
      pts: 100
    },
    {
      name: 'Alex',
      avatar: '',
      pts: 20
    },
    {
      name: 'Meghan',
      avatar: '',
      pts: 10
    }
  ]

  const leaders = [users[1], users[0], users[2]]

  return (
    <div className={styles.ranking}>
      <h2>Ranking Kudasai</h2>

      <div className={styles.leaders}>
        {leaders.map((lead, i: number) => {
          return (
            <div key={i} className={styles.user}>
              <div
                className={styles.avatar}
                style={{
                  backgroundImage: `url('${lead.avatar || '/user-avatar.svg'}')`
                }}
              >
                {i === 1 && <IconKing styles={styles} />}
                <div className={styles.number}>{i === 0 ? '2' : i === 1 ? '1' : '3'}</div>
              </div>
              <p>{lead.name}</p>
              <div className={styles.pts}>
                {/* svg */}
                <span>{lead.pts}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className={styles.list}>
        <div className="item">
          <span>1</span>
          <img src="" alt="avatar" />
          <span>Name</span>
          <span>35pts</span>
        </div>
      </div>
    </div>
  )
}
