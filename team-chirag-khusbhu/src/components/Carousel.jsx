import { Link } from "react-router-dom"
import Card from "./Card"

const Carousel = ({type,link,array}) => {
  return (
      <section>
      <div className='heading'>
        <h2>{type}</h2>
        <Link to={link}><p>View all</p></Link>        
      </div>
      <div className="carousel">
        {array.slice(0,5).map((card,index) => (<Card src={card.src} type={type} key={index}/>))}
      </div>
    </section>
  )
}

export default Carousel
