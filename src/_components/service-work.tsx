import Image from "next/image";
import React from "react";
import Button from "./buttons"
import { BsArrowRight } from "react-icons/bs";

const ServiceWork = () => {
    return ( 
        <>
            <div className="w-[424px] h-[452px] flex-col rounded-md bg-brand-white">
                <div>
                    <Image src='/images/project1.png' alt="project1" className="object-contain" width={424} height={332}/>
                </div>
                <div className="text-brand-primary w-full p-6 group">
                    <p className="text-2xl">Eduguard - E-Learning Website</p>
                    <Button className="flex items-center text-sm">
                        <span className="hidden font-bold  group-hover:inline-block group-hover:text-brand-secondary">View Project</span>
                        <BsArrowRight size={28} className="group-hover:text-brand-secondary"/>
                    </Button>
                </div>
            </div>
        </>
     );
}
 
export default ServiceWork;