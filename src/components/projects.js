import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import {
  SiChakraui,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiSwift,
  SiFirebase,
  SiGithub,
  SiMicrosoftazure,
  SiOpensearch,
  SiMui,
  SiStyledcomponents,
  SiHyperledger,
  SiVercel,
  SiSelenium,
  SiPython,
} from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

const projectWeb = [
  {
    imageUrl: "/img/project_bg/voting.png",
    title: "QuantumSecureVote",
    author: "under Capstone Project Module",
    moduleLink: "https://courses.uow.edu.au/subjects/2023/CSIT321?year=2023",
    description: `Designing an e-voting system in a team of five using post-quantum RingCT technology
     for our final year project, positively influencing wider blockchain ecosystems by improving
     security and sustainability with Hyperledger Fabric and MatriCT+`,
    date: "Oct 2023 - Present",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiMui, title: "MaterialUI" },
      { component: SiHyperledger, title: "Hyperledger" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/stealth.png",
    title: "Edutech web app",
    author: "side-project",
    description: `Leading the design and implementation of frontend infrastructure in a team of six
    individuals working on a stealth project within the education technology sector, focusing
    on serving digitized exam practice papers to secondary students in Singapore`,
    date: "Jul 2023 - Present",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiStyledcomponents, title: "Styled Comp" },
      { component: SiMicrosoftazure, title: "Azure APIM" },
      { component: SiOpensearch, title: "OpenSearch" },
      { component: SiVercel, title: "Vercel" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/goldenrizz.png",
    title: "Cinema booking app",
    author: "under Software Methodologies Module",
    moduleLink: "https://courses.uow.edu.au/subjects/2023/CSIT314?year=2023",
    description: `Full Stack developer in a team of 6 tasked to design and develop a cinema booking app using
      MERN. Utilized Jira and GitHub Actions for project management and followed agile
      methodologies and achieved a final grade of 90%`,
    githubUrl: "https://github.com/EternalDoritos/cinema-booking-system",
    externalUrl: "https://cinema-booking-system-eternal-doritos.vercel.app/",
    date: "Apr 2023 - May 2023",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiTailwindcss, title: "Tailwind" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiExpress, title: "Express.js" },
      { component: SiMongodb, title: "MongoDB" },
      { component: SiVercel, title: "Vercel" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/ninjavan.png",
    title: "Code Dojo hackathon",
    author: "organized by NinjaVan",
    description:
      "Provided my team and I with the opportunity to support NinjaVan's users by conceptualizing a customer-centric solution resulting in the development of a web service for NinjaVan's drivers and consignees during a 24-hour hackathon",
    githubUrl: "https://github.com/mcbebu/D2HD",
    date: "Feb 2023",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiChakraui, title: "ChakraUI" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiSpringboot, title: "SpringBoot" },
      { component: SiPostgresql, title: "Postgresql" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/sas-startup.png",
    title: "Stretch Academy project",
    author: "side-project",
    description:
      "Developed a front-end website to convey comprehensive information showcasing an example company's services with the use of React and ChakraUI serving as a practice for implementing various frontend technologies",
    githubUrl: "https://github.com/elroychua/sas-startup",
    externalUrl: "https://sas-startup.vercel.app/",
    date: "Sep 2022",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiChakraui, title: "ChakraUI" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiVercel, title: "Vercel" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/medtech.png",
    title: "MedTech Project Flux",
    author: "organized by SIM DAC",
    description: `As an Analyst in the SIM Data Analytics Club (DAC), I correlated patient inquiries with
    clinical trials by extracting over 100,000 data points to align research with patient needs efficiently`,
    date: "Sep 2022",
    languages: [
      { component: SiPython, title: "Python" },
      { component: SiSelenium, title: "Selenium" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/appetizer.png",
    title: "Appetizer hackathon",
    author: "organized by Naver Cloud",
    description:
      "Developed a web app with 3rd party APIs that aided users in kick starting their startup journey. We managed to achieve 4th place, owing strongly to our well-designed and polished prototype that we built",
    githubUrl: "https://github.com/D2HD/getgoing-application",
    externalUrl: "/projects/appetizer",
    date: "Aug 2022 - Oct 2022",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiChakraui, title: "ChakraUI" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiSpringboot, title: "SpringBoot" },
      { component: SiPostgresql, title: "Postgresql" },
      { component: SiGithub, title: "GitHub" },
    ],
  },
  {
    imageUrl: "/img/project_bg/csit.png",
    title: "Room booking app",
    author: "under Project Mangement Module",
    moduleLink: "https://courses.uow.edu.au/subjects/2021/CSIT214?year=2021",
    description:
      "Developed an iOS native app to book rooms. Designed overall application layout, developed, and implemented the entire application, organized meetings and delegating tasks, leading to a final grade of 90%",
    githubUrl: "https://github.com/EternalDoritos/RoomBookingApplication",
    date: "Oct 2021 – Dec 2021",
    languages: [
      { component: SiSwift, title: "Swift" },
      { component: SiFirebase, title: "Firebase" },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <div className=" mt-10">
        <div className="group font-mono text-3xl font-bold text-black dark:text-white py-1 mt-8">
          <span
            className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px]
          bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            Projects
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 mt-5">
          {projectWeb.map((project, index) => {
            return (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="relative group">
                  <Image
                    className="rounded-t-lg group-hover:opacity-25"
                    src={project?.imageUrl}
                    alt={project?.title}
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project?.githubUrl || project?.externalUrl ? (
                      <div className="flex text-white px-4 py-2 gap-5 rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        {project?.githubUrl && (
                          <Link
                            href={project?.githubUrl}
                            target="_blank"
                            className="hover:text-teal-300"
                          >
                            <AiFillGithub size={35} />
                          </Link>
                        )}
                        {project?.externalUrl && (
                          <Link
                            href={project?.externalUrl}
                            target="_blank"
                            className="hover:text-teal-300"
                          >
                            <MdOpenInNew size={35} />
                          </Link>
                        )}
                      </div>
                    ) : (
                      <p className="text-slate-100 text-sm">
                        No links available.
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project?.title}
                    </h4>
                    {project?.moduleLink ? (
                      <a href={project?.moduleLink} target="blank">
                        <p className="flex mb-1 text-xs md:text-sm font-normal text-blue-500 underline hover:text-blue-600 italic">
                          {project?.author}
                          <MdOpenInNew
                            size={12}
                            style={{ alignSelf: "center", marginLeft: "2px" }}
                          />
                        </p>
                      </a>
                    ) : (
                      <p className="mb-1 text-xs md:text-sm font-normal text-gray-700 dark:text-gray-400 italic">
                        {project?.author}
                      </p>
                    )}
                    <p className="mb-3 text-xs md:text-xs font-normal text-gray-700 dark:text-gray-400">
                      {project?.date}
                    </p>
                    <p className="mb-3 text-sm md:text-md font-normal text-gray-700 dark:text-gray-400">
                      {project?.description}
                    </p>
                  </div>

                  <div className="flex items-center text-slate-800 dark:text-slate-50 gap-5">
                    {project?.languages.map((Language, index) => {
                      const { component: LanguageIcon, title } = Language;
                      return (
                        <div key={index} className="relative">
                          <div className="group">
                            <div className="relative transition-transform ease-in-out duration-300 transform group-hover:-translate-y-2 group-hover:text-teal-300">
                              <LanguageIcon size={18} />
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 group-hover:text-teal-300 absolute text-xs -bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity ease-in-out duration-300">
                              {title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="self-center mt-4">
          <Link href="/projects">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              View More
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Projects;
