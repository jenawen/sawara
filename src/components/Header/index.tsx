/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import sb from "../../assets/sb.svg";
import dl from "../../assets/dl-blk.svg";
import { useEffect, useState } from "react";
import resume from "../../../public/Sawara_Bhattarai_Resume.pdf";

const Header = (props: any) => {
  const { setPage, page, setProject, setCurrent } = props;
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
          setProject("none");

          setCurrent(1);
        }}
      >
        <img src={sb} />
      </div>
      <div className="header-links">
        <span
          onClick={() => {
            setPage("projects");
            setProject("none");
            setCurrent(2);
          }}
          className="link-1"
        >
          {" "}
          Projects
        </span>
        <span
          onClick={() => {
            setPage("about");
            setProject("none");

            setCurrent(3);
          }}
          className="link-2"
        >
          {" "}
          About Me
        </span>
        <span
          onClick={() => {
            setPage("contact");
            setProject("none");

            setCurrent(4);
          }}
          className="link-4"
        >
          {" "}
          Contact
        </span>
        <a
          href={resume}
          download="sawara_bhattarai_resume"
          target="_blank"
          rel="noreferrer"
          className="resume-link"
        >
          {" "}
          Resume
          <img
            style={{
              width: "20px",
              marginLeft: "5px",
            }}
            src={dl}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
