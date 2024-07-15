import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      centerMode: false,
      ltr: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="custom-image" src="../img/ranch_hand_carryout.png"></img>
          </div>
          <div>
            <img className="custom-image" src="https://transcendent-medovik-acc048.netlify.app/img/abpc_pizza_three.png"></img>
          </div>
          <div>
            <img className="custom-image" src="https://transcendent-medovik-acc048.netlify.app/img/abpc_pizza_two.png"></img>
          </div>
        </Slider>
      </div>
      
    );
  }
}
