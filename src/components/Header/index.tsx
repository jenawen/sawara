/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import sb from "../../assets/sb.svg";
import dl from "../../assets/dl.svg";
import { useEffect, useState } from "react";
import resume from "../../../public/Sawara_Bhattarai_Resume.pdf";

const Header = (props: any) => {
  const { setPage, page } = props;
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    if (page === "intro") {
      setIsIntro(true);
    } else setIsIntro(false);
  }, [page]);

  console.log(page);
  console.log(isIntro);

  return (
    <div className={`header-container`}>
      <div
        className="header-icon"
        onClick={() => {
          setPage("intro");
        }}
      >
        <img src={sb} />
      </div>
      <div className="header-links">
        <span
          onClick={() => {
            setPage("projects");
          }}
          className="link-1"
        >
          {" "}
          Projects
        </span>
        <span
          onClick={() => {
            setPage("about");
          }}
          className="link-2"
        >
          {" "}
          About Me
        </span>
        <a
          href={resume}
          download="sawara_bhattarai_resume"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontWeight: "460" }}
          className="resume-link"
        >
          {" "}
          Resume
          <img style={{ width: "20px", marginLeft: "5px" }} src={dl} />
        </a>
        <span
          onClick={() => {
            setPage("contact");
          }}
          className="link-4"
        >
          {" "}
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;
