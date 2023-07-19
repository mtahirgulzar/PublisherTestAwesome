import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Images = [
  { img: "/images/carousal-image.jpg", alt: "carousal-image" },
  { img: "/images/carousal-image.jpg", alt: "carousal-image" },
  { img: "/images/carousal-image.jpg", alt: "carousal-image" },
  { img: "/images/carousal-image.jpg", alt: "carousal-image" },
  { img: "/images/carousal-image.jpg", alt: "carousal-image" },
];

function Next(props) {
  const { onClick } = props;
  return (
    <div
      className="carousal-next-arrow" 
      onClick={onClick}
    />
  );
}

function Prev(props) {
  return (
    <div
      className="carousal-prev-arrow"
      onClick={props.onClick}
    />
  );
}
export const ImageCarousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    nextArrow: <Next />,
    prevArrow: <Prev />
  };
  return (
    <div className="image-carousal">
      <Slider {...settings}>
        {Images?.map((item, index) => {
          return (
            <div 
                style={{   padding: '0 20px', margin: '0 20px' }}
                 key={index}>
              <img
                className="image-carousal_img"
                src={item?.img}
                alt={item?.alt}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
