import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

interface ServiceWorkProps {
    serviceWork: {
      imagem: string,
      empresa:string,
      titulo: string,
      link: string
    }
  }

const ServiceWork = ({serviceWork}: ServiceWorkProps) => {
    return ( 
        <>
            <div className="flex-1  flex-col rounded-md bg-brand-white">
                <div className="relative w-full h-[332px]">
                    <Image src={serviceWork.imagem} alt={serviceWork.titulo}  layout="fill" />
                </div>
                <div className="text-brand-primary w-full p-6 group">
                    <p className="text-2xl">{serviceWork.empresa} - {serviceWork.titulo}</p>
                    <Link href={serviceWork.link} target="_blank" className="flex  items-center text-sm gap-3">
                        <span className="hidden font-bold  group-hover:inline-block group-hover:text-brand-secondary">View Project</span>
                        <BsArrowRight size={28} className="group-hover:text-brand-secondary"/>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default ServiceWork;