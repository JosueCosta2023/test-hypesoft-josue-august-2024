import React from "react";
import Button from "./buttons";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  service: {
    icone: string,
    titulo: string,
    categoria: string
  }
}

const Service = ({service}: ServiceProps) => {


  return (
    <>
      <div className="bg-brand-gray100 group w-[312px] h-[351px] hover:cursor-pointer rounded-md flex-col justify-start group-hover:bg-brand-secondary p-8">
        <Image 
          className="text-brand-primary fill-white  mb-24" 
          src={service.icone} 
          alt={service.titulo} 
          width={40} 
          height={40}
          />
        
        <div className=" flex flex-col text-brand-primary uppercase mb-3">
          <h3 className="text-[32px]">{service.titulo}</h3>
          <span className="text-[32px]">{service.categoria}</span>
          <span className="w-[80px] h-[3px] bg-brand-secondary"></span>
        </div>
        
        <Link href={"http://google.com"} target="_blank" className="text-brand-primary hover:bg-transparent gap-3 items-center group flex justify-start outline:none">
          <span className="hidden font-bold text-brand-primary group-hover:inline-block ml-2 group-hover:text-brand-secondary">
            Discuss Now
          </span>
          <BsArrowRight size={30} className="text-brand-primary group-hover:text-brand-secondary" />
        </Link>
      </div> 
    </>
  );
};

export default Service;
