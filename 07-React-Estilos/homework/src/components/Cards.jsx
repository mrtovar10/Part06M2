import React from 'react';
import Card from './Card';
import Styles from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={Styles.cardsContainer} id="">
      {
        props.cities.map(value=>
        <Card
        name={value.name}
        max={value.main.temp_max} 
        min={value.main.temp_min}
        img={value.weather[0].icon}
        onClose={()=>alert(value.name)}
        key={value.id}


        />
        )
      }
    </div>
    )

};