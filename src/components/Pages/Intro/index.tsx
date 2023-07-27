/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import landing from "../../../assets/landing.svg";
import { useEffect, useState } from "react";
import "../../../fonts/biorhyme.ttf";
import "../../../fonts/biorhyme-bold.ttf";
import "../../../fonts/opensans.ttf";

const Intro = () => {
  const fading = 1750;
  const changeInterval = fading * 2;
  type FadeProps = { fade: "fade-in" | "fade-out" };
  const [fade, setFade] = useState<FadeProps>({ fade: "fade-in" });
  const [order, setOrder] = useState(0);
  const introWords = [
    "Design.",
    "Research.",
    "Wireframe.",
    "Prototype.",
    "Test.",
  ];

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fade.fade === "fade-in"
        ? setFade({ fade: "fade-out" })
        : setFade({ fade: "fade-in" });
    }, fading);

    return () => clearInterval(fadeTimeout);
  }, [fade]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setOrder((prev) => (prev + 1) % introWords.length);
    }, changeInterval);
    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div className="intro-page">
      <div className="intro-text">
        <div>Hi, I am Sawara.</div>
        <div>
          I{" "}
          <span className={`${fade.fade}-${order}`}> {introWords[order]}</span>
        </div>
      </div>
      <div className="intro-pic">
        {" "}
        <img id={"sawara-intro"} src={landing} />
      </div>
    </div>
  );
};

export default Intro;
