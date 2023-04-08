import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { React, useState } from "react";
import { MdEmail } from "react-icons/md";
const Form = () => {
  const contactLinks = [
    {
      id: 1,
      link: "https://github.com/elroychua",
      icon: <AiFillGithub />,
      subtitle: "GitHub",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/elroy-chua-9618b9205/",
      icon: <AiFillLinkedin />,
      subtitle: "LinkedIn",
    },
    {
      id: 3,
      link: "https://www.instagram.com/elroy.codes/",
      icon: <AiFillInstagram />,
      subtitle: "Instagram",
    },
    {
      id: 4,
      link: "https://github.com/elroychua",
      icon: <MdEmail />,
      subtitle: "Email",
    },
  ];
  return (
    <section>
      <div className=" mt-8">
        <h3 className="text-3xl py-1">Contact Me!</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
          {`I'm constantly seeking new prospects and ways to broaden my professional connections.
          Don't hesitate to reach out to me through any of these channels.`}
        </p>
        <div className="text-5xl flex justify-center gap-5 sm:gap-16 lg:gap-44 py-10 flex-col sm:flex-row text-gray-600">
          {contactLinks.map((link) => {
            return (
              <>
                <div className="text-center cursor-pointer hover:text-teal-400">
                  <div className="flex justify-center">
                    <a
                      href={link.link}
                      className="justify-items-center"
                      target="blank"
                    >
                      {link.icon}
                    </a>
                  </div>
                  <p className="text-xs">{link.subtitle}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Form;
