/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useState } from "react";
import "./index.css";
import ExpressPay from "./ExpressPay";
import KM from "./KM";
import Crowdplat from "./Crowdplat";

import kmlaptop from "../../../assets/kmnobg.svg";
import eplaptop from "../../../assets/epnobg.svg";
import cplaptop from "../../../assets/cpnobg.svg";
import "../../../fonts/Merriweather-Regular.ttf";

const Projects = (props: any) => {
  const { project, setProject } = props;

  const projects = [
    {
      projectTitle: "Knowledge Management",
      projectImg: kmlaptop,
      projectDesc:
        "Designed a responsive web application for Credit One Bank's customer service department. Agents can access files and collaborate effectively, ensuring exceptional customer support.",

      projectTemplate: "1",
    },
    {
      projectTitle: "Express Pay",
      projectImg: eplaptop,
      projectDesc:
        "Web Application for Credit One Bank's Express Pay, replacing the outdated system with a customer-centric, omni-channel platform. The result: faster issue resolution, shorter call times, and an enhanced 360-degree customer experience.",

      projectTemplate: "2",
    },

    {
      projectTitle: "Crowdplat",
      projectImg: cplaptop,
      projectDesc:
        "Redesigned Crowdplat's website to enhance user engagement. Addressed usability issues through user research, wireframes, and prototypes.",

      projectTemplate: "1",
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
            {/* SECTION DIV */}
            <div className="projects-page-sections">
              {projects.map((e, i) => (
                <div className={`each-project`} key={i}>
                  <div className={`e-main-info`}>
                    <div className="e-description">
                      <div className="e-title">{e.projectTitle}</div>
                      <div style={{ fontFamily: "Merriweather" }}>
                        {e.projectDesc}
                      </div>
                      <button
                        onClick={() => {
                          setProject(e.projectTitle);
                        }}
                        id={"project-button"}
                      >
                        View Details
                      </button>
                    </div>{" "}
                    <div className="e-photo">
                      {" "}
                      {<img id={"proj-photo"} src={`${e.projectImg}`} />}{" "}
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
            {/* end */}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Projects;
