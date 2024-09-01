import Image from "next/image";
import Button from "./buttons";

import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="text-brand-white flex flex-col lg:flex-row mx-auto w-full max-w-[1320px] h-auto lg:h-[795px] py-8 lg:py-0 mt-8"
    >
      {/** Image side */}
      <div className="w-full lg:w-[40%] h-auto lg:h-full flex justify-center items-center mb-8 lg:mb-0">
        <div className="w-full mb-6 max-w-[80%] md:w-[560px] h-auto max-h-[100%] lg:mb-0">
          <Image
            src="/images/softEngine.png"
            alt="Serviços"
            width={460}
            height={442}
            className="shadow-[21px_23px_1px_0px_#f7fafc] rounded-lg object-contain"
          />
        </div>
      </div>

      {/** Info side */}
      <div className="w-full lg:w-[60%] h-auto lg:h-full flex justify-center items-center">
        <div className="w-full max-w-[672px] h-auto flex flex-col justify-center items-center lg:items-start lg:justify-start">
          <div className="h-auto lg:h-[300px] mb-8 flex flex-col text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-5">
              Software Engineer and Infrastructure specialist based in Brazil.
            </h2>
            <p className="text-base md:text-lg lg:text-[18px] font-normal text-brand-gray500">
              Morbi quam velit, euismod in imperdiet vitae, elementum et elit.
              Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna
              feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat
              ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean
              venenatis sapien et interdum interdum.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-x-[50px] items-center mb-8">
            <div className="flex gap-3 items-center">
              <span className="text-4xl md:text-5xl text-brand-secondary">
                17+
              </span>
              <p className="w-auto md:w-[80px]">Years of Experience</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-4xl md:text-5xl text-brand-secondary">
                325+
              </span>
              <p className="w-auto md:w-[80px]">Completed Projects</p>
            </div>
          </div>
          <Button className="bg-brand-sec text-brand-white font-bold hover:text-brand-sec hover:bg-brand-white">
            Say Hi
            <BsArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
