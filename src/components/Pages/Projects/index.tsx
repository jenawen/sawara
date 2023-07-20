import { useState } from "react";
import "./index.css";
import ExpressPay from "./ExpressPay";
import KM from "./KM";
import Crowdplat from "./Crowdplat";
const Projects = () => {
  const [project, setProject] = useState("none");

  const projects = [
    {
      projectTitle: "Express Pay",
      projectImg: "ep",
      projectDesc: "Express Pay Description",
      projectIcon: "c1b",
    },
    {
      projectTitle: "Knowledge Management",
      projectImg: "km",
      projectDesc: "Knowledge Management Description",
      projectIcon: "c1b",
    },
    {
      projectTitle: "Crowdplat",
      projectImg: "crowdplat",
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
        <div className="projects-page">
          <div className="projects-sections">
            {" "}
            {projects.map((e, i) => (
              <div className="project" key={i}>
                <div> {e.projectTitle} </div>
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
      ) : null}
    </>
  );
};

export default Projects;
