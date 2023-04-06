import { BsFillMoonStarsFill } from "react-icons/bs";

const navbar = () => {
  return (
    <nav className="sticky py-10 mb-12 px-10 md:px-20 lg:px-40 flex justify-between top-0 bg-white shadow-md z-50 cursor-pointer">
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <h1 className="text-xl">
          {`//elroychua`}
          <span className="text-teal-600">_</span>
        </h1>
      </div>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
