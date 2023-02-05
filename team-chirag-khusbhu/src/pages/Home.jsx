import Carousel from "../components/Carousel";
import blogs from "../data/blogs";
import courses from "../data/courses";
import events from "../data/events";

const Home = () => {
  return (
    <>
    <Carousel
      type={"Events"}
      link={"/"}
      array={events}
      sliceNumber={9}
    />
    <Carousel
      type={"Courses"}
      link={"/"}
      array={courses}
      sliceNumber={10}
    />
    <Carousel
      type={"Blogs"}
      link={"/"}
      array={blogs}
      sliceNumber={6}
    />
    </>
  );
};

export default Home;
