import React from "react";
import { DiDatabase } from "react-icons/di";
import Button from "./buttons";
import { BsArrowRight } from "react-icons/bs";

const Service = () => {
  return (
    <>
      <div className="bg-brand-gray100 group w-[312px] h-[351px] hover:cursor-pointer rounded-md flex-col justify-start p-8">
        <DiDatabase
          size={40}
          className="text-brand-primary group-hover:text-brand-secondary mb-24"
        />
        <div className=" flex flex-col text-brand-primary uppercase mb-3">
          <h3 className="text-[32px]">ui/ux</h3>
          <span className="text-[32px]">Design</span>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>
        
        <Button className="text-brand-primary hover:bg-transparent group flex justify-start outline:none">
          <span className="hidden font-bold text-brand-primary group-hover:inline-block ml-2 group-hover:text-brand-secondary">
            Discuss Now
          </span>
          <BsArrowRight size={30} className="text-brand-primary group-hover:text-brand-secondary" />
        </Button>
      </div> 
    </>
  );
};

export default Service;
