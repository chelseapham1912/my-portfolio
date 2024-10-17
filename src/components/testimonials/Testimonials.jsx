import React from "react";
import "./Testimonials.css";
import Image3 from "../../assets/avatar-3.svg";
import Image4 from "../../assets/avatar-4.svg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image3,
      title: "Mr. Daniel Smith",
      subtitle: "ELA Teacher",
      comment:
        "Quynh Anh is an outstanding student with a genuine passion for life and learning. She demonstrates exceptional intellectual curiosity, integrity, humility, and empathy, making her well-respected by both students and staff. Her commitment to academic excellence, leadership roles, and community service highlights her as a true asset to the school.",
    },
    {
    	id: 2,
    	image: Image4,
    	title: "Ms. Ashleigh Wilson",
    	subtitle: "Curriculum Coordinator of Science Department",
    	comment: "Quynh Anh's mastery of chemistry is remarkable, demonstrating a deep understanding of chemical principles and an uncanny ability to apply them in complex problem-solving scenarios. Her leadership in the lab and her intellectual curiosity make her an exceptional candidate.	",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
