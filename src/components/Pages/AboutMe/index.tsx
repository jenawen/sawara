import "./index.css";
import aboutme from "../../../assets/aboutme.svg";
const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="about-me-pic">
        <img src={aboutme} />
      </div>

      <div className="about-me-text">
        <div className="about-me-header"> About Me</div>
        <p>
          {" "}
          Hi there! I'm Sawara Bhattarai, a passionate{" "}
          <span style={{ color: "#b369ee" }}>Lead UI/UX Designer </span>with a
          strong background in Computer Science. Currently, I lead UI/UX design
          at{" "}
          <span
            onClick={() => {
              window.open("https://www.creditonebank.com/", "_blank");
            }}
            style={{ color: "#b369ee" }}
          >
            Credit One Bank
          </span>
          , driving innovation by mobilizing our workforce with new web-based
          tools. I thrive on anticipating user needs, executing the UX vision,
          and continuously evolving it over time.
        </p>
        <p>
          {" "}
          With experience in Figma, Sketch, and more, I excel in{" "}
          <span style={{ color: "#b369ee" }}>
            wireframing, rapid prototyping, and design research.
          </span>{" "}
          Let's connect on LinkedIn to discuss design and technology.
        </p>

        <p>
          Reach me at
          <span style={{ color: "#b369ee" }}>
            {" "}
            bhattaraisawara2@gmail.com
          </span>{" "}
          or <span style={{ color: "#b369ee" }}>(626) 321-7662.</span>
        </p>

        <p> Let's create remarkable experiences together! </p>
      </div>
    </div>
  );
};

export default AboutMe;
