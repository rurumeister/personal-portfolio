import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineInfoCircle,
} from "react-icons/ai";
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
  ];
  const [showNotification, setShowNotification] = useState(false);
  function handleEmailCopyClick() {
    navigator.clipboard
      .writeText("elroymx@gmail.com")
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  }
  return (
    <section>
      <div className=" mt-8 relative" id="social-links">
        <p className="text-md py-2 leading-8 text-gray-800 text-center">
          {`I'm constantly seeking new prospects and ways to broaden my professional connections.
          Don't hesitate to reach out to me through any of these channels.`}
        </p>
        <div className="text-5xl flex justify-center gap-5 sm:gap-16 lg:gap-44 py-10 flex-col sm:flex-row text-gray-600">
          {contactLinks.map((link) => {
            return (
              <>
                <div
                  id={link.id}
                  className="self-center text-center cursor-pointer hover:text-teal-400"
                >
                  <div className="flex justify-center ">
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
          <>
            <div className="self-center text-center cursor-pointer hover:text-teal-400">
              <div
                className="flex justify-center "
                onClick={handleEmailCopyClick}
              >
                <MdEmail />
              </div>
              <p className="text-xs">Email</p>
            </div>
          </>
          {showNotification && (
            <div
              className="w-max absolute top-full left-1/2 flex text-xs p-2 rounded bg-slate-100"
              style={{ transform: "translateX(-50%)" }}
            >
              <AiOutlineInfoCircle className=" self-center" />
              <p className=" ml-1">Email has been copied to your clipboard!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
