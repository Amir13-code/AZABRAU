import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "./product";
import { Pagination, Navigation } from "swiper/modules";

export default function Products() {
  const [active, setActive] = useState(0);
  return (
    <section className=" flex justify-center items-center mx-auto w-full bg-[#F7E8D4] py-24 px-6">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl font-playfair text-[#6B3F1D] mb-14">
          Məhsullar
        </h2>
        <div className="relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            initialSlide={2}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            onSwiper={(swiper) => setActive(swiper.realIndex)}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            className="h-[400px] flex justify-center items-center"
          >
            {products.map((item, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center">
                <div
                  className={`
                  mx-auto flex justify-center items-center transition-all duration-300 h-[400px] py-8
                  ${i === active ? "scale-120" : "opacity-60 scale-90"}
                `}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full object-contain drop-shadow-xl transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-prev z-100 absolute left-0 top-1/2 -translate-y-1/2 text-[#C08A54] text-6xl">
            ‹
          </button>
          <button className="custom-next absolute z-100 right-0 top-1/2 -translate-y-1/2 text-[#C08A54] text-6xl">
            ›
          </button>
        </div>
        <div className="text-center mt-10">
          <h3 className="text-lg font-semibold text-[#6B3F1D]">
            {products[active].title} “{products[active].name}”
          </h3>
          <p className="text-sm text-gray-700 mt-1">{products[active].type}</p>
          <p className="text-sm text-gray-700 mt-1">
            {products[active].alcohol}
          </p>
          <button className="mt-6 px-8 py-2 border border-[#6B3F1D] text-[#6B3F1D] rounded-full text-sm hover:bg-[#6B3F1D] hover:text-white transition">
            Ətraflı
          </button>
        </div>
      </div>
    </section>
  );
}
