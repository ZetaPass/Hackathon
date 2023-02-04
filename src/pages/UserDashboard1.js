import React from "react";
import { Card } from "../components/Card";
import { Logo } from "../components/Logo";
import { UserDetails } from "../components/UserDetails";

const UserDashboard1 = () => {
  return (
    <div className="relative overflow-y-auto text-left font-red-rose text-white">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black">
        <img
          className="h-40vh w-45vw absolute top-0 left-0 overflow-hidden"
          alt=""
          src="../gradient-balls-bg.svg"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full">
          <div className="top-10% left-calc(50% - 368px / 16) h-60% w-43.75rem gap-1.75rem py-1.3rem absolute bottom-0 box-border flex flex-col items-center justify-start overflow-y-auto px-0">
            <div className="h-15rem w-43.44rem gap-1.5rem pl-1.75rem box-border flex shrink-0 flex-col items-start justify-center overflow-hidden py-0 pr-0">
              <div className="h-1.5rem w-41.25rem relative shrink-0">
                <b className="absolute top-0 left-0">Events</b>
                <div className="left-45.625rem text-0.875rem absolute top-0 text-right text-royalblue">
                  View all
                </div>
              </div>
              <div className="w-41.25rem gap-1.5rem text-2rem flex flex-1 flex-row items-center justify-start overflow-x-auto">
                <Card text="Event" description={"Buy Ticket"} />
              </div>
            </div>
            <div className="h-15rem w-43.44rem gap-1.5rem pl-1.75rem box-border flex shrink-0 flex-col items-start justify-center overflow-hidden py-0 pr-0">
              <div className="h-1.5rem w-41.25rem relative shrink-0">
                <b className="absolute top-0 left-0">Courses</b>
                <div className="left-45.625rem text-0.875rem absolute top-0 text-right text-royalblue">
                  View all
                </div>
              </div>
              <div className="w-41.25rem gap-1.5rem text-2rem flex flex-1 flex-row items-center justify-start overflow-x-auto">
                <Card text="Course" description={"Buy Course"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Logo />
      <UserDetails />
    </div>
  );
};

export default UserDashboard1;
