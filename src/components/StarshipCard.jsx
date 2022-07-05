function StarshipCard(props) {
  return (
    <div className='ship-card'>
      <h2 className='ship-name'>{props.name}</h2>
      <h3 className='ship-model'>Model: {props.model}</h3>
      <h3 className='ship-mfg'>Manufacturer: {props.manufacturer}</h3>
      <h3 className='ship-crew'>Crew: {props.crew}</h3>
    </div>
  )
}

export default StarshipCard;