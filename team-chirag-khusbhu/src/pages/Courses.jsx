import Carousel from "../components/Carousel"
import courses from "../data/courses"

const Courses = () => {
  return (
    <Carousel
      type={"Courses"}
      link={"/courses"}
      array={courses}
      sliceNumber={10}
    />
  )
}

export default Courses
