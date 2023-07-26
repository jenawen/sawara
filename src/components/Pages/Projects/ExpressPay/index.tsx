/* eslint-disable no-irregular-whitespace */
import "../index.css";
import ep1 from "../../../../assets/EP/ep1.svg";
import ep2 from "../../../../assets/EP/ep2.svg";
import ep3 from "../../../../assets/EP/ep3.svg";
import ep4 from "../../../../assets/EP/ep4.svg";
import ep5 from "../../../../assets/EP/ep5.svg";
import ep6 from "../../../../assets/EP/ep6.svg";
import ep7 from "../../../../assets/EP/ep7.svg";
import ep8 from "../../../../assets/EP/ep8.svg";
import ep9 from "../../../../assets/EP/ep9.svg";
import ep10 from "../../../../assets/EP/ep10.svg";

const ExpressPay = () => {
  return (
    <>
      <div className="project-header">Express Pay</div>
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
              Transitioning from legacy methodologies to a more modern approach.
            </p>
            <span className="mc-header">Project Type</span>
            <p>Web App </p>
            <span className="mc-header">Project Duration</span>
            <p>December 2021</p>
            <span className="mc-header">Design Tool</span>
            <p>Figma</p>
          </div>
          <div className="mc-right">
            {" "}
            <div className="section-header">Credit One Bank</div>
            <p>
              Credit One Bank, N.A. is an American bank and financial services
              company specializing in credit cards, particularly for borrowers
              with low credit scores. It is a wholly-owned subsidiary of Credit
              One Financial, incorporated in Nevada.
            </p>
          </div>
        </div>

        <div className="overview">
          {" "}
          <div className="section-header">Overview</div>
          <p>
            The goal of the project is to redesign the current Express Pay
            application used by Credit One Bank. The current application is
            outdated and requires agents to navigate through multiple
            applications to solve customer problems, resulting in increased call
            times and SLAs. The project aims to create a customer-based
            application that uses omni-channel and offers a 360-degree customer
            experience. The MVP will focus on the Express Pay feature, which is
            a significant source of revenue for the bank. The UX team lead by
            myself  gathered information about the problems faced by customer
            service agents with the current application and worked towards
            creating a user-friendly and intuitive interface. 
          </p>
          <p>
             The new application should be easy to navigate, have minimal
            training requirements, and eliminate the need for agents to decipher
            acronyms or search for procedures. The project will require close
            collaboration between business stakeholders, IT, and the UX team to
            ensure a successful redesign that meets the needs of the bank and
            its customers. Updating and redesigning a legacy program (20 years
            old) only works on internet explorer. Not compatible with edge. 
          </p>
          <ul>
            <li>Designing new application to help customer service agents. </li>
            <li>
              Replacing the existing applications since it is very outdated. 
            </li>
            <li>
              Combining different existing applications used by agents into one
              application to reduce the SLA time of agent.
            </li>
            <li>
              Design a simple user centric design which will decrease the
              training time which will help reducing the expenses.
            </li>
          </ul>
        </div>

        <div className="issue">
          {" "}
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
          <ul>
            <li>Conducted Heuristic Analysis on existing design.</li>
            <li>User Interviews (1 on 1)</li>
            <li>Moderated testing</li>
            <li>Questionnaires</li>
          </ul>
          <img src={ep1} />
          <img src={ep2} />
        </div>

        <div className="insights">
          {" "}
          <div className="section-header">Insights & Analysis</div>
          <ul>
            <li>
              High level learning curve application is dated, hard to use unless
              you are highly trained.{" "}
            </li>
            <li>
              Training takes too much time and costs too much money. Not cost
              efficient.
            </li>
            <li>
              Multiple applications need to be used for one process which could
              be streamlined better.{" "}
            </li>
            <li>
              Increases time to solve one intent. About 8-12 applications daily.
            </li>
            <li>
              No transaction history, have to go through everything manually and
              find information and page refreshes after every click.{" "}
            </li>
            <li>
              No email support, only fax and physical mail documents supported.
            </li>
            <li>
              The new application should be easy to navigate, have minimal
              training requirements, and eliminate the need for agents to
              decipher acronyms or search for procedures.{" "}
            </li>
            <li>
              The project will require close collaboration between business
              stakeholders, IT, and the UX team to ensure a successful redesign
              that meets the needs of the bank and its customers.{" "}
            </li>
          </ul>
          <img src={ep3} />
        </div>

        <div className="goals">
          {" "}
          <div className="section-header">Goals</div>
          <ul>
            <li>
              Update and redesign a legacy program (20 years old) only works on
              Internet Explorer and is not compatible with Edge. 
            </li>
            <li>Design a new application to help customer service agents. </li>
            <li>
              Replace the existing applications since it is very outdated. 
            </li>
            <li>
              Combine different existing applications used by agents into one
              application to reduce the SLA time of agent.
            </li>
            <li>
              Design a simple user centric design which will decrease the
              training time which will help reducing the expenses.
            </li>
          </ul>
        </div>

        <div className="design-process">
          {" "}
          <div className="section-header">Design Process</div>
          <p>Information Architecture</p>
          <img src={ep4} />
          <p>Journey Maps</p>
          <img src={ep5} />
          <img src={ep6} />
          <p>Wireframes</p>
          <img src={ep7} />
          <img src={ep8} />
          <img src={ep9} />
          <img src={ep10} />
        </div>

        <div className="result">
          {" "}
          <div className="section-header">Final Result</div>
          <p>This is an ongoing project that is in production. </p>
          <p>
            If you want to learn more about this project, let’s set up a time
            and talk.
          </p>
        </div>

        <div className="thanks">
          {" "}
          <div className="section-header">Thank You!</div>
          <p>
            Thank you for reviewing my work. If you have any questions or want
            to just connect - feel free to reach out to me via email.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExpressPay;
