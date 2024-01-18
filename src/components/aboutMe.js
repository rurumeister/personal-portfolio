import Image from "next/image";
const skillsArray = [
  {
    imageUrl: "/img/frontend.png",
    title: "Frontend Development",
    description:
      "Designing, building, and maintaining responsive websites and web apps.",
    stack: [
      "React",
      "HTML",
      "Next.js",
      "Ky.js",
      "Axios",
      "React Query",
      "D3.js",
      "ChakraUI",
      "MaterialUI",
      "TailwindCSS",
      "CSS",
      "Emotion.js",
    ],
  },
  {
    imageUrl: "/img/backend.png",
    title: "Backend Development",
    description:
      "Development of RESTful APIs, microservices, and database management.",
    stack: [
      "Express.js",
      "Node.js",
      "Objection.js",
      "Knex.js",
      "Springboot",
      "Joi",
      "Jest",
      "Supertest",
      "Prisma",
    ],
  },
  {
    imageUrl: "/img/design.png",
    title: "DevOps",
    description:
      "Enhancing efficiency and effectiveness of software development and IT operations.",
    stack: [
      "React Testing Library",
      "Cypress",
      "Docker",
      "Nginx",
      "CI/CD",
      "GitHub Actions",
      "Gitlab Runner",
      "Vercel",
      "Semgrep",
      "AWS",
    ],
  },
];
const AboutMe = () => {
  return (
    <section>
      <div className="mt-16">
        <div className="group font-mono text-3xl font-bold text-black dark:text-white py-1 mt-8">
          <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Me
          </span>
        </div>
        <p className="text-sm md:text-md  py-2 leading-8 text-slate-700 dark:text-white">
          {`My background in Spatial Design at `}
          <span className="font-bold ">Nanyang Polytechnic</span>
          {` introduced me to design thinking, architectural technologies, and UX concepts. During National Service,
          I delved into UX design and web development.
          I am currently pursuing a Bachelor's in Computer Science, specializing in Big Data at the `}
          <span className="font-bold">University of Wollongong.</span>
          {`  I also engage in hackathons, interest groups, and have work experience as a Full Stack Software Developer Intern at `}
          <a href="https://getpaid.asia/" target="_blank">
            <span className="font-bold text-emerald-300 underline underline-offset-4 hover:text-amber-300 cursor-pointer">
              GetPaid
            </span>
          </a>
          {` and currently at `}
          <a href="https://www.ensigninfosecurity.com/" target="_blank">
            <span className="font-bold text-emerald-300 underline underline-offset-4 hover:text-amber-300 cursor-pointer">
              Ensign InfoSecurity
            </span>
          </a>
          {`. I find meaning volunteering at a local church, participating in feeding programs for underprivileged children in
          the Philippines 🇵🇭, playing guitar 🎸 with over 6 years of live playing experience, acting in commercials 🎬, and travelling.`}
        </p>
      </div>
      <div className="group font-mono text-2xl font-bold text-black dark:text-white py-1 mt-8">
        <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          My Skills
        </span>
      </div>
      <div className="font-mono text-md md:text-xl pt-5 leading-8 text-slate-700 dark:text-gray-200">
        <span className="font-bold">1. Programming Languages: </span>
        <span className="font-light text-md md:text-xl italic">
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">TypeScript</span>, Java, & Python.
        </span>
      </div>
      <div className="font-mono text-md md:text-xl pt-5 leading-8 text-slate-700 dark:text-gray-200">
        <span className="font-bold">2. Databases: </span>
        <span className="font-light text-md md:text-xl italic">
          <span className="font-bold">PostgreSQL</span>,{" "}
          <span className="font-bold">MongoDB</span>, SQL, PL/SQL & Supabase.
        </span>
      </div>
      <div className="font-mono text-md md:text-xl pt-5 leading-8 text-slate-700 dark:text-gray-200">
        <span className="font-bold">3. Development:</span>
      </div>
      <div className="grid lg:grid-cols-3 gap-0 md:gap-4">
        {skillsArray.map((skill, index) => {
          return (
            <div
              key={index}
              className="text-center bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-opacity-40 shadow-md p-5 md:p-10 rounded-xl my-5 md:my-10"
            >
              <Image
                alt="design-image"
                className="mx-auto"
                src={skill.imageUrl}
                width="100"
                height="100"
              />
              <h3 className="text-xl text-slate-700 dark:text-white font-semibold pt-8 text-left underline underline-offset-2">
                {skill.title}
              </h3>
              <p className="text-sm md:text-md py-2 text-slate-900 dark:text-white text-left ml-1">
                {skill.description}
              </p>
              <div className="flex flex-col flex-wrap">
                <h4 className="pt-3 pb-2 font-semibold text-teal-400 text-left ml-1">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap">
                  {skill.stack.map((stackItem, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="cursor-pointer hover:scale-105 bg-gray-200 text-gray-800 dark:bg-teal-200 dark:text-teal-800 py-1 px-3 m-1 rounded-xl text-sm"
                    >
                      {stackItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutMe;
