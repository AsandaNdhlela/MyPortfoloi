import React from "react";
import "./Service.css";
import { FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { motion } from "framer-motion";

function Service() {
  return (
    <motion.div
      className="service component__space"
      id="Services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="heading">
        <h1 className="heading">My Awesome Service</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <motion.div
            className="col__3"
            initial={{ x: -600, opacity: 0 }}
            animate={{ x: 0, opacity: 1, type: "tween" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="service__box pointer">
              <div className="icon">
                <FaPaintBrush />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Web Desginer</h1>
                <p className="p service__text p__color">
                  I want to make beautiful things, even if
                </p>
                <p className="p service__text p__color">
                  nobody cares, as opposed to ugly things.
                </p>
                <p className="p service__text p__color">Thats my Intent.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col__3"
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1, type: "tween" }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <div className="service__box pointer">
              <div className="icon">
                <FaLaptopCode />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Full-stack Developer</h1>
                <p className="p service__text p__color">
                  Measuring programming progree by lines
                </p>
                <p className="p service__text p__color">
                  of code is like measuring aircraft building
                </p>
                <p className="p service__text p__color">progree by weight.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col__3"
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1, type: "tween" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="service__box pointer">
              <div className="icon">
                <BsPhone />
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  Delivering digital transformation with
                </p>
                <p className="p service__text p__color">
                  mobile apps that enable to do bussiness
                </p>
                <p className="p service__text p__color">anytime, anywhere.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Service;
