import React from "react";

interface TitleSectionProps {
  //Interace is TS helps define the shape of the object
  title: string;
  subheading?: string; //? indicates that the subheading is optional
  pill: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill,
}) => {
  return (
    <React.Fragment>
      <section className="flex flex-col gap-4 justify-center items-start md:items-center">
        <article className="rounded-full p-[1px] text-sm dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple">
          <div className="rounded-full px-3 py-1 dark:bg-black">{pill}</div>
        </article>
        {subheading ? (
          <>
            <h2 className="text-left text-3xl sm:text-5xl sm:max-w-[750px] md:text-center font-semibold">
              {title}
            </h2>
            <p className="dark:text-washed-purple-700 sm:max-w-[450px] md:text-center">
              {subheading}
            </p>
          </>
        ) : (
          <h1 className="text-left text-4xl sm:text-6xl sm:max-w-[850px] md:text-center font-semibold ">
            {title}
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default TitleSection;

//<> </>    THIS IS A REACT FRAGMENT - you can use multile tags inside this fragment and return them as 1 . REACT ELEMENTS MUST ALWAYS RETURN A SINGLE ROOT ELEMENT. THIS IS BASICALLY INVISIBLE.
