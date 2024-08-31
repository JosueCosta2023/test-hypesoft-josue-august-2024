import Image from "next/image";
import Button from "./buttons";
import { BiArrowFromLeft } from "react-icons/bi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <section className="text-brand-white uppercase flex z-10 mx-auto w-[1320px] max-w-[100%] h-[795px] max-h-[full]  ">
      {/**Image side */}
      <div className="w-[40%] h-[100%] justify-center flex items-center">
        <div className="w-[560px] h-[542px] max-w[100%] max-h-[100%]">
          <Image
            src="/images/softEngine.png"
            alt="Serviços"
            width={560}
            height={542}
            className="shadow-[21px_23px_1px_0px_#f7fafc] rounded-lg"
          />
        </div>
      </div>

      {/**Info side */}
      <div className="w-[60%] h-[100%]  flex justify-center items-center">
        <div className="w-[672px] h-[484px] ">
          <div className="h-[300px] mb-8">
            <h2 className="text-5xl font-medium mb-5">
              Software Engineer and Infrastructure specialist based in Brazil.
            </h2>
            <p className="text-sm font-normal text-brand-gray500">
              Morbi quam velit, euismod in imperdiet vitae, elementum et elit.
              Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna
              feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat
              ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean
              venenatis sapien et interdum interdum.
            </p>
          </div>

          <div className="flex gap-x-[50px] items-center mb-8">
            <div className="flex gap-3">
              <span className="text-5xl text-brand-secondary">17+</span>
              <p className="w-[80px]">Years of Experience</p>
            </div>
            <div className="flex gap-3">
              <span className="text-5xl text-brand-secondary">325+</span>
              <p className="w-[80px] "> Completed Projects</p>
            </div>
          </div>
          <Button className="bg-brand-sec text-brand-white flex items-center gap-3 hover:bg-brand-white hover:text-brand-sec font-bold">
            Say Me
            <BsArrowRight size={20}/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
