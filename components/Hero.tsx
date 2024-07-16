import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";
import { FaDownload } from "react-icons/fa6";
import { Badge } from "./Badge";
import { openInNewTab } from "./helper";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Purity" />
          <SplitText text="Mwanzi" />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`A frontend developer who loves to work on
                the web. I am passionate about building simple
                and elegant solutions to complex problems.`}
        </p>
        <div className="mt=0">
          
          <Badge
            icon={<FaDownload />}
            onClick={() => openInNewTab("https://drive.google.com/file/d/1YR1pcGVLsXbz5g9qCSvf_kEkUFBYp3a6/view?usp=drive_link")}
            className="ml-1 "
          >
            Resume
          </Badge>
        </div>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}
