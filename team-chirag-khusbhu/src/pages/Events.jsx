import Carousel from "../components/Carousel"
import events from "../data/events"

const Events = () => {
  return (
    <Carousel
      type={"Events"}
      link={"/events"}
      array={events}
      sliceNumber={9}
    />
  )
}

export default Events
