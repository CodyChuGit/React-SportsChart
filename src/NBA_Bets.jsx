import { useState, useEffect } from 'react'
import './NBA_Bets.css'
import atlantaHawks from '/NBA_Teams/Atlanta Hawks.svg';
import bostonCeltics from '/NBA_Teams/Boston Celtics.svg';
import brooklynNets from '/NBA_Teams/Brooklyn Nets.svg';
import charlotteHornets from '/NBA_Teams/Charlotte Hornets.svg';
import chicagoBulls from '/NBA_Teams/Chicago Bulls.svg';
import clevelandCavaliers from '/NBA_Teams/Cleveland Cavaliers.svg';
import dallasMavericks from '/NBA_Teams/Dallas Mavericks.svg';
import denverNuggets from '/NBA_Teams/Denver Nuggets.svg';
import detroitPistons from '/NBA_Teams/Detroit Pistons.svg';
import goldenStateWarriors from '/NBA_Teams/Golden State Warriors.svg';
import houstonRockets from '/NBA_Teams/Houston Rockets.svg';
import indianaPacers from '/NBA_Teams/Indiana Pacers.svg';
import laClippers from '/NBA_Teams/Los Angeles Clippers.svg';
import laLakers from '/NBA_Teams/Los Angeles Lakers.svg';
import memphisGrizzlies from '/NBA_Teams/Memphis Grizzlies.svg';
import miamiHeat from '/NBA_Teams/Miami Heat.svg';
import milwaukeeBucks from '/NBA_Teams/Milwaukee Bucks.svg';
import minnesotaTimberwolves from '/NBA_Teams/Minnesota Timberwolves.svg';
import newOrleansPelicans from '/NBA_Teams/New Orleans Pelicans.svg';
import newYorkKnicks from '/NBA_Teams/New York Knicks.svg';
import oklahomaCityThunder from '/NBA_Teams/Oklahoma City Thunder.svg';
import orlandoMagic from '/NBA_Teams/Orlando Magic.svg';
import philadelphia76ers from '/NBA_Teams/Philadelphia 76ers.svg';
import phoenixSuns from '/NBA_Teams/Phoenix Suns.svg';
import portlandTrailBlazers from '/NBA_Teams/Portland Trail Blazers.svg';
import sacramentoKings from '/NBA_Teams/Sacramento Kings.svg';
import sanAntonioSpurs from '/NBA_Teams/San Antonio Spurs.svg';
import torontoRaptors from '/NBA_Teams/Toronto Raptors.svg';
import utahJazz from '/NBA_Teams/Utah Jazz.svg';
import washingtonWizards from '/NBA_Teams/Washington Wizards.svg';

function NBA_Bets() {
  const [data, setData] = useState(null)

  const teamImages = {
    'Atlanta Hawks': atlantaHawks,
    'Boston Celtics': bostonCeltics,
    'Brooklyn Nets': brooklynNets,
    'Charlotte Hornets': charlotteHornets,
    'Chicago Bulls': chicagoBulls,
    'Cleveland Cavaliers': clevelandCavaliers,
    'Dallas Mavericks': dallasMavericks,
    'Denver Nuggets': denverNuggets,
    'Detroit Pistons': detroitPistons,
    'Golden State Warriors': goldenStateWarriors,
    'Houston Rockets': houstonRockets,
    'Indiana Pacers': indianaPacers,
    'Los Angeles Clippers': laClippers,
    'Los Angeles Lakers': laLakers,
    'Memphis Grizzlies': memphisGrizzlies,
    'Miami Heat': miamiHeat,
    'Milwaukee Bucks': milwaukeeBucks,
    'Minnesota Timberwolves': minnesotaTimberwolves,
    'New Orleans Pelicans': newOrleansPelicans,
    'New York Knicks': newYorkKnicks,
    'Oklahoma City Thunder': oklahomaCityThunder,
    'Orlando Magic': orlandoMagic,
    'Philadelphia 76ers': philadelphia76ers,
    'Phoenix Suns': phoenixSuns,
    'Portland Trail Blazers': portlandTrailBlazers,
    'Sacramento Kings': sacramentoKings,
    'San Antonio Spurs': sanAntonioSpurs,
    'Toronto Raptors': torontoRaptors,
    'Utah Jazz': utahJazz,
    'Washington Wizards': washingtonWizards,
  }

  useEffect(() => {
    fetch('https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=f1e3276ebee2f8551da02b315a7a0d7e')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <table className="spreadsheet">
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

export default NBA_Bets
