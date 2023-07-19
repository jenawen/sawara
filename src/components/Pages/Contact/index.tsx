/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";

import envsides from "../../../assets/envsides.svg";
import envfront from "../../../assets/envfront.svg";
import envfold from "../../../assets/envfold.svg";
import frontpng from "../../../assets/frontpng.png";
import sidespng from "../../../assets/sidespng.png";

import { useState } from "react";
//!NEED MEDIA QUERIES FOR LARGER SCREENS
const Contact = () => {
  const form_ep =
    " https://public.herotofu.com/v1/00856650-266c-11ee-8058-515da3888232";

  const [submitted, setSubmitted] = useState(false);
  // const [activeImg, setActiveImg] = useState(envopen);
  const [sent, setIsSent] = useState("Send!");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(form_ep, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }
        setIsSent("Message received!");

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
        console.warn(err);
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-side">
        <div className="contact-inner-side">
          <div className="contact-text">
            <span className="contact-header">Contact</span>
            <p>Phone : 626-321-7662</p>
            <p>Email: bhattaraisawar15@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="contact-envelope">
        contact envelope
        <div className="env-fold">
          {" "}
          <img src={envfold} />{" "}
        </div>
        <div className="env-form">
          <form action={form_ep} onSubmit={handleSubmit} method="POST">
            <div className="inputs">
              Name
              <input type="text" placeholder="Your name" name="name" required />
              Email
              <input type="email" placeholder="Email" name="email" />
              Subject
              <input type="text" placeholder="Subject" name="subject" />
              Message
              <textarea placeholder="Your message" name="message" required />
              <button type="submit" className="send">
                Send
              </button>{" "}
            </div>
          </form>
        </div>
        <div className="env-sides">
          {" "}
          <img src={sidespng} />{" "}
        </div>
        <div className="env-front">
          {" "}
          <img src={frontpng} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
