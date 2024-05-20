import { useState, useEffect } from 'react'
import './NBA_Bets.css'
import { teamImages } from './teamImages.jsx';

function NBA_Bets() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=f1e3276ebee2f8551da02b315a7a0d7e&regions=us&markets=h2h,spreads&oddsFormat=american')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <table className="spreadsheet_Bets">
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Bookmaker</th>
          <th>Outcome</th>
          <th>Price</th>
          <th>Point</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          item.bookmakers.map((bookmaker, bookmakerIndex) => (
            bookmaker.title === 'DraftKings' && bookmaker.markets.map((market, marketIndex) => (
              market.outcomes.map((outcome, outcomeIndex) => (
                <tr key={`${index}-${bookmakerIndex}-${marketIndex}-${outcomeIndex}`}>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src={teamImages[item.home_team]} alt={item.home_team} style={{ width: '24px', height: '24px' }} />
                      {item.home_team}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src={teamImages[item.away_team]} alt={item.away_team} style={{ width: '24px', height: '24px' }} />
                      {item.away_team}
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>  {bookmaker.title}</td>
                  <td style={{ textAlign: 'center' }}>  {outcome.name}</td>
                  <td style={{ textAlign: 'center' }}>  {outcome.price}</td>
                  <td style={{ textAlign: 'center' }}>  {outcome.point ? outcome.point : 'N/A'}</td>
                </tr>
              ))
            ))
          ))
        ))}
      </tbody>
    </table>
  )
}

export default NBA_Bets
