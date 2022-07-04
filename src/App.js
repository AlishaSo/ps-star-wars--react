import React from 'react';
import fetchData from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  let [shipsData, setShipsData] = React.useState([]);

  React.useEffect(() => {
    fetchData()
      .then(response => {
        setShipsData(shipsData = response.results)
        console.log(response)
      });
  }, []);

  return (
    <div className="App">
      {shipsData.map(ship => {
        return <StarshipCard 
          key={`${ship.name} ${ship.model}`} 
          name = {ship.name}
          model = {ship.model}
          manufacturer = {ship.manufacturer}
          crew = {ship.crew}
        />
      })}
    </div>
  );
}

export default App;
