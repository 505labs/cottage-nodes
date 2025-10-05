"use client";
import ProtoTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({ children, ...props }) {
  return (
    <Swiper {...props} modules={[Autoplay, Pagination, Navigation, EffectFade]}>
      {children.map((child, index) => (
        <SwiperSlide key={index + "swiper"}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  children: ProtoTypes.node,
};

export default Slider;
