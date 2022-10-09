import React, { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import { AiOutlineArrowUp } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";
import AboutImg from "./img/IMG_3978.JPG";

const About = ({ items }) => {
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  const [showSport, setShowSport] = useState(false);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <motion.div
      className="about component__space"
      id="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, ease: "fadeIn" }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={AboutImg} alt="" className="about__img" />
          </div>

          <div className="col__2">
            <div className="about-And-skills_heading">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <h1 className="about__heading col__5">About Me</h1>
              </button>
              <span className="back-slash sweet pz__10 col__5">/</span>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <h1 className="about__heading col__5">Skills </h1>
              </button>
              <span className="back-slash sweet pz__10 col__5">/</span>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                <h1 className="about__heading col__5">Personal</h1>
              </button>
            </div>

            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="about__meta col__1">
                <p className="about__text p__color">
                  I love consintency, something that always keeps me on my feet,
                  working, learning and being focused. I am self-determined
                  Developer, very passionated person and once my interest are
                  triggered I go in fully. I performe and grow well in a
                  positive and well-sustained environment. My high peak of
                  learning happens when working with a group of people who share
                  the same frequency of mindset as mine since I am an aspiring
                  Fullstack Developer.
                </p>
                <p className="about__text p__color">
                  My programming insparation comes from my Brother who's a
                  Fullstack Developer. Well programming is not something or
                  career that is familirized from where I'm from so him becoming
                  a programmer and watching him work made me wonder what was he
                  always writting. The lines of code where like a foreign
                  Language for me which built curousity in learning it. The
                  effort and energy put in and the final results are all
                  matching standards.
                </p>
                <p className="about__text p__color"></p>
                <div className="about__button d__flex align__items__center">
                  <a href="#blank">
                    <button
                      onClick={() => setShowSport(!showSport)}
                      className="about btn pointer"
                    >
                      Sports ?
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="row">
                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <FaHtml5 />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">HTML 5</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "57%" }}
                        >
                          Intermidiate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <FaCss3Alt />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">CSS 3</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "60%" }}
                        >
                          Intermidiate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <TbBrandJavascript />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">JavaScript</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "43%" }}
                        >
                          Basics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <FaReact />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">React JS</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "67%" }}
                        >
                          Basics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <FaNodeJs />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">Node JS</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "37%" }}
                        >
                          Basics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col__1">
                  <div className="about__box pointer">
                    <div className="icon">
                      <SiMongodb />
                    </div>
                    <div className="about__meta">
                      <h1 className="about__text">MongoDB</h1>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ background: "#ff8400", width: "31%" }}
                        >
                          Basics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              {" "}
              <div className="about__meta col__1 row">
                <motion.div
                  className="col__1 "
                  initial={{ x: 600, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, type: "tween" }}
                  transition={{ delay: 0.2, duration: 1 }}
                >
                  <div className="service__box pointer">
                    <div className="service__meta">
                      <h1 className="service__text">Personal Details</h1>
                      <p className="p service__text p__color">
                        <h1>Fullname</h1>: Asanda Thabiso Ndhlela
                      </p>
                      <p className="p service__text p__color">
                        <h1>Gender</h1>: Male
                      </p>
                      <p className="p service__text p__color">
                        <h1>Date of Birth</h1>: 2003 Dec 17
                      </p>
                      <p className="p service__text p__color">
                        <h1>Nationality</h1>: South African
                      </p>
                      <p className="p service__text p__color">
                        <h1> Matric</h1>: 2021 at Amadlelo Aluhlaza Secondary
                        School
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="col__1"
                  initial={{ x: 600, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, type: "tween" }}
                  transition={{ delay: 0.2, duration: 1 }}
                >
                  <div className="service__box pointer">
                    <div className="service__meta">
                      <h1 className="service__text">Address</h1>
                      <p className="p service__text p__color">
                        <h1>Belhar 23</h1>, Cape Town
                      </p>
                      <p className="p service__text p__color">
                        <h1>Willing to relocate ? Yes</h1>: Johannesburg,
                        Pretoria
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {showSport ? (
          <div className="row">
            {items.map((Value) => {
              return (
                <div className="col__4">
                  <div className="service__box pointer">
                    <div className="icon">{Value.icon}</div>
                    <div className="about__meta">
                      <h1 className="about__text">{Value.Heading}</h1>
                      <p className="p-about__text p__color">{Value.p1}</p>
                      <p className="p-about__text p__color">{Value.p2}</p>
                      <p className="p-about__text p__color">{Value.p3}</p>
                      <p className="p-about__text p__color">{Value.p4}</p>
                      <p className="p-about__text p__color">{Value.p5}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
          <AiOutlineArrowUp />
        </a>
      </div>
    </motion.div>
  );
};

export default About;
