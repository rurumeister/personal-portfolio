import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className="btn-scrollTop text-black dark:text-black"
      style={{ display: isVisible ? "flex" : "none" }}
      onClick={goTop}
    >
      <FaAngleUp
        style={{ alignSelf: "center" }}
        className="text-black dark:text-gray-400"
      />
      <p className="text-xs text-black dark:text-gray-400">Go to top.</p>
    </button>
  );
};

export default ScrollToTop;
