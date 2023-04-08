import { RiCopyrightFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="flex flex-row mt-16 mb-5 place-content-center">
      <p className="text-center  text-gray-400 text-xs mr-1">
        Created by Elroy Chua Ming Xuan
      </p>
      <RiCopyrightFill className="text-gray-400" />
      <p className="text-center  text-gray-400 text-xs ml-1">2023</p>
    </div>
  );
};

export default Footer;
