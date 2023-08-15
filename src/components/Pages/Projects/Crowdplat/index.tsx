/* eslint-disable no-irregular-whitespace */
import cp1 from "../../../../assets/CP/cp1.svg";
import cp2 from "../../../../assets/CP/cp2.svg";
import cp3 from "../../../../assets/CP/cp3.svg";
import cp4 from "../../../../assets/CP/cp4.svg";
import cp5 from "../../../../assets/CP/cp5.svg";
import cp6 from "../../../../assets/CP/cp6.svg";
import cp7 from "../../../../assets/CP/cp7.svg";
import cp8 from "../../../../assets/CP/cp8.svg";
import cp9 from "../../../../assets/CP/cp9.svg";
import cp10 from "../../../../assets/CP/cp10.svg";
import { useEffect } from "react";

const Crowdplat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="project-header">Crowdplat</div>
      <div className="project-desc">
        Mobile App And Responsive Web Design for a crowdsourcing company
      </div>
      <div className="project-page">
        <div className="my-contributions">
          <div className="mc-left">
            <div className="section-header">My Contributions</div>
            <span className="mc-header">Role</span>
            <p>
              Sole Designer creating scalable designs for web and mobile. 
              Created new assets, marketing banners, videos.
            </p>
            <span className="mc-header">Project Type</span>
            <p>Web and Mobile </p>
            <span className="mc-header">Project Duration</span>
            <p>April - August 2021</p>
            <span className="mc-header">Design Tool</span>
            <p>Figma</p>
          </div>
          <div className="mc-right">
            <div className="mc-right-text">
              <div className="section-header">Crowdplat</div>
              <p>
                Crowdplat is a crowdsourcing company that builds software
                applications or data science algorithms, runs crowdsourcing
                challenges, hires contingent or full time staff, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="overview">
          {" "}
          <div className="section-header">Overview</div>
          <p>
            The goal of this project was to redesign the website for the
            company, improving its usability and visual appeal to increase user
            engagement and drive more business. The previous website had several
            usability issues that resulted in a high bounce rate and low
            engagement. I conducted user research to identify pain points and
            design opportunities, and created wireframes and prototypes to test
            and refine the design.
          </p>
        </div>

        <div className="issue">
          <div className="section-header">Identifying the Issue</div>
          <p>
            One of the very obvious issues of the CrowdPlat website that stood
            out to me immediately was how it  served as a point of entry for
            both the set of users - companies looking to hire talent as well as
            for freelancers who might be looking to get connected to the
            numerous opportunities available via the clients. 
          </p>
          <p>
            To identify other issues with the website I did some user testing
            and carried out Heuristic Analysis of the site. Through this I was
            able to pinpoint three major issues that needed to be paid most
            attention to inorder to improve the site - 
          </p>
          <ul>
            <li>
              The layout and the structure of the site was very dated. It also
              had some accessibility issues. 
            </li>
            <li>
              The flow of information was confusing and navigation was an issue.
            </li>
            <li>
              The text was cluttered and needed to be grouped and separated
              better to ensure a smooth and easier intake of information.
            </li>
          </ul>
        </div>

        <div className="research">
          {" "}
          <div className="section-header">Research</div>
          <p>
            Since we had some similarities with existing websites like Fiverr
            and Upwork, I carried out a SWOT Analysis of both these sites. {" "}
          </p>
          <p style={{ fontWeight: "700" }}>Strengths:</p>
          <ul>
            <li>
              Large, diverse pool of freelancers offering a wide range of
              services
            </li>
            <li>Well-established and recognizable brand</li>
            <li>
              Strong reputation for providing high-quality services at a
              reasonable price
            </li>
            <li>
              Advanced search and filter options for finding the right
              freelancer for a job
            </li>
          </ul>
          <p style={{ fontWeight: "700" }}>Weaknesses:</p>
          <ul>
            <li>
              Limited control over the quality of services provided by
              freelancers
            </li>
            <li>Dependence on a third-party payment system</li>
            <li>
              Limited ability to build long-term relationships with clients
            </li>
            <li>
              Dependence on online marketplaces and search engine rankings
            </li>
            <li>High fees for freelancers and clients</li>
          </ul>
          <p style={{ fontWeight: "700" }}>Opportunities:</p>
          <ul>
            <li>Expansion into new markets and industries</li>
            <li>
              Development of new tools and features to improve the user
              experience
            </li>
            <li>
              Building relationships with businesses and organizations to become
              a preferred provider of freelance services
            </li>
            <li>Offering new and innovative services</li>
            <li>
              Increasing sales and marketing efforts to increase awareness
            </li>
          </ul>
          <p style={{ fontWeight: "700" }}>Threats:</p>
          <ul>
            <li>
              Intense competition from other online marketplaces and freelance
              platforms
            </li>
            <li>
              Changes in technology or consumer preferences that make the
              platform less relevant
            </li>
            <li>
              Economic downturns that reduce demand for freelance services
            </li>
            <li>
              Government regulations that limit the ability of freelancers to
              work
            </li>
            <li>Security concerns and data breaches</li>
          </ul>
        </div>

        <div className="design-process">
          <div className="section-header">Solution</div>
          <ul>
            <li>
              Have a clear distinction between the flow for freelancers looking
              for work and the companies that are posting projects that they
              need to hire freelancers for.  
            </li>
            <li>
              Have different themes and color palette for each while maintaining
              a consistent layout.
            </li>
          </ul>
          <img style={{ display: "block", margin: "auto" }} src={cp1} />
          <img style={{ display: "block", margin: "auto" }} src={cp2} />
          <ul>
            <li>
              Move away from having just a landing page and have information
              stored in different groups which would create a better flow
              throughout the site.
            </li>
          </ul>

          <img style={{ display: "block", margin: "auto" }} src={cp3} />
          <img style={{ display: "block", margin: "auto" }} src={cp4} />

          <ul>
            <li>Layout for Desktop View</li>
          </ul>
          <img src={cp5} style={{ display: "block", margin: "auto" }} />

          <ul>
            <li>Layout for Mobile View</li>
          </ul>
        </div>

        <div className="result">
          {" "}
          <div className="section-header"> Final Result</div>
          <p>
            The final result was a website that effectively communicated the
            company's value proposition, and made it easy for users to navigate
            and engage with the content. The client was very satisfied with the
            improved user experience and the positive impact it had on their
            business.
          </p>
          <p>
            Here are the final designs for the webpages and mobile app, after
            applying visual identity.
          </p>
          <img style={{ display: "block", margin: "auto" }} src={cp6} />
          <img style={{ display: "block", margin: "auto" }} src={cp7} />
          <img style={{ display: "block", margin: "auto" }} src={cp8} />
          <img style={{ display: "block", margin: "auto" }} src={cp9} />
          <img style={{ display: "block", margin: "auto" }} src={cp10} />
          <p>
            As of today, the site it live and you can check it{" "}
            <span
              onClick={() => window.open("http://www.crowdplat.com", "_blank")}
              style={{ fontWeight: "700", textDecoration: "underline" }}
            >
              {" "}
              here!
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Crowdplat;
