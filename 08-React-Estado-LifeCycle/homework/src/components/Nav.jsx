import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav>
    <ul className='lista1'>
      <li><img src={Logo} alt='Logo Henry' id='logoHenry'></img></li>
      <li>Henry - Weatherapp</li>
      <li><SearchBar onSearch={onSearch}/></li>
    </ul>
    </nav>
    );
};

export default Nav;
