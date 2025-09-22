"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Carousel() {
  const images = [
      "./data/projetos/ph01.png",
      "./data/projetos/ecotank.png",
      "./data/projetos/aquashield.png"
  ]
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        centeredSlides={!isMobile}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={isMobile ? { clickable: true } : false}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="group"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className={`transition-transform duration-300 ease-in-out border-white border-2 rounded-2xl ${
              !isMobile ? "scale-90 opacity-70" : ""
            }`}
          >
            <img
              src={src}
              alt={`Slide ${src}`}
              className="w-full h-72 object-cover rounded-xl select-none pointer-events-none shadow-md"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </SwiperSlide>
        ))}
        <style>{`
          .swiper-slide-active {
            transform: scale(1.05) !important;
            opacity: 1 !important;
            z-index: 10;
          }
        `}</style>
      </Swiper>

      {/* Setas para DESKTOP (fora da imagem) */}
      {!isMobile && (
        <>
          <div
            className="absolute -left-2 xl:-left-7 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ❮
          </div>
          <div
            className="absolute -right-2 xl:-right-7 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ❯
          </div>
        </>
      )}

      {/* Setas para MOBILE (dentro da imagem) */}
      {isMobile && (
        <>
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ❮
          </div>
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white text-3xl cursor-pointer select-none"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ❯
          </div>
        </>
      )}
    </div>
  );
}
