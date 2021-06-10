import React, {useState, useEffect} from 'react';

function DrinkDetails(props) {
    const[drink, setDrink] = useState(null)
    useEffect(() => {
        fetch(`https://arcane-sands-30081.herokuapp.com/drinks/${props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => {
    setDrink(res)
        })
        .catch(console.error)
    }, )
    return (
        drink &&
        <div className="details-container">
          <img
            src={drink.image_url}
            alt={drink.idDrink}
          />
          <div className="details">
            <h2>{drink.name}</h2>
            <h3>Caffiene Content: {drink.caffeine_content}</h3>
            <h4>Extra Ingredients: {drink.extra_ingredients}</h4>
            <h4>Price: {drink.price}</h4>
            <p>
             
            </p>
            <a
              href={drink.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
             
            </a>
          </div>
        </div>
      );
    }

export default DrinkDetails;