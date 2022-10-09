import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";
import image1 from "../src/img/IMG_3977-removebg-preview.png";

function Contact() {
  const [state, handleSubmit] = useForm("moqbjgrg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Let's work !</h1>
              <p className="hire__text white">
                I am also available for freelance work. Connect with me via
                phone:
              </p>
              <p className="hire__text white">
                <strong> (+27) 81 096 2945</strong> or email{" "}
                <strong>asandatndhlela18@gmail.com</strong>
              </p>
            </div>

            <form onSubmit={handleSubmit} action="https://formspree.io/f/moqbjgrg">
              <div className="input__box">
                <input

                  type="text"
                  className="contact"
                  placeholder="Your name *"
                  required=""
                />
                <input
                  id="email"
                  type="email"
                  className="contact"
                  placeholder="Your Email *"
                  required=""
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="text"
                  className="contact"
                  placeholder="Write a Subject"
                  required=""
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                  required=""
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button className="btn contact pointer" type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col__2">
          <img src={image1} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
