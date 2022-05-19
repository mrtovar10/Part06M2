import './Ciudad.css';
import {useParams} from 'react-router-dom';
import React, { useState } from 'react';


export default function Ciudad({city}) {
    const [elFetch, setElFetch] = useState({});
    
    let {ciudadId} = useParams();
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=c611b350e0213a4eb66cd67525439cfc`)
    .then((r)=> r.json())
    .then((respuesta) => {
        setElFetch(()=>{
            if (respuesta.main){
                return {name:respuesta.name,
                temp:respuesta.main.temp,
                weather:respuesta.weather[0].main,
                wind:respuesta.wind.speed,
                clouds:respuesta.clouds.all,
                latitud:respuesta.coord.lat,
                longitud:respuesta.coord.lon,}
            }}
        )
    })

    if(!city) city = elFetch;

    if (city) {
        return (
            <div className="ciudad">
                    <div className="container">
                        <h2>{city.name}</h2>
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>
                </div>
            </div>
        )
    }
   
    return (
        <div className="ciudad">
            {/* {console.log(elFetch)} */}
            <h1> Esta Ciudad no se encuentra en la lista</h1>
        </div>
    )
    
}