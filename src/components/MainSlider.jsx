import React, { useState, useEffect, useCallback } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../sass/index.scss";
// import mainSliderData from "../assets/images/fake-data/main-slider";
import img1 from "../assets/images/slider/slide_1.png";
import img2 from "../assets/images/slider/slide_2.png";
import img3 from "../assets/images/slider/slide_3.png";
import Button from "./Button";

const mainSliderData = [
  {
    title: "Pima premium women's polo",
    description:
      "Thanks to advanced weaving technology, Pima yarn is twice as long and thicker than regular cotton yarn. This makes the structure of the polo shirt strong, durable, limited in the ripples, soft and does not fade, ensuring the health of the user.",
    img: img1,
    path: "/catalog/ao-thun-dinosaur-01",
    color: "blue",
  },
  {
    title: "Fashionable women's polo",
    description:
      "Modal women's polo shirt uses high-quality environmentally friendly fabrics to make an exclusive fabric that prevents shrinkage. Modal women's polo shirt is a suitable product for those of you who have a dynamic work environment today.",
    img: img2,
    path: "/catalog/ao-thun-dinosaur-02",
    color: "pink",
  },
  {
    title: "Women's polo Coolmax Lacoste",
    description:
      "The model of women's polo shirt is made of coolmax material, which is nice to wear. This Coolmax polo shirt design has an extremely comfortable fit. Creating neatness promises to be a very hot model of polo shirt in the near future",
    img: img3,
    path: "/catalog/ao-thun-dinosaur-03",
    color: "orange",
  },
];

const MainSlider = (props) => {
  const data = mainSliderData;

  const timeOut = props.timeOut ? props.timeOut : 3000;
  // const activeSlide = 0;
  const [activeSlide, setActiveSlide] = useState(0);

  // const nextSlide = () => {
  //   const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
  //   setActiveSlide(index);
  // };

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data],)

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const sliderAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(sliderAuto);
      };
    }
  }, [nextSlide, timeOut, props]);

  return (
    <div className="container">
      <div className="main-slider">
        {data.map((item, index) => (
          <MainSliderItem
            key={index}
            item={item}
            active={index === activeSlide}
          />
        ))}
        {props.control ? (
          <div className="main-slider__control">
            <div className="main-slider__control__item" onClick={prevSlide}>
              <i className="bx bx-chevron-left"></i>
            </div>
            <div className="main-slider__control__item">
              <div className="index">
                {activeSlide + 1}/{data.length}
              </div>
            </div>
            <div className="main-slider__control__item" onClick={nextSlide}>
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

MainSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

const MainSliderItem = (props) => (
  <div className={`main-slider__item ${props.active ? "active" : ""}`}>
    <div className="main-slider__item__info">
      <div className={`main-slider__item__info__title color-${props.item.color}`}>
        <span>{props.item.title}</span>
      </div>
      <div className="main-slider__item__info__description">
        <span>{props.item.description}</span>
      </div>
      <div className="main-slider__item__info__btn">
        <Link to={props.item.path}>
          <Button
          backgroundColor={props.item.color}
          icon="bx bx-cart"
          animate={true}
          >
          See details
          </Button>
        </Link>
      </div>
    </div>
    <div className="main-slider__item__image">
      <div className={`shape bg-${props.item.color}`}></div>
      <img src={props.item.img} alt="img" />
    </div>
  </div>
);

export { MainSlider };
