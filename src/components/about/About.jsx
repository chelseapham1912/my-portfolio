import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              My name is Pham Le Quynh Anh (Chelsea), and I have recently
              completed Grade 11 at Wellspring. Throughout my time here, my
              teachers and friends have recognized me as someone who radiates a
              positive attitude and enthusiasm in every activity. As an active
              student, I have demonstrated strong leadership and communication
              skills through lots of extracurricular activities. My commitment
              to community service is evident through my volunteer work,
              including organizing charity events and supporting educational
              initiatives. I thrive in roles that challenge me to innovate and
              lead, and I am passionate about making a positive impact in my
              community.
            </p>
            {/* <ul className="about__list">
              <li>SAT: 1530 (one take)</li>
              <li>IELTS: 8.0 (overall)</li>
              <li>MOS Certification</li>
              <li>
                Finalist at the Youth Financial Analysis Competition (YFAC)
              </li>
              <li>Finalist at the Young Innovators Challenge (YIC)</li>
              <li>
                Top 50 at the Vietnam Business Innovation Challenge (VBIC)
              </li>
              <li>40+ Medals in various academic Olympiads</li>
              <li>Academic research published in a Scopus-ranked journal</li>
            </ul> */}
            {/* <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button> */}
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
