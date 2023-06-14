import { RiCopyrightFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="flex flex-row mt-16 pb-5 place-content-center">
      <p className="text-center  text-white text-xs mr-1">
        Created by Elroy Chua Ming Xuan
      </p>
      <RiCopyrightFill className="text-white" />
      <p className="text-center  text-white text-xs ml-1">2023</p>
    </div>
  );
};

export default Footer;
