const Projects = () => {
  return (
    <>
      <div className=" mt-10">
        <div className="group font-mono text-3xl font-bold text-white py-1 mt-8">
          <span className="bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Projects
          </span>
        </div>
        <p className="text-md py-2 leading-8 text-white">
          {`I have experience working on various projects, such as developing a website using React,
          NextJS, and TypeScript at GetPaid. Additionally, I participated in two hackathons: the
          Appetizer Hackathon organized by Naver Cloud and the Code Dojo hosted by Ninja Van.
          Furthermore, as part of my Project Management module in school, I successfully created a
          Swift Application. Moreover, I also built a full stack MERN cinema booking system as part
          of another module. Keep an eye out for my upcoming projects! `}
        </p>
      </div>
    </>
  );
};

export default Projects;
