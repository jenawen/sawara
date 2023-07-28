import { useEffect, useState } from "react";
import Header from "../Header";
import Intro from "../Pages/Intro";
import "./index.css";
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
// import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";
import ExpressPay from "../Pages/Projects/ExpressPay";
import KM from "../Pages/Projects/KM";
import Crowdplat from "../Pages/Projects/Crowdplat";

const Wrapper = () => {
  const [page, setPage] = useState("intro");
  const [project, setProject] = useState("none");
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (current === 6) {
      setCurrent(1);
    }
    if (document) {
      document
        .querySelector(`#slide-${current > 6 ? 1 : current}`)!
        .scrollIntoView({ behavior: "smooth" });
    }
  }, [current]);

  return (
    <div className="parent-wrapper">
      <Header
        setPage={setPage}
        page={page}
        project={project}
        setProject={setProject}
        setCurrent={setCurrent}
      />

      {project === "Express Pay" ? (
        <ExpressPay />
      ) : project === "Knowledge Management" ? (
        <KM />
      ) : project === "Crowdplat" ? (
        <Crowdplat />
      ) : project === "none" ? (
        <>
          <div id="slide-1">
            <Intro />
          </div>

          <div id="slide-2">
            <Projects project={project} setProject={setProject} />
          </div>

          <div id="slide-3">
            <AboutMe />
          </div>

          <div id="slide-4">
            <Contact />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Wrapper;
