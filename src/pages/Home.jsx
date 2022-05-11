import React from "react";
import mainSliderData from "../assets/images/fake-data/main-slider";
import Helmet from "../components/Helmet";
import "../sass/index.scss";
import {MainSlider} from "../components/MainSlider";

// import mainSliderData from "../assets/images/fake-data/main-slider";
// const img1 = require("../../images/slider/slide_1.png").default
// const img2 = require("../../images/slider/slide_2.png").default
// const img3 = require("../../images/slider/slide_3.png").default

// const img1 = require("../assets/images/slider/slide_1.png").default
// const img2 = require("../assets/images/slider/slide_2.png").default
// const img3 = require("../assets/images/slider/slide_3.png").default

// const mainSliderData = [
//     {
//         title: "Pima premium women's polo",
//         description: "Thanks to advanced weaving technology, Pima yarn is twice as long and thicker than regular cotton yarn. This makes the structure of the polo shirt strong, durable, limited in the ripples, soft and does not fade, ensuring the health of the user.",
//         img: img1,
//         path: "/catalog/ao-thun-dinosaur-01",
//         color: "blue"
//     },
//     {
//         title: "Fashionable women's polo",
//         description: "Modal women's polo shirt uses high-quality environmentally friendly fabrics to make an exclusive fabric that prevents shrinkage. Modal women's polo shirt is a suitable product for those of you who have a dynamic work environment today.",
//         img: img2,
//         path: "/catalog/ao-thun-dinosaur-02",
//         color: "pink"
//     },
//     {
//         title: "Women's polo Coolmax Lacoste",
//         description: "The model of women's polo shirt is made of coolmax material, which is nice to wear. This Coolmax polo shirt design has an extremely comfortable fit. Creating neatness promises to be a very hot model of polo shirt in the near future",
//         img: img3,
//         path: "/catalog/ao-thun-dinosaur-03",
//         color: "orange"
//     }
// ]

const Home = () => {
  return (
    <Helmet title="Home page" >
      {/*main slider*/}
      <MainSlider 
      data={mainSliderData}
      control={true}
      auto={false}
      timeOut={5000} />
      
     
      

      {/*end main slider*/}
    </Helmet>
  );
};

export { Home };
