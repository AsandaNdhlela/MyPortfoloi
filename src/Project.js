import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Project = ({ item }) => {
  return (
    <motion.div
      className="project component__space"
      id="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="heading">
        <h1 className="heading">My Projects </h1>
        <p className="heading p__color">
          A little summary of my jorney in learning web development
        </p>
        <p className="heading p__color">skills and put into reality .</p>
      </div>
      <div>
        {item.map((Val, i) => {
          return (
            <motion.div
              className="project__card"
              initial={{
                opacity: 0,
                translateX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project__box pointer relative ">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    <img src={Val.img} alt="" className="project__img" />
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">{Val.title}</h5>
                  <h4 className="project__text">{Val.paragraph}</h4>
                  <a href={Val.source} className="project__btn">
                    {Val.button}
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Project;
