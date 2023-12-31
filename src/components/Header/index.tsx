/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import sb from "../../assets/sblogo.svg";

import { useEffect, useState } from "react";
import resume from "../../../public/Sawara_Bhattarai_Resume.pdf";

interface IHeader {
  setPage: React.Dispatch<React.SetStateAction<string>>;
  page: string;
  setProject: React.Dispatch<React.SetStateAction<string>>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Header = (props: IHeader) => {
  const { setPage, page, setProject, setCurrent } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setIsIntro] = useState(true);

  useEffect(() => {
    if (page === "intro") {
      setIsIntro(true);
    } else setIsIntro(false);
  }, [page]);

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
        </a>
      </div>
    </div>
  );
};

export default Header;
