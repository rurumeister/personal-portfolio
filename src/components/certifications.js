import Image from "next/image";

const certificateList = [
  {
    imageUrl: "/img/certifications/aws_dev.png",
    title: "Amazon Web Services (AWS)",
    certificate: [
      {
        title: "AWS Certified Developer - Associate",
        dateValid: "Apr 2025 - Apr 2028",
        dateEarned: "Apr 2025",
      },
      {
        title: "AWS Certified Solutions Architect - Associate",
        dateValid: "Oct 2024 - Oct 2027",
        dateEarned: "Oct 2024",
      },
    ],
  },
  {
    imageUrl: "/img/certifications/hackerrank.png",
    title: "HackerRank",
    certificate: [
      {
        title: "Node (Basic) Skills Certificate",
        dateEarned: "Jan 2024",
      },
      {
        title: "Frontend Developer (React) Certificate",
        dateEarned: "Jan 2024",
      },
    ],
  },
  // {
  //   imageUrl: "/img/certifications/udemy.png",
  //   title: "Udemy",
  //   certificate: [
  //     {
  //       title: "React & TypeScript Chrome Extension Development [2024]",
  //       dateEarned: "Sep 2024",
  //     },
  //     {
  //       title: "SQL Optimization with SingleStore",
  //       dateEarned: "Apr 2024",
  //     },
  //     {
  //       title: "Software Architecture: REST API Design - The Complete Guide",
  //       dateEarned: "Apr 2024",
  //     },
  //     {
  //       title: "Learn OAuth 2.0 - Get started as an API Security Expert",
  //       dateEarned: "Jan 2024",
  //       skillsLearned: ["React"],
  //     },
  //   ],
  // },
  // {
  //   imageUrl: "/img/certifications/gnowbe.png",
  //   title: "Gnowbe",
  //   certificate: [
  //     {
  //       title: "Visual Logic in UI Design",
  //       dateEarned: "Jul 2022",
  //     },
  //     {
  //       title: "User Centric Interface Design for Mobile Devices",
  //       dateEarned: "Aug 2022",
  //     },
  //   ],
  // },
  // {
  //   imageUrl: "/img/certifications/coursera.png",
  //   title: "Coursera",
  //   certificate: [
  //     {
  //       title: "Start the UX Design Process: Empathize, Define, and Ideate",
  //       dateEarned: "Dec 2021",
  //     },
  //     {
  //       title: "Intro to Computer Programming",
  //       dateEarned: "Aug 2021",
  //     },
  //     {
  //       title: "How Computers Work",
  //       dateEarned: "Jul 2021",
  //     },
  //     {
  //       title: "Foundations of User Experience (UX) Design",
  //       dateEarned: "Jun 2021",
  //     },
  //   ],
  // },

  // {
  //   imageUrl: "/img/certifications/codecademy.png",
  //   title: "Codecademy",
  //   certificate: [
  //     { title: "Learn JavaScript Course", dateEarned: "Mar 2022" },
  //     {
  //       title: "Design Database with PostgreSQL",
  //       dateEarned: "Dec 2021",
  //     },
  //     {
  //       title: "Learn SQL Course",
  //       dateEarned: "Nov 2021",
  //     },
  //     {
  //       title: "Learn CSS: Responsive Design Course",
  //       dateEarned: "Jun 2021",
  //     },
  //     {
  //       title: "Code Foundations Skill Path",
  //       dateEarned: "May 2021",
  //     },
  //     {
  //       title: "Learn HTML Course",
  //       dateEarned: "Apr 2021",
  //     },
  //   ],
  // },
];

const Certifications = () => {
  return (
    <>
      <div className=" mt-10">
        <div className="group font-mono text-3xl font-bold text-black dark:text-white py-1 mt-8">
          <span
            className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px]
          bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
          >
            Certifications
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 mt-5">
          {certificateList.map((certificateParent, index) => {
            return (
              <div key={index} className="max-w-sm flex flex-col">
                <div className="relative group ml-2">
                  <Image
                    className="rounded-2xl bg-white border border-gray-300"
                    src={certificateParent?.imageUrl}
                    alt={certificateParent?.title}
                    width={100}
                    height={100}
                  />
                </div>

                <h4 className="text-lg pt-2 pb-1  font-bold underline underline-offset-4 tracking-tight text-gray-900 dark:text-white">
                  {certificateParent?.title}
                </h4>
                <div className="ml-1">
                  {certificateParent?.certificate?.map((certificate, index) => (
                    <div key={index} className="flex flex-col flex-grow mb-2">
                      <div>
                        <h4 className="text-base mb-1 font-semibold italic tracking-tight text-gray-900 dark:text-slate-100">
                          {certificate?.title}
                        </h4>
                        <p className="text-xs md:text-xs font-normal text-gray-700 dark:text-gray-400">
                          {certificate?.dateValid
                            ? ` Validity: ${certificate?.dateValid}`
                            : `
                       Date Issued: ${certificate?.dateEarned}`}
                        </p>
                        <p className=" text-sm md:text-md font-normal text-gray-700 dark:text-gray-400">
                          {certificate?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <div className="flex items-center text-slate-800 dark:text-slate-50 gap-5">
                    {certificate?.skillsLearned.map((Language, index) => {
                      const { component: LanguageIcon, title } = Language;
                      return (
                        <div key={index} className="relative">
                          <div className="group">
                            <div className="relative transition-transform ease-in-out duration-300 transform group-hover:-translate-y-2 group-hover:text-teal-300">
                              <LanguageIcon size={18} />
                            </div>
                            <p className="opacity-0 group-hover:opacity-100 group-hover:text-teal-300 absolute text-xs -bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity ease-in-out duration-300">
                              {title}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div> */}
              </div>
            );
          })}
        </div>
        {/* <div className="self-center mt-4">
          <Link href="/certificates">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              View More
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Certifications;
