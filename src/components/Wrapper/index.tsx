import { useState } from "react";
import Header from "../Header";
import Intro from "../Pages/Intro";
import "./index.css";
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";

const Wrapper = () => {
  const [page, setPage] = useState("intro");
  const [project, setProject] = useState("none");

  return (
    <div className="parent-wrapper">
      <Header
        setPage={setPage}
        page={page}
        project={project}
        setProject={setProject}
      />
      {page === "intro" ? (
        <>
          <Intro />
        </>
      ) : page === "projects" ? (
        <>
          <Projects project={project} setProject={setProject} />
        </>
      ) : page === "about" ? (
        <>
          <AboutMe />
        </>
      ) : page === "resume" ? (
        <>
          <Resume />
        </>
      ) : page === "contact" ? (
        <>
          <Contact />
        </>
      ) : null}
    </div>
  );
};

export default Wrapper;
