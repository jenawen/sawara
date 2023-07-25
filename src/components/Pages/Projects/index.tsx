import { useState } from "react";
import "./index.css";
import ExpressPay from "./ExpressPay";
import KM from "./KM";
import Crowdplat from "./Crowdplat";
import aiq from "../../../assets/aiq.svg";
import km from "../../../assets/km.svg";
import crowdplat from "../../../assets/crowdplat.svg";

const Projects = () => {
  const [project, setProject] = useState("none");

  const projects = [
    {
      projectTitle: "Knowledge Management",
      projectImg: km,
      projectDesc: "Knowledge Management Description",
      projectIcon: "c1b",
    },
    {
      projectTitle: "Express Pay",
      projectImg: aiq,
      projectDesc: "Express Pay Description",
      projectIcon: "c1b",
    },

    {
      projectTitle: "Crowdplat",
      projectImg: crowdplat,
      projectDesc: "Crowdplat Description",
      projectIcon: "cp",
    },
  ];

  return (
    <>
      {project === "Express Pay" ? (
        <ExpressPay />
      ) : project === "Knowledge Management" ? (
        <KM />
      ) : project === "Crowdplat" ? (
        <Crowdplat />
      ) : project === "none" ? (
        <>
          <div className="projects-page-parent">
            <div className="projects-page-title">My Projects</div>
            <div className="projects-page-sections">
              {" "}
              {projects.map((e, i) => (
                <div className="each-project" key={i}>
                  <div>
                    <img
                      style={{ width: "300px", maxHeight: "210px" }}
                      src={`${e.projectImg}`}
                    />{" "}
                  </div>
                  <div> {e.projectTitle} </div>
                  <div> {e.projectDesc} </div>
                  <button
                    onClick={() => {
                      setProject(e.projectTitle);
                    }}
                  >
                    {" "}
                    view{" "}
                  </button>
                </div>
              ))}{" "}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Projects;
