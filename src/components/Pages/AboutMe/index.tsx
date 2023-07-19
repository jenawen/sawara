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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eget
        turpis fames dignissim tellus dictumst ac magna. Vestibulum erat ac
        turpis pulvinar diam mattis. Vestibulum ridiculus tellus nam diam hac in
        ut. Felis elementum arcu pellentesque tincidunt in nunc, ac, sagittis,
        platea. Vel, id pulvinar magna pretium neque, justo, sapien. Libero eget
        in aliquet vel. Felis leo mauris volutpat, sit sed eget faucibus
        vitae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
        eget turpis fames dignissim tellus dictumst ac magna. Vestibulum erat ac
        turpis pulvinar diam mattis. Vestibulum ridiculus tellus nam diam hac in
        ut. Felis elementum arcu pellentesque tincidunt in nunc, ac, sagittis,
        platea. Vel, id pulvinar magna pretium neque, justo, sapien. Libero eget
      </div>
    </div>
  );
};

export default AboutMe;
