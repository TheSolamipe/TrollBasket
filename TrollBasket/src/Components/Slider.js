import React from "react";
import "./../styles/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderContainer() {
  const images = [
    {
      img:
        "../Frame 75.png",
      id: 1,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
      id: 2,
    },
    // {
    //   img:
    //     "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    //   id: 3,
    // },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
      id: 4,
    },
  ];

  let imgSlides = () =>
    images.map((num) => (
      <div className="imgpad" key={num.id}>
        <img className="imgdetails " src={num.img} width="100%" alt="banner" />
      </div>
    ));

  return (
    <Slider
      className="slider__image"
      dots={true}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      arrows={false}
      autoplaySpeed={4000}
    >
      {imgSlides()}
    </Slider>
  );
}

export default SliderContainer;
