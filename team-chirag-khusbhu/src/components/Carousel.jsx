// Dependencies
import { Link } from "react-router-dom";
import { useState } from "react";

// Components
import Card from "./Card";

const Carousel = ({ type, link, array, sliceNumber }) => {

  const [view, setView] = useState(false);
  const className = view ? "carousel-flex" : "carousel";
  const slice = view ? sliceNumber : 5;

  return (
    <section>
      <div className="heading">
        <h2>{type}</h2>
        <Link to={link} onClick={() => setView(!view)}>
          <p>{view ? "view less" : "view more"}</p>
        </Link>
      </div>
      <div className={className}>
        {array.slice(0, slice).map((card, index) => (
          <Card src={card.src} type={type} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
