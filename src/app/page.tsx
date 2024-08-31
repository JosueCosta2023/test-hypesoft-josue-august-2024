import Button from "@/_components/buttons";
import Header from "@/_components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative ">  
        <Header />
      <div className="absolute bg-brand-sec w-[40%] h-[1080px] right-0 top-0 z-[-1]"></div>
      <div className="mx-auto flex justify-between w-[1320px] max-w-[100%] h-[974px]  mt-3">
        <div className="relative">
          <div className="absolute mt-60 w-[758px]">
            <h2 className="text-7xl mb-3">Hello, I'm John, a</h2>
            <span className="text-7xl text-brand-sec">Software Enginer</span>
            <p className="text-xl mb-8 mt-8 w-[653px] text-brand-gray500">Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</p>

            <div className="flex gap-4 font-bold">
              <Button children="Hire Me" className="text-brand-white bg-brand-sec text-sm"/>
              <Button children="View Works" className="text-brand-primary bg-brand-white text-sm"/>
            </div>
          </div>
        </div>
        <Image src={"/images/perfil.png"} alt="Foto de perfil" width={870} height={974}/>
      </div>
    </div>
  );
}
