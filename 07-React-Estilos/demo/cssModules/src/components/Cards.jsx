import React from 'react';
import Card from './Card.jsx'
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  console.log(props)
  return (
    props.cities?
  <div>
    {props.cities.map((value) => {
      return (
        <Card
        key={value.id}
        max={value.main.temp_max}
        min={value.main.temp_min}
        name={value.name}
        img={value.weather[0].icon}
        onClose={props.onClose}
      />
      )
    })}
  </div> :
  <h1>No hay ciudades para mostrar</h1>
  )
};