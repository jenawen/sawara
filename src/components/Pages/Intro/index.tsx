/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import sawara from "../../../assets/sawaraintro.svg";
// import { useEffect, useState } from "react";

const Intro = () => {
  //   const fading = 1750;
  //   const changeInterval = fading * 2;
  //   type FadeProps = { fade: "fade-in" | "fade-out" };
  //   const [fade, setFade] = useState<FadeProps>({ fade: "fade-in" });
  //   const [order, setOrder] = useState(0);
  //   const introWords = [
  //     "Design.",
  //     "Research.",
  //     "Wireframe.",
  //     "Prototype.",
  //     "Test.",
  //   ];

  return (
    <div className="intro-page">
      <div className="intro-text">
        <div className="i-name">Sawara Bhattarai</div>
        <div className="i-title">
          Product Designer | Crafting Engaging Experiences
        </div>
        <div className="i-desc">
          {" "}
          a user experience designer who dabbles in design systems, CRM
          Dashboards, marketing strategy and creating engaging, immersive, and
          human-centered design solutions.
        </div>
      </div>
      <div className="i-picture">
        <img src={sawara} id="sawara" />
      </div>
    </div>
  );
};

export default Intro;
