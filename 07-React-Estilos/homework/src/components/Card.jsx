import React from 'react';
import Styles from './Card.module.css';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return (
    <div className={Styles.cardClass} id=''>
      <div className={Styles.infoCard}>
        <h3 className={Styles.tittleCard}>
        {name}
        </h3>
        <div className={Styles.temps}>
          <p className={Styles.tMax}>
            temp max:{max}
          </p>
          <p className={Styles.tMin}>
            temp min:{min}
          </p>
        </div>
      </div>
      <img className={Styles.imgCard} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img wather map" />
      <button className={Styles.btnCard} onClick={onClose}>
        x 
      </button>


    </div>
  );
};