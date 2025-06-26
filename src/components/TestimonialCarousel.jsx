import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import coate from "../assets/reviewQuote.png";

// Dummy Testimonials Data
const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "The recipes here are life-changing! Easy, quick and absolutely delicious!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "Recipe Book has transformed my cooking experience. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "Easy to follow recipes and delicious results every time.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mariam Khatun",
    role: "UX Specialist",
    text: "Beautiful UI and fantastic recipes for busy people like me.",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },

  {
    name: "Farzana Yasmin",
    role: "Food Blogger",
    text: "The collection here is a food lover's paradise. Can’t wait to try more!",
    avatar:
      "https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Mohammad Ali",
    role: "Home Chef",
    text: "Best recipe platform I’ve ever used. The steps are clear and photos are helpful!",
    avatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Sharmeen Sultana",
    role: "Nutritionist",
    text: "Healthy, quick, and super delicious meals – my clients love them too!",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center pt-28 relative overflow-hidden">
      {/* Section Header */}
      <div className="pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 ">
          What our customers are saying
        </h2>
        <p className="mt-4 text-base-content max-w-2xl mx-auto">
          Discover how Recipe Book is making a difference in kitchens worldwide!
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="testimonial-swiper my-20"
        style={{ overflow: "visible" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`relative transition-all duration-500 rounded-3xl p-10 bg-white/90  shadow-xl mx-auto h-70 py-20 
                  ${
                    isActive
                      ? "md:scale-[1.5] z-20 opacity-100"
                      : "md:scale-85  opacity-50 mt-4"
                  }`}
              >
                {/* Quote Icon */}
                <img
                  src={coate}
                  alt="quote"
                  className="w-8 absolute top-4 left-4 opacity-50"
                />

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4">{testimonial.text}</p>

                {/* User Info */}
                <div className="flex items-center gap-4 justify-center mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-teal-700">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
