import Carousel from "react-bootstrap/Carousel";

function BrandCarousel() {
  const pic = [
    "https://images.pexels.com/photos/6262181/pexels-photo-6262181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg",
    "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <Carousel variant="dark">
      {pic.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BrandCarousel;
