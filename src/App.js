import React from 'react';
import fetchData from './services/sw-api';
import Main from './components/Main';
import './styles.css';

function App() {
  const [shipsData, setShipsData] = React.useState([]);
  const [pageNum, setPageNum] = React.useState(1);
  const [isThereNext, setIsThereNext] = React.useState(true);
  const [isTherePrev, setIsTherePrev] = React.useState(false);

  React.useEffect(() => {
    fetchData(pageNum)
      .then(response => {
        setShipsData(response.results);
        
        setIsThereNext(() => {
          if(response.next)
            return true;
          return false;
        });

        setIsTherePrev(() => {
          if(response.previous)
            return true;
          return false;
        })
      });
  }, [pageNum]);

  function handleNextClick() {
    window.scrollTo(0, 0);
    if(isThereNext)
      setPageNum(pageNum + 1);
    else
      alert('You have reached the last page of the results');
  }

  function handlePrevClick() {
    window.scrollTo(0, 0);
    if(isTherePrev)
      setPageNum(pageNum - 1);
    else
      alert('You have reached the first page of the results');
  }

  return (
    <div className="App">
      <header>
        <h1>Star Wars Starships</h1>
      </header>
      <Main 
        shipsData = {shipsData}
        handlePrevClick = {handlePrevClick}
        handleNextClick = {handleNextClick}
      />
    </div>
  )
}

export default App;
