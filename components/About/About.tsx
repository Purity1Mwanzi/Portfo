import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size="sm" dark className="font-extrabold">
          a frontend developer with affinity for design, intuitive user
          experience and pixel-perfect user interfaces
        </Heading>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            {`I am a developer with  3+ years of professional development experience, holding a degree in Bachelor of Business & Information Technology from Africa Nazarene University.
            `}
          </p>

          <div className="w-full md:w-1/2">
            Currently, I am{" "}
            <span className="font-bold">focusing on software development and UI/UX design</span>. On a
            daily basis, I work with <MobileTechList />
            <TechList /> among others, in building and maintaining web
            applications and design systems —
            <span className="font-bold">all built from the ground up</span>.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
