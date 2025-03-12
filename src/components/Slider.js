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
            <img className="custom-image" src="../img/a_all_meet_carryout.jpg"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/brisket_only.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/chicken_thighs.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/bacon_wrapped_brats.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/ribs_full_rack.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/brisket_sandwich.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/cowboy_carryout.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/half_rack_rib_meal.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/mac_potato_salad.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/pulled_pork.png"></img>
          </div>
          <div>
            <img className="custom-image" src="../img/pulled_pork_sandwich.png"></img>
          </div>
        </Slider>
      </div>
      
    );
  }
}
