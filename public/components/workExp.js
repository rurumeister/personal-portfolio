import { FaLaptopCode as WorkIcon } from "react-icons/fa";
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkExperience = () => {
  let workTimelineElements = [
    {
      id: 1,
      title: "FullStack Developer Software Engineer - Intern",
      location: "Ensign InfoSecurity, Singapore",
      description:
        "Full Stack development in the Solutions Engineering Team: Currently revamping the tech stack of an internal data visualization application from RubyOnRails to PERN stack, upgrading CI/CD pipeline to accommodate for new tech stack.",
      stack:
        "Tech Stack: PostgreSQL | Express.js | D3.js | React | Next.js | Docker | Kubernetes | Amazon Web Services | TypeScript | JavaScript",
      buttonText: "View Work",
      date: "Aug 2023 - Jan 2024",
      icon: "work",
    },
    {
      id: 2,
      title: "FullStack Developer - Intern",
      location: "GetPaid, Singapore",
      description:
        "Full Stack development in the GetPaid production monorepo: improved user experience of web portal for GetPaid users and partner onboarding.",
      stack:
        "Tech Stack: PostgreSQL | Prisma | GraphQL | React | Next.js | TypeScript | JavaScript",
      buttonText: "View Work",
      date: "Nov 2022 - Jul 2023",
      icon: "work",
    },
    {
      id: 3,
      title: "Software Engineer - Intern",
      location: "GetPaid, Singapore",
      description:
        "Development in the GetPaid web repo: developed a cost-effective onboarding web application.",
      stack: "Tech Stack: GraphQL | React | Next.js | JavaScript",
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
        "Extra-curriculars: Data Analytics Club (Analyst) & IT Club (Sub-committee)",
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
  return (
    <section>
      <div className="group font-mono text-3xl font-bold text-white py-1 mt-8">
        <span className="bg-left-bottom bg-gradient-to-r from-emerald-400 to-emerald-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Work Experience
        </span>
      </div>
      <div className="">
        <VerticalTimeline lineColor="#f0f0f0">
          {workTimelineElements.map((element) => {
            let workIconStyles = { background: "#06D6A0", color: "#FFF" };
            return (
              <VerticalTimelineElement
                style={{
                  boxShadow:
                    "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                }}
                contentStyle={{
                  background: "#1F2937",
                  color: "#fff",
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
                <p id="vertical-timeline-element-description">
                  {element.description}
                </p>
                {element?.stack ? (
                  <p id="vertical-timeline-element-added-description">
                    {element.stack}
                  </p>
                ) : null}

                {/* {showButton && (
                      <a
                        className={`button ${
                          isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="#"
                      >
                        {element.buttonText}
                      </a>
                    )} */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <div className="group font-mono text-3xl font-bold text-white py-1 mt-8">
        <span className="bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Education
        </span>
      </div>
      <div className="">
        <VerticalTimeline lineColor="#f0f0f0">
          {educationTimelineElements.map((element) => {
            let schoolIconStyles = { background: "#F9C74F", color: "#FFF" };
            return (
              <VerticalTimelineElement
                style={{
                  boxShadow:
                    "0 0.25em 0.5 em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rbga(0, 0, 0, 0.15) !important",
                }}
                contentStyle={{
                  background: "#1F2937",
                  color: "#fff",
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

                {/* {showButton && (
                      <a
                        className={`button ${
                          isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="#"
                      >
                        {element.buttonText}
                      </a>
                    )} */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default WorkExperience;
