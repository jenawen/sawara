/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "./index.css";
import logo from "../../assets/logo.svg";

const Header = (props: any) => {
  const { setPage } = props;
  return (
    <div className="header-container">
      <div
        className="header-icon"
        onClick={() => {
          setPage("intro");
        }}
      >
        <img src={logo} />
      </div>
      <div className="header-links">
        <span
          onClick={() => {
            setPage("projects");
          }}
        >
          {" "}
          Projects
        </span>
        <span
          onClick={() => {
            setPage("about");
          }}
        >
          {" "}
          About Me
        </span>
        <span
          onClick={() => {
            setPage("resume");
          }}
        >
          {" "}
          Resume
        </span>
        <span
          onClick={() => {
            setPage("contact");
          }}
        >
          {" "}
          Contact
        </span>
      </div>
    </div>
  );
};

export default Header;
