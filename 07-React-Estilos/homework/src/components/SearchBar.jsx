import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder="nombre de la ciudad" />
      <button onClick={()=>props.onSearch("buscando...")}>
        agregar
      </button>
    </div>

  )
};