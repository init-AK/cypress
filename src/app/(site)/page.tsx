import TitleSection from "@/src/components/landing-page/title-sections"; // Imported from custom built components
import React from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Banner from '../../../public/appBanner.png'

const HomePage = () => {
  return (
    <section>
      <div
        className="overflow-hidden 
      px-4 
      sm:px-6 
      mt-10 
      sm:flex 
      sm:flex-col 
      gap-4 
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[300px]">
          <Button
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
            variant="secondary"
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
            <Image src={Banner} alt="Application Banner"/>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
