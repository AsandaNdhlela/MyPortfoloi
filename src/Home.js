import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { FaBars } from "react-icons/fa";
import Logo from "./img/logo.jpeg";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <motion.div
      className="home"
      id="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="#Home">
              <img src={Logo} alt="" href="#Home" />
            </a>
          </div>
          <motion.div
            className="navigation pxy__30"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 13, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "backIn" }}
          >
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Projects">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Testimonials">
                <li className="nav__items mx__15">Testimonials</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </motion.div>

          <div className="toggle__menu">
            <FaBars onClick={() => setShow(!show)} color="white" />
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Projects">Projects</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Testimonials">Testimonials</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY PORTFOLOI</h1>
              <h2 className="home__text pz__10">
                Hello, my name is <span>Asanda</span>
              </h2>
              <h4 className="home__text pz__10">
                {" "}
                and I am{" "}
                <Typewriter
                  words={[
                    "Web Designer...",
                    "Web Developer...",
                    "and Mobile App Developer ...",
                  ]}
                  cursor={true}
                  cursorStyle={"|"}
                  cursorColor={"#ff8400"}
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  loop={Infinity}
                />
              </h4>
              <h4 className="home__text pz__10">located in South Africa.</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;
