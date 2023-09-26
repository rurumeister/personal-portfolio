import Image from "next/image";
const skillsArray = [
  {
    imageUrl: "/img/design.png",
    title: "UX Design",
    description:
      "Crafting elegant designs to meet your needs through design theory and stakeholder input.",
    stack: ["Adobe XD", "Miro", "Figma"],
  },
  {
    imageUrl: "/img/frontend.png",
    title: "Front End Development",
    description:
      "Designing, building, and maintaining responsive websites and web apps.",
    stack: [
      "React",
      "HTML",
      "Next.js",
      "Node.js",
      "D3.js",
      "Ky.js",
      "Axios",
      "Cypress",
      "ChakraUI",
      "TailwindCSS",
      "CSS",
      "Emotion.js",
    ],
  },
  {
    imageUrl: "/img/backend.png",
    title: "Back End Development",
    description:
      "Development of RESTful APIs, microservices, and database management.",
    stack: [
      "Express.js",
      "Objection.js",
      "Jest",
      "Supertest",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Docker",
    ],
  },
];
const AboutMe = () => {
  return (
    <section>
      <div className="mt-16">
        <div className="group font-mono text-3xl font-bold text-white py-1 mt-8">
          <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Me
          </span>
        </div>
        <p className="text-sm md:text-md  py-2 leading-8 text-white">
          {`My background in Spatial Design at `}
          <span className="font-bold ">Nanyang Polytechnic</span>
          {` introduced me to design thinking, architectural technologies, and UX concepts. During National Service,
          I delved into UX design and web development.
          I'm now pursuing a Bachelor's in Computer Science, specializing in Big Data at the `}
          <span className="font-bold">University of Wollongong</span>
          {`  I engage in hackathons, interest groups, and have interned as a Full-Stack Software Developer at `}
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
          the Philippines 🇵🇭, playing guitar 🎸 with over 6 years of live playing experience, acting in commercials 🎬, and traveling.`}
        </p>
      </div>
      <div className="font-mono text-md md:text-xl pt-5 leading-8 text-gray-200">
        Programming Languages:{" "}
        <span className="font-light text-md text-white md:text-xl">
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">TypeScript</span>, Java, Python & GraphQL.
        </span>
      </div>
      <div className="grid lg:grid-cols-3 gap-0 md:gap-4">
        {skillsArray.map((skill, index) => {
          return (
            <div
              key={index}
              className="text-center bg-slate-300 bg-opacity-40 shadow-md p-5 md:p-10 rounded-xl my-5 md:my-10"
            >
              <Image
                alt="design-image"
                className="mx-auto"
                src={skill.imageUrl}
                width="100"
                height="100"
              />
              <h3 className="text-xl text-white font-semibold pt-8 ">
                {skill.title}
              </h3>
              <p className="text-sm md:text-md py-2 text-white">
                {skill.description}
              </p>
              <div className="flex flex-col flex-wrap justify-center">
                <h4 className="pt-3 pb-2 font-semibold text-teal-400 underline underline-offset-2 ">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap">
                  {skill.stack.map((stackItem, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="cursor-pointer hover:scale-105 bg-teal-200 text-teal-800 py-1 px-3 m-1 rounded-full text-sm"
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
