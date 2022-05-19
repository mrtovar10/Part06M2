import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards'
import Nav from './components/Nav'


export default function App() {
  const [cities,setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        // console.log(recurso)
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          if(cities.find(value => value.id === ciudad.id)) alert('Ciudad repetida')
          else{
          setCities(oldCities => {
            // oldCities = [...oldCities, ciudad];
            oldCities = oldCities.concat(ciudad);
            return oldCities;
          });}
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
      {/* <h1>Título</h1> */}
    </div>
  );
}
