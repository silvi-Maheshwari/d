import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from "./Slideshow";
import Slideshow2 from "./Slideshow2";
import Slideshow3 from "./Slideshow3";


const Home = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically transition between slides
    autoplaySpeed: 3000, // 3 seconds between transitions
    nextArrow: <CustomNextArrow />, // Custom right arrow
    prevArrow: <CustomPrevArrow />, // Custom left arrow
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1736767216/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Republic%20Day%20Sale/HP%20Rotating%20Banners/HP_RD_10Jan2025_p1zefz.jpg" },
    { src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1736767216/Croma%20Assets/CMS/LP%20Page%20Banners/2025/campaigns/Republic%20Day%20Sale/HP%20Rotating%20Banners/HP_RD_10Jan2025_p1zefz.jpg" },
    { src: "https://via.placeholder.com/1000x400?text=Slide+3",  },
    { src: "https://via.placeholder.com/1000x400?text=Slide+4" },
  ];

  return (
    <div className="home">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={`Slide ${index + 1}`} width="100%" />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
      <Slideshow/>
<Slideshow2/>
<Slideshow3/>
    </div>
  );
};



// Custom next arrow component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      &#10095; {/* Right arrow symbol */}
    </div>
  );
};

// Custom previous arrow component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      &#10094; {/* Left arrow symbol */}
    </div>
  );

};

export default Home;
