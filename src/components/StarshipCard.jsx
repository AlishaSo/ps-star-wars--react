function StarshipCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Model: {props.model}</h3>
      <h3>Manufacturer: {props.manufacturer}</h3>
      <h3>Crew: {props.crew}</h3>
    </div>
  )
}

export default StarshipCard;