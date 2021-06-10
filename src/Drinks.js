import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'



function Drinks(props) {
const [drinks, setDrinks] = useState([]);




useEffect(() => {
    fetch(`https://arcane-sands-30081.herokuapp.com/drinks/`)
    .then((res) => res.json())
    .then((res) => {
setDrinks(res)
    })
    .catch(console.error)
}, [])

    return (
        <section className="container">
            {drinks.map(drink => {
                return(
                    <Link to={`/details/${drink.id}`} key={drink.idDrink}>  
<div class="card">
          <div className="card-image">
            <img
              src={drink.image_url}
              alt={drink.name}
              class="image"
            />
          </div>
          <div className="card-title">
            <h3>{drink.name}</h3>
          </div>
        </div>
        </Link>
                )

            })}
        
      </section>
    );
}

export default Drinks;