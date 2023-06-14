import { FaLaptopCode as WorkIcon } from "react-icons/fa";
import { IoSchoolOutline as SchoolIcon } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const WorkExperience = () => {
  let timelineElements = [
    {
      id: 1,
      title: "FullStack Developer (Intern)",
      location: "GetPaid, Singapore",
      description: `Improved the front-end solutions to address user-reported issues on external-facing
      tools, created APIs to automate email communication & enable multi-language support
      and was responsible for overseeing regression testing, which led to a 75% increase in the
      efficiency of resolving support issues.

      Tech used: ReactJS | TypeScript | NextJS | PostgreSQL`,
      buttonText: "View Work",
      date: "November 2022 - Present",
      icon: "work",
    },
    {
      id: 2,
      title: "Software Engineer (Intern)",
      location: "GetPaid, Singapore",
      description: `Built a cost-effective onboarding app using React, which replaced a WordPress
      website and streamlined blog post publishing through a CMS and improved integration speed
      with external APIs by conducting regression testing during external tool development. Tech used:
      ReactJS | NextJS | GraphQL`,
      buttonText: "View Work",
      date: "April 2022 - November 2022",
      icon: "work",
    },
    {
      id: 3,
      title: "Bachelor of Science, Computer Science (Big Data)",
      location: "University of Wollongong - SIM GE",
      description:
        "GPA 3.6/4 Extra-curriculars: Data Analytics Club (Analyst) & IT Club (Sub-committee)",
      buttonText: "View Degree",
      date: "October 2021 - March 2024",
      icon: "school",
    },
    {
      id: 4,
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
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          Experiences
        </span>
      </div>
      <div className="">
        <VerticalTimeline lineColor="#f0f0f0">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            let workIconStyles = { background: "#06D6A0", color: "#FFF" };
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
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
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
