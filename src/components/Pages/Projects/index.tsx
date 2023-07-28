/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { useState } from "react";
import "./index.css";
import ExpressPay from "./ExpressPay";
import KM from "./KM";
import Crowdplat from "./Crowdplat";
import cplogo from "../../../assets/cplogo.svg";
import c1blogo from "../../../assets/c1blogo.svg";
import kmlaptop from "../../../assets/km-laptop.svg";
import eplaptop from "../../../assets/ep-laptop.svg";
import cplaptop from "../../../assets/cp-laptop.svg";

const Projects = (props: any) => {
  const { project, setProject } = props;

  const projects = [
    {
      projectTitle: "Knowledge Management",
      projectImg: kmlaptop,
      projectDesc:
        "Knowledge Home started as part of Universal CRM. While designing other applications and from conversations with our agents during that time I realized that the current way of accessing information left a lot to be desired. At that point of time you had to log in to a system and type out what word document you were looking for and read through the whole thing to find a small snippet of information. The layout of the information was not organized. As our system and company was growing I realized this would be a massive bottleneck for us.",
      projectIcon: c1blogo,
      projectTemplate: "1",
    },
    {
      projectTitle: "Express Pay",
      projectImg: eplaptop,
      projectDesc:
        "The goal of the project is to redesign the current Express Pay application used by Credit One Bank. The current application is outdated and requires agents to navigate through multiple applications to solve customer problems, resulting in increased call times and SLAs. The project aims to create a customer-based application that uses omni-channel and offers a 360-degree customer experience. ",
      projectIcon: c1blogo,
      projectTemplate: "2",
    },

    {
      projectTitle: "Crowdplat",
      projectImg: cplaptop,
      projectDesc:
        "Crowdplat is a crowdsourcing company that builds software applications or data science algorithms, runs crowdsourcing challenges, hires contingent or full time staff, and more. The goal of this project was to redesign the website for the company, improving its usability and visual appeal to increase user engagement and drive more business. The previous website had several usability issues that resulted in a high bounce rate and low engagement. I conducted user research to identify pain points and design opportunities, and created wireframes and prototypes to test and refine the design.",
      projectIcon: cplogo,
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
                  <div className={`e-backing-${i}`}> </div>

                  <div className={`e-main-info-${i}`}>
                    {" "}
                    <div className="e-description">
                      <div className="e-title">{e.projectTitle}</div>
                      <div>{e.projectDesc}</div>
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
