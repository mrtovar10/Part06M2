import React from 'react';
import './App.css';
// import { render } from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
// import Producto from './src/components/Product.jsx';
import Cards from './components/Cards.jsx';
// import './src/global.gcss';
import data from './data.js';
// render(<Producto title="Prueba" price={400}/>, document.getElementById('app'));
function App() {
    return (
      <div className="App">
        {/* <div>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
        </div> */}
        <hr />
        <div>
          <Cards
            cities={data}
            onClose={() => alert(Cairns.name)}
          />
        </div>
        <hr />
        <div>
          <SearchBar
            onSearch={(ciudad) => alert(ciudad)}
          />
        </div>
      </div>
    );
  }
  
  export default App;