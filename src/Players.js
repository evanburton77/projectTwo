import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'



function Players(props) {
const [players, setPlayers] = useState([]);

const searchOptions = {
  key: process.env.NHL_KEY
}


useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/40130162/searchplayers.php?t=Chicago%20Blackhawks')
    .then((res) => res.json())
    .then((res) => {
setPlayers(res.player)
    })
    .catch(console.error)
}, [])

    return (
        <section className="container">
            {players.map(player => {
                return(
                    <Link to={`/details/${player.idPlayer}`} key={player.idPlayer}>  
<div class="card">
          <div className="card-image">
            <img
              src={player.strThumb}
              alt={player.strPlayer}
            />
          </div>
          <div className="card-title">
            <h3>{player.strPlayer}</h3>
          </div>
        </div>
        </Link>
                )

            })}
        
      </section>
    );
}

export default Players;