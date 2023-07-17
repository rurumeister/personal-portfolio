import Image from "next/image";
import Typewriter from "typewriter-effect";
import useMediaQuery from "@mui/material/useMediaQuery";
const Hero = () => {
  const isInitialRequestGreaterThan700 = useMediaQuery("(min-width:700px)");
  return (
    <section>
      <div className="text-center">
        <h2 className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-5 text-5xl md:text-8xl">
          Hi, I am Elroy Chua
        </h2>
        <div style={{ minHeight: "75px" }}>
          {isInitialRequestGreaterThan700 ? (
            <Typewriter
              style={{ minHeight: "75px" }}
              options={{ loop: true, cursor: "🚀" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: `Roboto, sans-serif;"><strong>Computer Science Undergraduate</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(31)
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: system-ui;"><strong>Software Developer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(19)
                  .typeString(
                    '<span style="color: #FFF; font-size:3em; font-family: system-ui;"><strong>UX Designer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(15)
                  .start();
              }}
            />
          ) : (
            <Typewriter
              options={{ loop: true, cursor: "🚀" }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: `Roboto, sans-serif;"><strong>Computer Science Undergraduate</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(31)
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: system-ui;"><strong>Software Developer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(19)
                  .typeString(
                    '<span style="color: #FFF; font-size: 1.5em ; font-family: system-ui;"><strong>Designer</strong>.</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(12)
                  .start();
              }}
            />
          )}
        </div>
        <p className="text-sm md:text-md text-left py-4 leading-8 text-white">
          {`I have a strong interest in user experience and project
              management, enthusiastic about utilizing new technologies to drive
              positive change and solve problems. I am a committed team player with
              a strong empathetic ability and am dedicated to contributing to
              the success of future projects. Let's connect!`}
        </p>
      </div>
      <div className="py-5">
        <div className=" relative bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full w-60 h-60 md:w-70 md:h-70 overflow-hidden">
          <Image
            src={"/elroy_ai.png"}
            width="300"
            height="300"
            alt="elroy-ai-render"
          />
        </div>
      </div>
      <ul className="flex items-center justify-center mt-5">
        <li>
          <button
            className="relative bg-gradient-to-b from-purple-400 to-pink-600 text-white hover:font-semibold px-4 py-2 rounded-md cursor-pointer self-center ring ring-purple-300 ring-offset-4 ring-offset-black hover:ring-white "
            onClick={() => {
              const element = document.getElementById("social-links");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact me
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
