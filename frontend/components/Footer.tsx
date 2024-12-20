import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import { ShimmerButton } from "./aceternityUi/ShimmerButton"

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 " id="contact">
      {/* background grid */}
      <div className="w-full absolute -z-10 left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center text-white">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Ready to take <span className="text-purple">your</span> salary
          solution to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Connect and experience the luxury of an efficient running business
        </p>
        <ShimmerButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          Copyright © 2024 Hyoouka
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;