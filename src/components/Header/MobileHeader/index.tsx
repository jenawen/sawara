/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect } from "react";
import "./index.css";
import resume from "../../../../public/Sawara_Bhattarai_Resume.pdf";
import logo from "../../../assets/sblogo.svg";

interface IMobileHeader {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  setProject: React.Dispatch<React.SetStateAction<string>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const MobileHeader = (props: IMobileHeader) => {
  const [isOpen, setIsOpen] = useState(true);
  const { setPage, setProject, setCurrent } = props;

  const navToggle = document.querySelector(".nav-toggle");
  const bars = document.querySelectorAll(".bar");

  console.log(bars);

  const toggleMenu = () => {
    bars.forEach((bar) => bar.classList.toggle("x"));
  };

  const toggle = () => {
    if (isOpen) {
      setIsOpen(false);
      if (navToggle) {
        navToggle.addEventListener("click", toggleMenu);
      }
    }
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const toggleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
      if (navToggle) {
        navToggle.addEventListener("click", toggleMenu);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll);
    return () => {
      window.removeEventListener("scroll", toggleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className={`mobile-header-${isOpen}`}>
        <img
          src={logo}
          id="mobile-logo"
          onClick={() => {
            setPage("projects");
            setProject("none");
            setCurrent(1);
            setIsOpen(false);
          }}
        />
        <div
          onClick={() => {
            toggle();
          }}
          className={`nav-toggle-${isOpen}`}
        >
          <div className={`bar-1-${isOpen}`}></div>
          <div className={`bar-2-${isOpen}`}></div>
          <div className={`bar-3-${isOpen}`}></div>
        </div>
      </div>

      {isOpen ? (
        <div className="mmenu-container">
          <div className="pageList">
            <span
              onClick={() => {
                setPage("projects");
                setProject("none");
                setCurrent(2);
                setIsOpen(false);
              }}
            >
              {" "}
              Projects
            </span>
            <span
              onClick={() => {
                setPage("about");
                setProject("none");
                setIsOpen(false);
                setCurrent(3);
              }}
            >
              {" "}
              About Me
            </span>
            <span
              onClick={() => {
                setPage("contact");
                setProject("none");
                setIsOpen(false);
                setCurrent(4);
              }}
            >
              {" "}
              Contact
            </span>
            <a
              href={resume}
              download="sawara_bhattarai_resume"
              target="_blank"
              rel="noreferrer"
              className="resume"
            >
              {" "}
              Resume
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileHeader;
