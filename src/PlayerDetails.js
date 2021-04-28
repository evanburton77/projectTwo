import React, {useState, useEffect} from 'react';

function PlayerDetails(props) {
    const[player, setPlayer] = useState(null)
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => {
    setPlayer(res)
        })
        .catch(console.error)
    }, [])
    return (
        player &&
        <div className="details-container">
          <img
            src={player.players[0].strThumb}
            alt={player.players[0].idPlayer}
          />
          <div className="details">
            <h2>{player.players[0].strPlayer}</h2>
            <h3>{player.players[0].strTeam}</h3>
            <h4>{player.players[0].strPosition}</h4>
            <p>
              {player.players[0].strDescriptionEN}
            </p>
            <a
              href={player.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
             
            </a>
          </div>
        </div>
      );
    }

export default PlayerDetails;