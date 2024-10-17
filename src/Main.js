import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar"; // Import Sidebar
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

export const Main = (props) => {
  return (
    <div className="main-container"> {/* Thêm một div bao quanh để chứa Sidebar và Main */}
      <Sidebar theme={props.theme} switchTheme={props.switchTheme} /> {/* Truyền props nếu cần */}
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
      </main>
    </div>
  );
};
