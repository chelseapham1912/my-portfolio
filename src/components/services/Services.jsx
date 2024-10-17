import React from "react";
import "./Services.css";
import Image1 from "../../assets/img1.JPG";
import Image2 from "../../assets/img2.JPEG";
import Image3 from "../../assets/img3.JPEG";
import Image4 from "../../assets/img4.JPG";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Vice President Student Council",
    description: "This year, I led Operations and HR, launched a school spirit project, and boosted prom attendance",
    detailPath: "/service-detail-1"
  },
  {
    id: 2,
    image: Image2,
    title: "Wisers Speak Up Competition",
    description: "First prize - the most impactful speech",
    detailPath: "/service-detail-2"
  },
  {
    id: 3,
    image: Image3,
    title: "Ted x Youth",
    description: "Guest Speaker “What If Your Dream Finds You?“",
    detailPath: "/service-detail-3"
  },
  {
    id: 4,
    image: Image4,
    title: "RAINBOW SPRING VOLUNTEER & MC",
    description: "Cleaning the beach in Ben Tre, Organizing Spring Festival for children in Ma Da",
    detailPath: "/service-detail-4"
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">My Grade 11</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description, detailPath }) => (
          <a 
            href={detailPath} // Sử dụng href để điều hướng
            className="services__card" 
            key={id} 
          >
            <img src={image} alt="" className="services__img" width="80" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
