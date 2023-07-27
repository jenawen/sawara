import { useState } from "react";
import "./index.css";

import aiq from "../../../assets/aiq.svg";
import km from "../../../assets/km.svg";
import crowdplat from "../../../assets/crowdplat.svg";
import cplogo from "../../../assets/cplogo.svg";
import c1blogo from "../../../assets/c1blogo.svg";
import ExpressPay from "../../Pages/Projects/ExpressPay";
import KM from "../../Pages/Projects/KM";
import Crowdplat from "../../Pages/Projects/Crowdplat";

const Projects2 = (props: any) => {
  const { setPage, page } = props;
  const [project, setProject] = useState("none");

  const projects = [
    {
      projectTitle: "Knowledge Management",
      projectImg: km,
      projectDesc:
        "A modern web application for the company’s Knowledge Base Management.",
      projectIcon: c1blogo,
    },
    {
      projectTitle: "Express Pay",
      projectImg: aiq,
      projectDesc:
        "A customer relationship management application for Customer Service Agents.",
      projectIcon: c1blogo,
    },

    {
      projectTitle: "Crowdplat",
      projectImg: crowdplat,
      projectDesc:
        "Mobile App and Responsive Web Design for a crowdsourcing company.",
      projectIcon: cplogo,
    },
  ];

  return (
    <>
      {project === "Express Pay" || page === "hi" ? (
        <ExpressPay />
      ) : project === "Knowledge Management" || page === "hi" ? (
        <KM />
      ) : project === "Crowdplat" || page === "hi" ? (
        <Crowdplat />
      ) : project === "none" ? (
        <>
          <div className="projects-page-parent">
            <div className="projects-page-title">My Projects </div>
            {/* SECTION DIV */}
            <div className="projects-page-sections">
              {projects.map((e, i) => (
                <div className={`each-project`} key={i}>
                  <div>
                    <img
                      style={{
                        height: "180px",
                        // width: "290px",
                        boxShadow: "4px 3px 8px gray",
                      }}
                      src={`${e.projectImg}`}
                    />{" "}
                  </div>

                  <div className="e-text">
                    <div className="e-projectTitle"> {e.projectTitle} </div>
                    <div className="e-projectDesc"> {e.projectDesc} </div>
                    <button
                      id={"project-btn"}
                      onClick={() => {
                        setProject(e.projectTitle);
                        setPage("hi");
                      }}
                    >
                      {" "}
                      View{" "}
                    </button>
                  </div>

                  <div className="e-icon">
                    {<img style={{ width: "55px" }} src={`${e.projectIcon}`} />}
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

export default Projects2;
