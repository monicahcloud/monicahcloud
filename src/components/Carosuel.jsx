import Carousel from "react-bootstrap/Carousel";
import gatech from './../images/certificate.JPG';
import google from "./../images/google_ux.png";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src={gatech} alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src={google}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-center w-75"
          src="https://placekitten.com/640/360"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
