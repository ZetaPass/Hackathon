import Carousel from "../components/Carousel";
import blogs from "../data/blogs";
import courses from "../data/courses";
import events from "../data/events";

const Home = () => {
  return (
    <>
    <Carousel
      type={"Events"}
      link={"/events"}
      array={events}
    />
    <Carousel
      type={"Courses"}
      link={"/courses"}
      array={courses}
    />
    <Carousel
      type={"Blogs"}
      link={"/blogs"}
      array={blogs}
    />
    </>
  );
};

export default Home;
