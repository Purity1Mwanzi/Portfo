import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import { exprojects } from "./Projects/config";
import { SiFigma } from "react-icons/si";
import { openInNewTab } from "./helper";
import { Badge } from "./Badge";

export default function Writing() {
  return (
    <SectionLayout className="w-full items-start  ">
      <div className="md:max-w-2/3 mx-auto flex flex-col items-center space-y-11   ">
        <SubHeading>
          projects
        </SubHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exprojects.map((item) => (
            <div className="" key={item.id}>
              <div className=" p-6 " >
                {/* Project content */}
                <div className="relative h-72 border-radius:18px">
                  <img
                    src={item.img}
                    alt="Project Image"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold ">{item.title}</h3>
                  <p className="mt-2 text-sm ">
                    {item.des}
                  </p>
                </div>
              
              </div>
              
            </div>

          ))}

        </div>



      </div>
      <Float config={projects} />
    </SectionLayout>
  );
}
