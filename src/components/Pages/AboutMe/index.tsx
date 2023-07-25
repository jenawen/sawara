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
          Hi there! I'm Sawara Bhattarai, a passionate Lead UI/UX Designer with
          a strong background in Computer Science. Currently, I lead UI/UX
          design at Credit One Bank, driving innovation by mobilizing our
          workforce with new web-based tools. I thrive on anticipating user
          needs, executing the UX vision, and continuously evolving it over
          time.
        </p>
        <p>
          {" "}
          With experience in Figma, Sketch, and more, I excel in wireframing,
          rapid prototyping, and design research. Let's connect on LinkedIn to
          discuss design and technology. Reach me at bhattaraisawara2@gmail.com
          or (626) 321-7662.
        </p>

        <p> Let's create remarkable experiences together! </p>
      </div>
    </div>
  );
};

export default AboutMe;
