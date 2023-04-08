import Image from "next/image";
const Hero = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Elroy Chua</h2>
        <h3 className="text-2xl py-2">Full Stack Developer and CS Student.</h3>
        <p className="text-md text-left py-5 leading-8 text-gray-800">
          {`I have a strong interest in user experience and project
              management, enthusiastic about utilizing new technologies to drive
              positive change and solve problems. I am a committed team player with
              a strong empathetic ability and am dedicated to contributing to
              the success of future projects. Let's connect!`}
        </p>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 mx-auto rounded-full w-60 h-60 md:w-80 md:h-80 overflow-hidden">
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
