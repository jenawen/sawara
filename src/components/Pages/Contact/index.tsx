/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import envsides from "../../../assets/envsides.svg";
import envfront from "../../../assets/envfront.svg";
import envfold from "../../../assets/envfold.svg";
import envClosed from "../../../assets/closeEnv.svg";
import envSeal from "../../../assets/closeEnvSeal.svg";
import { useEffect, useState } from "react";

//!NEED MEDIA QUERIES FOR LARGER SCREENS
const Contact = () => {
  const [envFrame, setEnvFrame] = useState("0");
  const [submitted, setSubmitted] = useState(false);
  const [moveFrame, setMoveFrame] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState("none");

  const [sent, setSent] = useState("");

  const form_ep =
    " https://public.herotofu.com/v1/00856650-266c-11ee-8058-515da3888232";

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
        setEnvFrame("1");
        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
        console.warn(err);
      });
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setEnvFrame("2");
        setMoveFrame(true);
      }, 1000);
    }
  }, [submitted]);

  useEffect(() => {
    if (moveFrame) {
      setTimeout(() => {
        setEnvFrame("3");
        setShowEnvelope("no seal");
      }, 1000);
    }
  }, [moveFrame]);

  useEffect(() => {
    if (showEnvelope === "no seal") {
      setTimeout(() => {
        setShowEnvelope("with seal");
        setSent("Sent!");
      }, 1000);
    }
  }, [showEnvelope]);

  useEffect(() => {
    if (showEnvelope === "with seal") {
      setTimeout(() => {
        setShowEnvelope("none");
        setEnvFrame("0");
        setSent("");
        setMoveFrame(false);
      }, 8000);
    }
  }, [showEnvelope]);

  return (
    <>
      <div className="contact-page">
        <div className="contact-side">
          <div className="contact-inner-side">
            <div className="contact-text">
              <div>
                {" "}
                <span className="contact-header">Contact</span>
                <p>Phone : 626-321-7662</p>
                <div>Email: bhattaraisawar15@gmail.com</div>
              </div>
              <div>© 2022 by Sawara Bhattarai </div>
            </div>
          </div>
        </div>
        <div className="contact-envelope">
          {sent ? <div className="contact-sent">{sent}</div> : null}
          {showEnvelope === "none" ? (
            <>
              {" "}
              <div className="env-fold">
                {" "}
                <img src={envfold} />{" "}
              </div>
              <div className={`env-form-${envFrame}`}>
                <form action={form_ep} onSubmit={handleSubmit} method="POST">
                  <div className="inputs">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      required
                    />
                    Email
                    <input type="email" placeholder="Email" name="email" />
                    Subject
                    <input type="text" placeholder="Subject" name="subject" />
                    Message
                    <textarea
                      placeholder="Your message"
                      name="message"
                      required
                    />
                  </div>
                  <button type="submit" className="send">
                    Send
                  </button>
                </form>
              </div>
              <div className="env-sides">
                <img src={envsides} />
              </div>
              <div className="env-front">
                {" "}
                <img src={envfront} />{" "}
              </div>
            </>
          ) : showEnvelope === "no seal" ? (
            <>
              <img src={envClosed} />
            </>
          ) : showEnvelope === "with seal" ? (
            <img src={envSeal} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Contact;
