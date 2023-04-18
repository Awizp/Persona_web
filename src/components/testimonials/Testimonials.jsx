import React from 'react'
import css from "./Testimonials.module.css"
import Hero from "../../assets/hero1.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { TestimonialsData } from "../../data/testimonials"

export default function Testimonials() {
    return (
        <div className={css.testimonials_container}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Our Customer's review for You!</span>
                </div>

                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z" fill="url(#paint0_linear_231_555)" />
                    <defs>
                        <linearGradient id="paint0_linear_231_555" x1="157.5" y1="33.0763" x2="44.7421" y2="148.561" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1" /> <stop offset="1" stop-color="#FBE3EA" /> </linearGradient>
                    </defs> </svg>
                <img src={Hero} alt="hero-img" />

                <div className={css.container}>
                    <span>106k</span>
                    <span>Happy Customers</span>
                </div>
            </div>

            <h2 className={css.review_title}>Reviews</h2>

            <div className={css.carousal_container}>
                <Swiper slidesPerView={3} slidesPerGroup={1} loop={true}
                    spaceBetween={20} className={css.carousal}
                    breakpoints={{ 856: { slidesPerView: 3 }, 640: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}>
                    {
                        TestimonialsData.map((review, i) => (
                            <SwiperSlide>
                                <div className={css.testimonial}>
                                    <img src={review.image} alt="testimonial-img" />
                                    <span>{review.comment}</span>
                                    <span>{review.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}
