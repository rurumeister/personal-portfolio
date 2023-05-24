import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
//Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectCarouselWeb = () => {
  return (
    <div>
      <Swiper
        style={{
          width: "100%",
          paddingTop: "25px",
          paddingBottom: "50px",
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-[url('/project_bg/getpaid.png')] min-h-full text-center rounded-lg">
            <div className="pt-60 text-4xl flex justify-center gap-10 ">
              <a
                href="https://www.getpaid.asia/"
                className="text-gray-300 hover:text-teal-400"
                target="blank"
              >
                <MdOpenInNew />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-[url('/project_bg/goldenrizz.png')] min-h-full text-center rounded-lg">
            <div className="pt-60 text-4xl flex justify-center gap-10 ">
              <a
                href="https://github.com/EternalDoritos/cinema-booking-system"
                className="text-gray-300 hover:text-teal-400"
                target="blank"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-[url('/project_bg/appetizer.png')] min-h-full text-center rounded-lg">
            <div className="pt-60 text-4xl flex justify-center gap-10 ">
              <a
                href="https://github.com/D2HD/getgoing-application"
                className="text-gray-300 hover:text-teal-400"
                target="blank"
              >
                <AiFillGithub />
              </a>
              {/* <a href="#" target="blank">
                <MdOpenInNew />
              </a> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-[url('/project_bg/ninjavan.png')] min-h-full text-center rounded-lg">
            <div className="pt-60 text-4xl flex justify-center gap-10 ">
              <a
                href="https://github.com/mcbebu/D2HD"
                className="text-gray-300 hover:text-teal-400"
                target="blank"
              >
                <AiFillGithub />
              </a>
              {/* <a href="#" target="blank">
                <MdOpenInNew />
              </a> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-[url('/project_bg/csit.png')] min-h-full text-center rounded-lg">
            <div className="pt-60 text-4xl flex justify-center gap-10 ">
              <a
                href="https://github.com/EternalDoritos/RoomBookingApplication"
                className="text-gray-300 hover:text-teal-400"
                target="blank"
              >
                <AiFillGithub />
              </a>
              <p></p>
              {/* <a href="#" target="blank">
                <MdOpenInNew />
              </a> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="w-80 min-h-full bg-center bg-cover"
          style={{ width: "600px", height: "300px" }}
        >
          <div className=" bg-slate-500 opacity-50 min-h-full text-center rounded-lg">
            <div className=" pt-32">
              <h1 className=" text-3xl font-semibold text-black">
                Coming Soon...
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
const ProjectCarouselMobile = () => {
  return (
    <>
      <div>
        <Swiper
          style={{
            width: "100%",
            paddingTop: "25px",
            paddingBottom: "50px",
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-[url('/project_bg_mobile/getpaid.png')] min-h-full text-center rounded-lg drop-shadow-sm">
              <div className="pt-60 text-4xl flex justify-center gap-10 ">
                <a
                  href="https://www.getpaid.asia/"
                  className="text-gray-300 hover:text-teal-400"
                  target="blank"
                >
                  <MdOpenInNew />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-[url('/project_bg_mobile/goldenrizz.png')] min-h-full text-center rounded-lg">
              <div className="pt-60 text-4xl flex justify-center gap-10 text-yellow-400">
                <a
                  href="https://github.com/EternalDoritos/cinema-booking-system"
                  className="text-gray-300 hover:text-teal-400"
                  target="blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-[url('/project_bg_mobile/ninjavan.png')] min-h-full text-center rounded-lg">
              <div className="pt-60 text-4xl flex justify-center gap-10 text-yellow-400">
                <a
                  href="https://github.com/mcbebu/D2HD"
                  className="text-gray-300 hover:text-teal-400"
                  target="blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-[url('/project_bg_mobile/appetizer.png')] min-h-full text-center rounded-lg">
              <div className="pt-60 text-4xl flex justify-center gap-10 ">
                <a
                  href="https://github.com/D2HD/getgoing-application"
                  target="blank"
                  className="text-gray-300 hover:text-teal-400"
                >
                  <AiFillGithub />
                </a>
                {/* <a href="#" target="blank">
                  <MdOpenInNew />
                </a> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-[url('/project_bg_mobile/csit.png')] min-h-full text-center rounded-lg">
              <div className="pt-60 text-4xl flex justify-center gap-10 text-yellow-400">
                <a
                  href="https://github.com/EternalDoritos/RoomBookingApplication"
                  className="text-gray-300 hover:text-teal-400"
                  target="blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-80 min-h-full bg-center bg-cover"
            style={{ width: "300px", height: "300px" }}
          >
            <div className=" bg-slate-500 opacity-50 min-h-full text-center rounded-lg">
              <div className=" pt-32">
                <h1 className=" text-3xl font-semibold  text-black">
                  Coming Soon...
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
const ProjectCarousel = () => {
  const isInitialRequestLessThan700 = useMediaQuery("(min-width:700px)");
  if (!isInitialRequestLessThan700) {
    return <ProjectCarouselMobile />;
  } else {
    return <ProjectCarouselWeb />;
  }
};

export default ProjectCarousel;
