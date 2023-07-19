import "./index.css";
const Projects = () => {
  const projects = [
    {
      projectTitle: "Access IQ",
      projectImg: "accessiq",
      projectDesc: "Access IQ Description",
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
    <div className="projects-page">
      <div className="projects-sections">
        {" "}
        {projects.map((e) => (
          <div>
            <div> {e.projectTitle} </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Projects;
