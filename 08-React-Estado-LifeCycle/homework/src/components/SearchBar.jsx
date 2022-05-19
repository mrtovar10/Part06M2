import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city,setCity] = useState('')
  function CapturaNombre (eventoNombre){
    setCity((ciudad)=>{
      ciudad = eventoNombre.target.value;
      // console.log(ciudad);
      return ciudad; 
    })
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      // console.log(city)
      setCity('')
    }}>
      <input
        value ={city}
        type="text"
        placeholder='Ciudad...'
        onChange={(evento)=>CapturaNombre(evento)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
