import { useState, useEffect } from 'react'
import './NBA_Points.css'
import { teamImages } from './teamImages.jsx';

function NBA_Points() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=f1e3276ebee2f8551da02b315a7a0d7e')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <table className="spreadsheet_Large">
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Home Score</th>
          <th>Away Score</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr key={index}>
            <td style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={teamImages[item.home_team]} alt={item.home_team} style={{ width: '32px', height: '32px' }} />
                {item.home_team}
              </div>
            </td>
            <td style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={teamImages[item.away_team]} alt={item.away_team} style={{ width: '32px', height: '32px' }} />
                {item.away_team}
              </div>
            </td>
            <td style={{ textAlign: 'center' }}>{item.scores && item.scores.find(score => score.name === item.home_team).score}</td>
            <td style={{ textAlign: 'center' }}>{item.scores && item.scores.find(score => score.name === item.away_team).score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default NBA_Points
