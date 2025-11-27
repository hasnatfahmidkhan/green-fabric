"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import reviewQuote from "../../../../public/reviewQuote.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";

const Reviews = ({ reviews }) => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center gap-5 mb-10">
        <Heading>What our customers are sayings</Heading>
        <p className="sub-heading">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="md:px-12">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="h-full w-[360px] md:w-2xl lg:w-full mx-auto"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-300 border border-gray-100 rounded-xl ${
                    isActive
                      ? "scale-100 opacity-100 z-10"
                      : "scale-90 opacity-50 z-0"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-72">
                    <Image width={40} height={40} src={reviewQuote} alt="" />
                    {/* Review Text */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-8 ">
                      {review.review}
                    </p>

                    {/* Divider */}
                    <div className="border-b border-dashed border-secondary mb-6"></div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 h-full">
                      <Image
                        src={review.userPhotoURL}
                        alt={review.userName}
                        width={50}
                        height={50}
                        className="rounded-full object-cover border-2 border-teal-700"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {review.userName}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation and pagination  */}
        <div className="relative flex items-center justify-center gap-5 mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef?.current.swiper.slidePrev()}
            className="swipper_pagination_arrow"
          >
            <FaArrowLeft />
          </button>
          {/* custom pagination */}
          <div className="flex justify-center">
            <div className="custom-pagination flex justify-center "></div>
          </div>
          <button
            onClick={() => swiperRef?.current.swiper.slideNext()}
            className="swipper_pagination_arrow"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
