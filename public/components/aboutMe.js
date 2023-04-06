import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className=" mt-10">
        <h3 className="text-3xl py-1">About Me</h3>
        <p className="text-md py-2 leading-8 text-gray-500">
          {`My experience in Spatial Design at `}
          <span className="font-bold">Nanyang Polytechnic</span>
          {` provided me with design thinking,
              knowledge of architectural technologies, and UX design concepts. This sparked my interest in UI/UX,
              programming concepts, and web applications. Although a high bar to entry, pursuing a Computer Science major at the `}
          <span className="font-bold">University of Wollongong</span>
          {` has been a fulfilling learning journey. I actively participate
              in hackathons, interest groups, and completed a Software Engineering cum Full-Stack
              developer internship at `}
          <span
            className="text-teal-500 hover:text-amber-300 cursor-pointer"
            onClick={() => {
              const element = document.getElementById("work-top");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            GetPaidSG
          </span>
          {`.`}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/design.png"}
            width="100"
            height="100"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">UX Designer</h3>
          <p className="py-2">
            Crafting elegant designs to meet your needs through design theory
            and stakeholder input.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-600 py-1">Adobe XD</p>
          <p className="text-gray-600 py-1">Miro</p>
          <p className="text-gray-600 py-1">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/frontend.png"}
            width="100"
            height="100"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Front-end Developer</h3>
          <p className="py-2">
            Designing, implementing and maintainings user interface of websites
            and applications.
          </p>
          <h4 className="py-4 text-teal-600">Languages I use</h4>
          <p className="text-gray-600 py-1">ReactJS</p>
          <p className="text-gray-600 py-1">NextJS</p>
          <p className="text-gray-600 py-1">NodeJS</p>
          <p className="text-gray-600 py-1">JavaScript, HTML, CSS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            alt="design-image"
            className="mx-auto"
            src={"/backend.png"}
            width="100"
            height="100"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Back-end Developer</h3>
          <p className="py-2">
            Designing, implementing and maintainings user interface of websites
            and applications.
          </p>
          <h4 className="py-4 text-teal-600">Languages used</h4>
          <p className="text-gray-600 py-1">ExpressJS</p>
          <p className="text-gray-600 py-1">PostgreSQL</p>
          <p className="text-gray-600 py-1">MongoDB</p>
          <p className="text-gray-600 py-1" id="work-top">
            Java, Python, C++
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
