import React from "react";

type Props = {
  title: string;
  eyebrow: string;
  description: string;
};

const SectionHeader = ({ title, eyebrow, description }: Props) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="gradient-text md:text-md text-center font-semibold uppercase tracking-widest">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
        {title}
      </h2>
      <p className="secondary-text-color mx-auto mt-4 max-w-md text-center md:text-lg lg:text-xl">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
