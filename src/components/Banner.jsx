import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    "https://i.ibb.co/5bMhgTm/Cover-Banner-08.jpg",
    "https://i.ibb.co/nNqkfQnX/4banner.jpg",
    "https://i.ibb.co/8TKFd13/3-Cover-Banner-09.jpg",
    "https://i.ibb.co/99xd0Rrh/2-Cover-Banner-17.jpg",
  ];

  return (
    <div className="max-w-screen-xl mx-auto rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        pagination={{ clickable: true }}
        className="mySwiper"
        style={{ height: "auto" }} 
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full max-h-[700px]"> 
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-xl max-h-[700px] opacity-95" 
              />
            
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
