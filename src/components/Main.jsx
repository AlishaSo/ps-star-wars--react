import StarshipCard from './StarshipCard';

function Main(props) {
  return (
    <main>
      <div className='ship-cards-container'>
        {
          props.shipsData.map(ship => {
            return <StarshipCard
              key = {`${ship.name} ${ship.model}`}
              name = {ship.name}
              model = {ship.model}
              manufacturer = {ship.manufacturer}
              crew = {ship.crew}
            />
          })
        }
      </div>
      <div className='btn-container'>
        <button className='prev-btn' onClick={props.handlePrevClick}>Previous Page</button>
        <button className='next-btn' onClick={props.handleNextClick}>Next Page</button>
      </div>
    </main>
  )
}

export default Main;