import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';
import { FaAward,FaGraduationCap,FaMedal   } from 'react-icons/fa';
import { MdLeaderboard } from "react-icons/md";
const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <FaAward className='about__icon' />

                <div>
                    <h3 className="about__title">8.0</h3>
                    <span className="about__subtitle">IELTS (overall)</span>
                </div>
            </div>

            <div className="about__box">
                <FaGraduationCap className='about__icon' />

                <div>
                    <h3 className="about__title">1530</h3>
                    <span className="about__subtitle">SAT (one take)</span>
                </div>
            </div>

            <div className="about__box">
                <FaMedal className='about__icon' />

                <div>
                    <h3 className="about__title">40+</h3>
                    <span className="about__subtitle">Olympiads</span>
                </div>
            </div>

            <div className="about__box">
                <MdLeaderboard className='about__icon' />

                <div>
                    <h3 className="about__title">Top 50</h3>
                    <span className="about__subtitle">VBIC</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox