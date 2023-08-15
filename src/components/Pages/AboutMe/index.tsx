import "./index.css";
import aboutme from "../../../assets/sawaraabt.svg";
import "../../../fonts/Merriweather-Regular.ttf";

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="about-me-pic">
        <img id={"sawara-abt"} src={aboutme} />
      </div>

      <div className="about-me-text">
        <div className="about-me-header"> About Me</div>
        <div>
          {" "}
          Hi there! I'm Sawara Bhattarai, a passionate Lead UI/UX Designer with
          a strong background in Computer Science.
        </div>
        <div>
          Currently, I lead UI/UX design at{" "}
          <span
            onClick={() => {
              window.open("https://www.creditonebank.com/", "_blank");
            }}
            className="c1bspan"
          >
            Credit One Bank
          </span>
          , driving innovation by mobilizing our workforce with new web-based
          tools. I thrive on anticipating user needs, executing the UX vision,
          and continuously evolving it over time.
        </div>

        <div>
          {" "}
          With experience in Figma, Sketch, and more, I excel in wireframing,
          rapid prototyping, and design research. Let's connect on LinkedIn to
          discuss design and technology.
        </div>

        <div> Let's create remarkable experiences together! </div>
      </div>
    </div>
  );
};

export default AboutMe;
