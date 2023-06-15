const Projects = () => {
  return (
    <>
      <div className=" mt-10">
        <div className="group font-mono text-3xl font-bold text-white py-1 mt-8">
          <span
            className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px]
          bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            Projects
          </span>
        </div>
        <p className="text-sm md:text-md py-2 leading-8 text-white">
          {`I have experience participating in two hackathons: the
          Appetizer Hackathon organized by Naver Cloud and the Code Dojo hosted by Ninja Van.
          Furthermore, as part of my Project Management & Software Development modules in school, I
          successfully created a Swift Application and a full stack MERN cinema booking system respectively.
          Currently I am pursuing
          a project with a group of friends. Keep an eye out for anything new! `}
        </p>
      </div>
    </>
  );
};

export default Projects;
