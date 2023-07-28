/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import picture from "../../../assets/My Picture.svg";
// import { useEffect, useState } from "react";
import "../../../fonts/biorhyme.ttf";
import "../../../fonts/biorhyme-bold.ttf";
import "../../../fonts/opensans.ttf";

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
      <div className="LEFT">
        <img id={"sawara-pic"} src={picture} />
      </div>

      <div className="RIGHT">
        <div>
          <div className="intro-name"> Sawara Bhattarai</div>
          <div className="intro-jobdesc">
            Product Designer | Crafting Engaging Experiences{" "}
          </div>
        </div>
        <div className="intro-blurb">
          {" "}
          A user experience designer who dabbles in design systems, CRM
          Dashboards, marketing strategy and creating engaging, immersive, and
          human-centered design solutions.
        </div>
      </div>
    </div>
  );
};

export default Intro;
