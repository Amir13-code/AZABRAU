import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "./product";

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#F5E2C6] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-playfair text-[#6B3F1D] mb-12">
          Məhsullar
        </h2>

        <Swiper
          className="!w-full"
          slidesPerView={5}
          centeredSlides
          loop
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {products.map((item, i) => (
            <SwiperSlide
              key={i}
              className="!w-[180px] flex justify-center items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className={`transition-all duration-300 ${
                  i === active
                    ? "h-60 scale-110"
                    : "h-44 opacity-60 scale-90"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10">
          <h3 className="text-lg font-semibold text-[#6B3F1D]">
            {products[active].title} “{products[active].name}”
          </h3>
          <p className="text-sm text-gray-700">{products[active].type}</p>
          <p className="text-sm text-gray-700 mt-1">
            {products[active].alcohol}
          </p>
        </div>
      </div>
    </section>
  );
}
