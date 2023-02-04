import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
    <Carousel
      type={"Events"}
      link={"/events"}
      array={[
        {
          src: "https://images.pexels.com/photos/12509454/pexels-photo-12509454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          src: "https://images.pexels.com/photos/9945333/pexels-photo-9945333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ]}
    />
    <Carousel
      type={"Courses"}
      link={"/courses"}
      array={[
        {
          src: "https://images.pexels.com/photos/12509454/pexels-photo-12509454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          src: "https://images.pexels.com/photos/9945333/pexels-photo-9945333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ]}
    />
    <Carousel
      type={"Blogs"}
      link={"/blogs"}
      array={[
        {
          src: "https://images.pexels.com/photos/12509454/pexels-photo-12509454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          src: "https://images.pexels.com/photos/9945333/pexels-photo-9945333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ]}
    />
    </>
  );
};

export default Home;
