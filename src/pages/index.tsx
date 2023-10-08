import './Ranking.scss'

export default function Ranking() {
  const leaders = [
    {
      name: 'Meghan'
    },
    {
      name: 'Bryan'
    },
    {
      name: 'Alex'
    }
  ]

  return (
    <div className="ranking">
      <div className="leaders">
        {leaders.map(lead => {
          return (
            <div key={lead.name} className="user">
              <img src="" alt={lead.name} />
              <span>{lead.name}</span> <br />
              <span>40pts</span>
            </div>
          )
        })}
      </div>

      <div className="list">
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
