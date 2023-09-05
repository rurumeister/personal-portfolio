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
} from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
//
import Link from "next/link";
const projectWeb = [
  {
    imageUrl: "/project_bg/goldenrizz.png",
    title: "Movie Booking System",
    author: "Software Methodologies Module",
    description:
      "Full Stack developer in a team of 6 tasked to design and develop a cinema booking app using the MERN. Utilized Jira and GitHub Actions for project management and followed agile methodologies and achieved a final grade of 90%",
    githubUrl: "https://github.com/EternalDoritos/cinema-booking-system",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiTailwindcss, title: "Tailwind" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiExpress, title: "Express.js" },
      { component: SiMongodb, title: "MongoDB" },
    ],
  },
  {
    imageUrl: "/project_bg/ninjavan.png",
    title: "Code Dojo",
    author: "organized by Ninja Van",
    description:
      "Code Dojo 2023, which took place in February, provided my team and I with an opportunity to support NinjaVan's users conceptualizing a customer-centric solution for Ninja Van during a 24-hour hackathon.",
    githubUrl: "https://github.com/mcbebu/D2HD",
    // eslint-disable-next-line react/jsx-key
    languages: [
      { component: SiReact, title: "React" },
      { component: SiChakraui, title: "ChakraUI" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiSpringboot, title: "SpringBoot" },
      { component: SiPostgresql, title: "Postgresql" },
    ],
  },
  {
    imageUrl: "/project_bg/appetizer.png",
    title: "Appetizer Hackathon",
    author: "organized by Naver Cloud",
    description:
      "Developed a web app with 3rd party APIs that aided users in kick starting their startup journey. We managed to achieve 4th place, owing strongly to our well-designed and polished prototype that we built.",
    githubUrl: "https://github.com/D2HD/getgoing-application",
    externalUrl: "/projects/appetizer",
    languages: [
      { component: SiReact, title: "React" },
      { component: SiChakraui, title: "ChakraUI" },
      { component: SiNextdotjs, title: "Next.js" },
      { component: SiSpringboot, title: "SpringBoot" },
      { component: SiPostgresql, title: "Postgresql" },
    ],
  },
  {
    imageUrl: "/project_bg/csit.png",
    title: "UOW Room Booking App",
    author: "Project Management Module",
    description:
      "Developed an iOS native app to book rooms. Designed overall application layout, developed, and implemented the entire application, organized meetings and delegating tasks, leading to a final grade of 90%",
    githubUrl: "https://github.com/EternalDoritos/RoomBookingApplication",
    languages: [
      { component: SiSwift, title: "Swift" },
      { component: SiFirebase, title: "Firebase" },
    ],
  },
];
const ProjectComponent = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 mt-5">
        {projectWeb.map((project, index) => {
          return (
            <div
              key={index}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="relative group">
                <Image
                  class="rounded-t-lg group-hover:opacity-25"
                  src={project?.imageUrl}
                  alt={project?.title}
                  width={600}
                  height={400}
                />

                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="flex text-white px-4 py-2 gap-5 rounded transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <a
                      href={project?.githubUrl}
                      target="blank"
                      class="hover:text-teal-300"
                    >
                      <AiFillGithub size={35} />
                    </a>
                    {project?.externalUrl && (
                      <Link
                        href={project?.externalUrl}
                        className="hover:text-teal-300"
                      >
                        <MdOpenInNew size={35} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div class="p-5 flex flex-col flex-grow">
                <div>
                  <h4 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project?.title}
                  </h4>
                  <p class="mb-3 text-xs md:text-sm font-normal text-gray-700 dark:text-gray-400">
                    {project?.author}
                  </p>
                  <p class="mb-3 text-sm md:text-md font-normal text-gray-700 dark:text-gray-400">
                    {project?.description}
                  </p>
                </div>

                <div class="flex items-center text-slate-50 gap-5">
                  {project?.languages.map((Language, index) => {
                    const { component: LanguageIcon, title } = Language;

                    return (
                      <div key={index} class="relative">
                        <div class="group">
                          <div class="relative transition-transform ease-in-out duration-300 transform group-hover:-translate-y-2 group-hover:text-teal-300">
                            <LanguageIcon size={18} />
                          </div>
                          <p class="opacity-0 group-hover:opacity-100 group-hover:text-teal-300 absolute text-xs -bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity ease-in-out duration-300">
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
    </div>
  );
};

export default ProjectComponent;
