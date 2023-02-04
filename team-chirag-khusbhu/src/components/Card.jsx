const Card = ({src,type}) => {
  return (
    <div className='card'>
      <div style={{width: "330px", height: "204px"}}>
        <img style={{height: "100%",width: "100%", objectFit: "cover"}} src={src} alt="image" />
      </div>
      <div className='card-description'>
        <h2>{type}</h2>
        <div>
          <button>Buy Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default Card
