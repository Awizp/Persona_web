import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import { SliderProducts } from "../../data/products"
import "./Slider.css";

// Import swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Slider() {
  return (
    <div className="slider_container">
      <Swiper modules={[Pagination, Navigation]} className="mySwiper"
        loopFillGroupWithBlank={true} navigation={true}
        slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}
        breakpoints={{ 640: { slidesPerView: 3 }, 0: { slidesPerView: 1 } }} >
        {
          SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className="left_side">
                <div className="slider_name">
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>

                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>

              <img src={slide.img} alt="product-img" className='product_img' />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div >
  )
}
