import { useState } from "react";
import Buttons from "../helper/buttonList.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1,
  };
  const [buttonMenu] = useState(Buttons);
  return (
    <div className=" max-w-[100%] w-[90%] mx-auto mt-5 pl-2">
      <Slider {...settings}>
        {buttonMenu.map((button) => (
          <button className="bg-gray-200 rounded-md p-3 w-20 text-sm font-semibold">
            {button}
          </button>
        ))}
      </Slider>
    </div>
  );
};

export default ButtonList;
