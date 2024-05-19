import { useState, useEffect } from 'react'
import './App.css'
import atlantaHawks from '../public/NBA_Teams/Atlanta Hawks.svg';
import bostonCeltics from '../public/NBA_Teams/Boston Celtics.svg';
import brooklynNets from '../public/NBA_Teams/Brooklyn Nets.svg';
import charlotteHornets from '../public/NBA_Teams/Charlotte Hornets.svg';
import chicagoBulls from '../public/NBA_Teams/Chicago Bulls.svg';
import clevelandCavaliers from '../public/NBA_Teams/Cleveland Cavaliers.svg';
import dallasMavericks from '../public/NBA_Teams/Dallas Mavericks.svg';
import denverNuggets from '../public/NBA_Teams/Denver Nuggets.svg';
import detroitPistons from '../public/NBA_Teams/Detroit Pistons.svg';
import goldenStateWarriors from '../public/NBA_Teams/Golden State Warriors.svg';
import houstonRockets from '../public/NBA_Teams/Houston Rockets.svg';
import indianaPacers from '../public/NBA_Teams/Indiana Pacers.svg';
import laClippers from '../public/NBA_Teams/Los Angeles Clippers.svg';
import laLakers from '../public/NBA_Teams/Los Angeles Lakers.svg';
import memphisGrizzlies from '../public/NBA_Teams/Memphis Grizzlies.svg';
import miamiHeat from '../public/NBA_Teams/Miami Heat.svg';
import milwaukeeBucks from '../public/NBA_Teams/Milwaukee Bucks.svg';
import minnesotaTimberwolves from '../public/NBA_Teams/Minnesota Timberwolves.svg';
import newOrleansPelicans from '../public/NBA_Teams/New Orleans Pelicans.svg';
import newYorkKnicks from '../public/NBA_Teams/New York Knicks.svg';
import oklahomaCityThunder from '../public/NBA_Teams/Oklahoma City Thunder.svg';
import orlandoMagic from '../public/NBA_Teams/Orlando Magic.svg';
import philadelphia76ers from '../public/NBA_Teams/Philadelphia 76ers.svg';
import phoenixSuns from '../public/NBA_Teams/Phoenix Suns.svg';
import portlandTrailBlazers from '../public/NBA_Teams/Portland Trail Blazers.svg';
import sacramentoKings from '../public/NBA_Teams/Sacramento Kings.svg';
import sanAntonioSpurs from '../public/NBA_Teams/San Antonio Spurs.svg';
import torontoRaptors from '../public/NBA_Teams/Toronto Raptors.svg';
import utahJazz from '../public/NBA_Teams/Utah Jazz.svg';
import washingtonWizards from '../public/NBA_Teams/Washington Wizards.svg';

function App() {
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
    fetch('https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=5288e4212d2a0e03569b5a08d18af5dc')
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={teamImages[item.home_team]} alt={item.home_team} style={{ width: '48px', height: '48px' }} />
                {item.home_team}
              </div>
            </td>
            <td style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={teamImages[item.away_team]} alt={item.away_team} style={{ width: '48px', height: '48px' }} />
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

export default App