import React from "react";
import "./Blog.css";
import { FaFacebook } from "react-icons/fa";
import Image1 from "../../assets/blog-1.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span
                className="blog__category"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaFacebook style={{ marginRight: "8px" }} />
                Facebook
              </span>
            </a>
            <a href="https://www.facebook.com/photo?fbid=920844466727954&set=a.447131754099230">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">NSDS</h3>
            <div className="blog__meta">
              <span>23rd August, 2024</span>
              <span className="blog__dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
