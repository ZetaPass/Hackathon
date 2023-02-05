import Carousel from "../components/Carousel"
import blogs from "../data/blogs"

const Blogs = () => {
  return (
    <Carousel
      type={"Blogs"}
      link={"/blogs"}
      array={blogs}
      sliceNumber={6}
    />
  )
}

export default Blogs
