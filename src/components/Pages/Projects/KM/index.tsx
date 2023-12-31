/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-irregular-whitespace */
import { useEffect } from "react";
import km1 from "../../../../assets/KM/km1.svg";
import km2 from "../../../../assets/KM/km2.svg";
import km3 from "../../../../assets/KM/km3.svg";
import km4 from "../../../../assets/KM/km4.svg";
import km5 from "../../../../assets/KM/km5.svg";
import km6 from "../../../../assets/KM/km6.svg";
import km7 from "../../../../assets/KM/km7.svg";

const KM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="project-header">Knowledge Management</div>
      <div className="project-desc">
        A modern web application for the company's knowledge base
      </div>
      <div className="project-page">
        <div className="my-contributions">
          <div className="mc-left">
            <div className="section-header">My Contributions</div>
            <span className="mc-header">Role</span>
            <p>
              I was the Lead Designer in this project. I came up with the design
              system and acted as a full stack designer from start to finish.
              Transitioning from legacy methodologies to a more modern approach.{" "}
            </p>
            <span className="mc-header">Project Type</span>
            <p>Web App</p>
            <span className="mc-header">Project Duration</span>
            <p>August 2022 - Present</p>
            <span className="mc-header">Design Tool</span>
            <p>Figma</p>
          </div>
          <div className="mc-right">
            <div className="mc-right-text">
              <div className="section-header">Credit One Bank</div>
              <p>
                Credit One Bank, N.A. is an American bank and financial services
                company specializing in credit cards, particularly for borrowers
                with low credit scores. It is a wholly-owned subsidiary of
                Credit One Financial, incorporated in Nevada.
              </p>
            </div>
          </div>
        </div>

        <div className="overview">
          <div className="section-header">Overview</div>
          <p>
            Knowledge Home started as part of Universal CRM. While designing
            other applications and from conversations with our agents during
            that time I realized that the current way of accessing information
            left a lot to be desired. At that point of time you had to log in to
            a system and type out what word document you were looking for and
            read through the whole thing to find a small snippet of information.
            The layout of the information was not organized. As our system and
            company was growing I realized this would be a massive bottleneck
            for us.
          </p>
          <p>
            With this in mind, I led the call to redesign the existing knowledge
            base and make it more accessible, easy to navigate and
            clear/concise.
          </p>
        </div>

        <div className="research">
          <div className="section-header">Research</div>
          <p>
            Even though I had a general idea of what the initial pain points
            were for the agents, I felt the need to get more in depth into this
            problem. 
          </p>

          <ol type="1">
            <li>
              {" "}
              Job shadowing: Observed the call center agents as they performed
              their work {" "}
            </li>
            <li>
              Workshops: Conducted workshops with call center agents to gather
              their input and feedback on the types of information and resources
              that would be most helpful for them to have access to. 
            </li>
            <li>
              Usability testing: Tested the usability of the web-app knowledge
              home with call center agents.
            </li>

            <li>
              Customer feedback: Gathered feedback from customers who have
              interacted with call center agents This helped identify areas
              where call center agents may need additional training or support.
            </li>
            <li>
              Data analysis: Collected and analyzed call center data, such as
              call logs and customer feedback, to identify trends and patterns
              in the types of questions and issues that rose  most frequently,
              and the types of information that call center agents needed to
              have readily available to assist customers more effectively.
            </li>
          </ol>
        </div>

        <div className="insights">
          <div className="section-header">Insights & Analysis</div>
          <ol type="1">
            <li>
              Difficulty finding information: This leads to longer call times,
              lower customer satisfaction, and higher agent frustration.
            </li>
            <li>
              Outdated information: With an old knowledge base system, there is
              a risk that some of the information may be outdated or inaccurate.
              There might be multiple versions of the same process.
            </li>
            <li>
              Limited functionality: The lack of functionality may make it more
              difficult to maintain and update the knowledge base, which can
              contribute to the problem of outdated information.
            </li>
            <li>
              Lack of training and support: With an outdated system, it becomes
              very hard and expensive to train new staff. This can lead to
              inconsistencies in the information provided to customers, as well
              as frustration and low morale among agents.
            </li>
            <li>
              Inefficient workflow: The old knowledge base system does not
              integrate well with other tools, which makes it difficult provide
              seamless service to customers. Additionally, the time required to
              search for information within the knowledge base adds unnecessary
              time to call handling, which can lead to lower efficiency and
              productivity.
            </li>
          </ol>
        </div>

        <div className="design-process">
          {" "}
          <div className="section-header">Design Process</div>
          <p>A basic stripped down architecture of the app</p>
          <img
            id={"project-images"}
            style={{ margin: "auto", display: "block" }}
            src={km1}
          />
          <img
            id={"project-images"}
            style={{ margin: "auto", display: "block", paddingTop: "15px" }}
            src={km2}
          />
        </div>

        <div className="key-features">
          <p>
            <div className="section-header">Key features added: </div>
            <ul>
              <li>Search Filtering and Sorting Options</li>
              <li>
                Each artifact has specific tags which can be used in conjunction
                with the search/sort feature thus getting more specific results
                back.
              </li>
            </ul>
          </p>

          <img
            style={{ margin: "auto", display: "block", padding: "10px 0px" }}
            src={km3}
            id={"project-images"}
          />
          <img
            style={{ margin: "auto", display: "block", padding: "10px 0px" }}
            src={km4}
            id={"project-images"}
          />

          <ul>
            <li>Contribution Page (CS Call Agents, Writer, Admin)</li>
          </ul>
          <img
            style={{ margin: "auto", display: "block", padding: "10px 0px" }}
            src={km5}
            id={"project-images"}
          />
          <ul>
            <li>Feedback System</li>
          </ul>
          <img
            style={{ margin: "auto", display: "block", padding: "10px 0px" }}
            src={km6}
            id={"project-images"}
          />
          <ul>
            <li>Content History Page</li>
          </ul>
          <img
            style={{ margin: "auto", display: "block", padding: "10px 0px" }}
            src={km7}
            id={"project-images"}
          />
        </div>

        <div className="result">
          {" "}
          <div className="section-header">Final Result</div>
          <p>This is an ongoing project that is in production.</p>
          <p>
            If you want to learn more about this project, let’s set up a time
            and talk.
          </p>
        </div>
      </div>
    </>
  );
};

export default KM;
