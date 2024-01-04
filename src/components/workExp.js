import { FaLaptopCode as WorkIcon } from "react-icons/fa";
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  bgDark,
  black,
  green,
  lightgrey,
  offWhite,
  white,
  yellow,
} from "../styles/colors";
let workTimelineElements = [
  {
    id: 1,
    title: "FullStack Developer Software Engineer - Intern",
    location: "Ensign InfoSecurity, Singapore",
    description: `Full Stack development in the Solutions Engineering Team: Leading a tech stack revamp of an internal CRUD application focused on IP address monitoring.
    Delivered a data visualization application for monitoring global threat analysis onto on premise server.
    Collaborated with Ensign Labs teams, conducting user research and design iterations based on feedback
    `,
    stack:
      " PostgreSQL, Express.js, Joi, Knex, Ky, Jest, React, TailwindCSS, D3.js, GitLab Pipeline, Nginx, Docker, and AWS",
    buttonText: "View Work",
    date: "Aug 2023 - Mar 2024",
    icon: "work",
  },
  {
    id: 2,
    title: "FullStack Developer - Intern",
    location: "GetPaid, Singapore",
    description: `Resolved user-reported frontend issues, improving GetPaid's web portal user experience.
    Designed APIs for data handling in user authentication, new user registration, and recurring user management, achieving a 75% reduction in user onboarding time.
    Oversaw regression testing and implemented ClickUp automation, leading to a 71.43% time reduction in resolving issues
    `,
    stack: "PostgreSQL, Prisma, GraphQL, React, Next.js, Chakra UI, TypeScript",
    buttonText: "View Work",
    date: "Nov 2022 - Jul 2023",
    icon: "work",
  },
  {
    id: 3,
    title: "Software Engineer - Intern",
    location: "GetPaid, Singapore",
    description: `Led transition from WordPress to a Vercel-hosted React-based app, saving operational costs.
    Contributed to regression testing during development, accelerating integration speed with partner APIs.
    Delivered a CMS system with Hygraph, reducing blog post publication time by 66.67%
    `,
    stack: " GraphQL, React, Next.js, JavaScript",
    buttonText: "View Work",
    date: "Apr 2022 - Nov 2022",
    icon: "work",
  },
];
let educationTimelineElements = [
  {
    id: 1,
    title: "Bachelor of Science, Computer Science (Big Data)",
    location: "University of Wollongong - SIM GE",
    description: "GPA 3.25/4 ",
    addedDescription:
      " Data Analytics Club (Analyst) & IT Club (Sub-committee)",
    buttonText: "View Degree",
    date: "Oct 2021 - Mar 2024",
    icon: "school",
  },
  {
    id: 2,
    title: "Diploma in Spatial Design",
    location: "Nanyang Polytechnic, Singapore",
    description:
      "Learned design thinking, UX design concepts and architectural technologies, achieved Director’s List in Year 1.",
    buttonText: "View Diploma",
    date: "Apr 2016 - Mar 2019",
    icon: "school",
  },
];
const WorkExperience = (props) => {
  const { darkMode } = props;
  return (
    <section>
      <div className="group font-mono text-3xl font-bold text-black dark:text-white py-1 mt-8">
        <span className="bg-left-bottom bg-gradient-to-r from-emerald-400 to-emerald-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Work Experience
        </span>
      </div>
      <div className="">
        {darkMode ? (
          <VerticalTimeline lineColor={offWhite}>
            {workTimelineElements.map((element) => {
              let workIconStyles = { background: green, color: white };
              return (
                <VerticalTimelineElement
                  style={{
                    boxShadow:
                      "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                  }}
                  contentStyle={{
                    background: bgDark,
                    color: white,
                  }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={workIconStyles}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p
                    id="vertical-timeline-element-description"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    {element.description}
                  </p>
                  {element?.stack ? (
                    <p id="vertical-timeline-element-added-description">
                      <span
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Tech Stack:
                      </span>{" "}
                      <span
                        style={{
                          fontStyle: "italic",
                        }}
                      >
                        {element.stack}
                      </span>
                    </p>
                  ) : null}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        ) : (
          <VerticalTimeline lineColor={lightgrey}>
            {workTimelineElements.map((element) => {
              let workIconStyles = { background: green, color: white };
              return (
                <VerticalTimelineElement
                  style={{
                    boxShadow:
                      "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                  }}
                  contentStyle={{
                    border: "0.5px solid #eaeaea",
                    background: white,
                    color: black,
                  }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={workIconStyles}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p
                    id="vertical-timeline-element-description"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    {element.description}
                  </p>
                  {element?.stack ? (
                    <p id="vertical-timeline-element-added-description">
                      {element.stack}
                    </p>
                  ) : null}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
      </div>
      <div className="group font-mono text-3xl font-bold text-black dark:text-white py-1 mt-8">
        <span className="bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Education
        </span>
      </div>
      <div class="hi">
        {darkMode ? (
          <VerticalTimeline lineColor={offWhite}>
            {educationTimelineElements.map((element) => {
              let schoolIconStyles = { background: yellow, color: white };
              return (
                <VerticalTimelineElement
                  style={{
                    boxShadow:
                      "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                  }}
                  contentStyle={{
                    background: bgDark,
                    color: white,
                  }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={schoolIconStyles}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p
                    id="vertical-timeline-element-description"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    {element.description}
                  </p>
                  {element?.addedDescription ? (
                    <p id="vertical-timeline-element-added-description">
                      <span style={{ fontWeight: "bold" }}>
                        Extra-curriculars:
                      </span>{" "}
                      <span style={{ fontStyle: "italic" }}>
                        {element?.addedDescription}
                      </span>
                    </p>
                  ) : null}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        ) : (
          <VerticalTimeline lineColor={lightgrey}>
            {educationTimelineElements.map((element) => {
              let schoolIconStyles = { background: yellow, color: white };
              return (
                <VerticalTimelineElement
                  style={{
                    boxShadow:
                      "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                  }}
                  contentStyle={{
                    border: "0.5px solid #eaeaea",
                    background: white,
                    color: black,
                  }}
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={schoolIconStyles}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="vertical-timeline-element-description">
                    {element.description}
                  </p>
                  {element?.addedDescription ? (
                    <p id="vertical-timeline-element-added-description">
                      {element?.addedDescription}
                    </p>
                  ) : null}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;
