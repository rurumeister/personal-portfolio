import Image from "next/image";

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
          {`My experience in Spatial Design at `}
          <span className="font-bold ">Nanyang Polytechnic</span>
          {` provided me with design thinking,
              knowledge of architectural technologies, and UX design concepts. During my time in National Service I took the time to learn about the
              fundamentals of UX design and web development. Although a high bar to entry, I pursued a Bachelors of Computer Science majoring in Big Data at the `}
          <span className="font-bold">University of Wollongong</span>
          {` where I have learned about algorithms, programming concepts, and analytical thinking. It has been a fulfilling and exciting learning journey so far. I actively participate
              in hackathons, interest groups, and have past work experience as a Software Engineering cum Full-Stack
              Developer Internship at `}
          <a href="https://getpaid.asia/" target="_blank">
            <span className="font-bold text-emerald-300 underline underline-offset-4 hover:text-amber-300 cursor-pointer">
              GetPaid
            </span>
          </a>
          {` and currently am Full Stack Software Engineer Intern at `}
          <a href="https://www.ensigninfosecurity.com/" target="_blank">
            <span className="font-bold text-emerald-300 underline underline-offset-4 hover:text-amber-300 cursor-pointer">
              Ensign InfoSecurity
            </span>
          </a>
          {`. I find meaning from volunteering at a local church and serving in feeding programs for
          underprivileged children in the Philippines 🇵🇭 . I also enjoy playing the guitar 🎸 with over 6 years of
          live playing experience, acting in several commercials 🎬, and travelling.`}
        </p>
      </div>
      <div className="font-mono text-md md:text-xl pt-5 leading-8 text-white">
        Programming Languages:{" "}
        <span className="font-light text-md md:text-xl">
          JavaScript, TypeScript, Java, Python & GraphQL.
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-0 md:gap-4">
        <div className="text-center bg-slate-300 bg-opacity-40 shadow-md hover:shadow-red-400 p-5 md:p-10 rounded-xl my-5 md:my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/design.png"}
            width="100"
            height="100"
          />
          <h3 className="text-lg text-white font-semibold pt-8 pb-2">
            UX Design
          </h3>
          <p className="text-sm md:text-md py-2 text-white">
            Crafting elegant designs to meet your needs through design theory
            and stakeholder input.
          </p>
          <h4 className="pt-3 pb-2 font-semibold text-teal-400 ">Stack:</h4>
          <div className="text-sm md:text-md ">
            <p className="text-white ">Adobe XD</p>
            <p className="text-white ">Miro</p>
            <p className="text-white ">Figma</p>
          </div>
        </div>
        <div className="text-center bg-slate-300 bg-opacity-40 shadow-md hover:shadow-emerald-400 p-5 md:p-10  rounded-xl my-5 md:my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/frontend.png"}
            width="100"
            height="100"
          />
          <h3 className="text-white text-lg font-semibold pt-8 pb-2">
            Front End Development
          </h3>
          <p className="text-sm md:text-md text-white py-2">
            Designing, building, and maintaining responsive websites and web
            apps.
          </p>
          <h4 className=" pt-3 pb-2 font-semibold text-teal-400 ">Stack:</h4>
          <div className="text-sm md:text-md ">
            <p className="text-white py-1 ">
              React | HTML | Next.js | Node.js | D3.js | Ky.js | Axios |
              ChakraUI | TailwindCSS | CSS | Emotion.js
            </p>
          </div>
        </div>
        <div className="text-center bg-slate-300 bg-opacity-40 shadow-md hover:shadow-blue-300 p-5 md:p-10  rounded-xl my-5 md:my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/backend.png"}
            width="100"
            height="100"
          />
          <h3 className=" text-white text-lg font-semibold pt-8 pb-2">
            Back End Development
          </h3>
          <p className="text-sm md:text-md text-white py-2">
            Development of RESTful APIs, microservices, and database management.
          </p>
          <h4 className="pt-3 pb-2 font-semibold text-teal-400 ">Stack:</h4>
          <div className="text-sm md:text-md text-white">
            <p className="text-white py-1">
              Express.js | Objection.js | Prisma | PostgreSQL | MongoDB | Docker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
