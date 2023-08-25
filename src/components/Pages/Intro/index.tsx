/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import sawara from "../../../assets/sawaraintro.svg";

const Intro = () => {
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
