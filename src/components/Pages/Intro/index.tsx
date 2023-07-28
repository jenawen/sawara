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
          <div className="intro-jobdesc">— UI/UX Designer </div>
        </div>
        <div className="intro-blurb">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eget
          turpis fames dignissim tellus dictumst ac magna. Vestibulum erat ac
          turpis pulvinar diam mattis. Vestibulum ridiculus tellus nam diam hac
          in ut. Felis elementum arcu pellentesque tincidunt in nunc, ac,
          sagittis, platea.{" "}
        </div>
      </div>
    </div>
  );
};

export default Intro;
