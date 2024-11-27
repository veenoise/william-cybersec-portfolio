import ImageGallery from "react-image-gallery";
import github from "./assets/GitHub_Foundations.png";
import freeCodeCamp from "./assets/information-security-v7.png";
import networking from "./assets/networking_basics.jpeg";
import cs50Cybersecurity from "./assets/cs50_cyber.jpeg";
import python from "./assets/python.png";
import mastercard from "./assets/mastercard.png";
import cs50x from "./assets/cs50x.png";

const Certificates = () => {
  const images = [
    {
      original: github,
      thumbnail: github,
    },
    {
      original: freeCodeCamp,
      thumbnail: freeCodeCamp,
    },
    {
      original: networking,
      thumbnail: networking,
    },
    {
      original: cs50Cybersecurity,
      thumbnail: cs50Cybersecurity,
    },
    {
      original: python,
      thumbnail: python,
    },
    {
      original: mastercard,
      thumbnail: mastercard,
    },
    {
      original: cs50x,
      thumbnail: cs50x,
    },
  ];
  
  return (
    <div className="container" style={{marginTop: "56px"}} id="certificates">
      <h2 className="mb-4">certificates</h2>
      <div>
        <ImageGallery items={images} />
      </div>
    </div>
  )
}

export default Certificates