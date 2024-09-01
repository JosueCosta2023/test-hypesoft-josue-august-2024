import React from "react";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const CompanyLogo = () => {
  return (
    <>
      <div className="w-[312px] mx-[74px] text-center lg:text-left">
        <p className="text-[32px] text-brand-white ">
          I worked with <span className="text-brand-secondary">289+</span>
          <br/>
          Companies all over the World.
        </p>
      </div>

      <div className=" w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="w-flex-1 h-[120px] bg-brand-white flex justify-center items-center rounded-md">
          <Image
            src="/images/Group 7.svg"
            width={100}
            height={35}
            alt="company 1"
            className="object-contain"
          />
        </div>

        <div className="w-flex-1 h-[120px] bg-brand-white flex justify-center items-center rounded-md">
          <Image
            src="/images/Group 8.svg"
            width={100}
            height={35}
            alt="company 1"
            className="object-contain"
          />
        </div>

        <div className="w-flex-1 h-[120px] bg-brand-white flex justify-center items-center rounded-md">
          <Image
            src="/images/adobe-44195.svg"
            width={100}
            height={35}
            alt="company 1"
            className="object-contain"
          />
        </div>

        <div className="w-flex-1 h-[120px] bg-brand-white flex justify-center items-center rounded-md">
          <Image
            src="/images/sketch-1.svg"
            width={100}
            height={35}
            alt="company 1"
            className="object-contain"
          />
        </div>

        <div className="w-flex-1 h-[120px] bg-brand-white flex justify-center items-center rounded-md cursor-pointer hover:text-brand-sec">
          <BsArrowRight size={48}/>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
