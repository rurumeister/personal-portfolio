import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Elroy Chua</h2>
        <h3 className="text-2xl py-2">Full Stack Developer and CS Student.</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          {`I have a strong interest in user experience and project
              management, enthusiastic about utilizing new technologies to drive
              positive change and solve problems. I am a committed team player with
              a strong empathetic ability and am dedicated to contributing to
              the success of the company. Let's connect!`}
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://github.com/elroychua" target="blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/elroy-chua-9618b9205/"
          target="blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://www.instagram.com/elroy_chua/">
          <AiFillInstagram />
        </a>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image
          src={"/elroy_ai.png"}
          width="500"
          height="500"
          alt="elroy-ai-render"
        />
      </div>
    </section>
  );
};

export default Hero;
