import React from "react";
import "./Testimonials.css";
import image1 from "../src/img/IMG_3977.JPG";
import image2 from "../src/img/IMG_3975.JPG";
import { TbUserCheck } from "react-icons/tb";
import CountUp from "react-countup";

function Testimonials() {
  return (
    <div className="testimonials component__space" id="Testimonials">
      <div className="heading">
        <h1 className="heading">My Testimonials</h1>
        <p className="heading p__color">
          Some of my Best Collouges, who knows me from the beignning of my
          jorney and helped me acquire
        </p>
        <p className="heading p__color">
          more knowledge and skills, plus completing{" "}
          <CountUp duration="5" start={1} end={100} />{" "} projects.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={image1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="testimonials__meta absolute">
                <h4 className="project__text">Asanda T Ndhlela</h4>
                <h4 className="project__text">
                  <q>
                    Team player, a good listerner and takes good consirderation
                    in each detail and produce best in what he's given
                  </q>
                </h4>
                <a href="#blank" className="testimonials icon">
                  <TbUserCheck />
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={image2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="testimonials__meta absolute">
                <h4 className="project__text">Asanda T Ndhlela</h4>
                <h4 className="project__text">
                  <q>
                    He's driven by Big things only. Big Goals, Big Dreams, Big
                    Ambition but also takes concern in every detail which is one
                    of his best traits
                  </q>
                </h4>
                <a href="#blank" className="testimonials icon">
                  <TbUserCheck />
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={image1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="testimonials__meta absolute">
                <h4 className="project__text">Asanda T Ndhlela</h4>
                <h4 className="project__text ">
                  <q>
                    Asanda is a very passionated person, he loves constintency.
                    I definectly love that guy and I could work with him at any
                    time given.
                  </q>
                </h4>
                <a href="#blank" className="testimonials icon">
                  <TbUserCheck />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
