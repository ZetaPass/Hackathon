import { Card } from "../components/Card";
import { Logo } from "../components/Logo";
import { UserDetails } from "../components/UserDetails";

const UserDashboard = () => {
  return (
    <div className="relative h-[61.38rem] w-full overflow-y-auto text-left font-red-rose text-[1.5rem] text-white scrollbar-hide">
      <div className="absolute top-[0%] right-[0%] bottom-[-44.2%] left-[0%] h-[144.2%] w-full overflow-hidden bg-black">
        <img
          className="absolute top-[0rem] left-[0rem] h-[177.5rem] w-[90.06rem] overflow-hidden"
          alt=""
          src="../gradient-balls-bg.svg"
        />
        <div className="absolute top-[0%] right-[0%] bottom-[0%] left-[0%] h-full w-full">
          <div className="absolute top-[8.12%] bottom-[0%] left-[calc(50%_-_368px)] box-border flex h-[91.88%] w-[68rem] flex-col items-center justify-start gap-[2.81rem] overflow-y-auto py-[2.13rem] px-[0rem]">
            <div className="box-border flex h-[23.69rem] w-[67.75rem] shrink-0 flex-col items-start justify-center gap-[1.88rem] overflow-hidden py-[0rem] pr-[0rem] pl-[2.81rem]">
              <div className="relative h-[1.88rem] w-[65.06rem] shrink-0">
                <b className="absolute top-[0rem] left-[0rem]">Events</b>
                <div className="absolute top-[0rem] left-[56.25rem] text-right text-[0.88rem] text-royalblue">
                  View all
                </div>
              </div>
              <div className="flex w-[65.06rem] flex-1 flex-row items-center justify-start gap-[1.88rem] overflow-x-auto text-[2.5rem]">
                <Card text="Event" description={"Buy Ticket"} />
              </div>
            </div>
            <div className="box-border flex h-[23.69rem] w-[67.75rem] shrink-0 flex-col items-start justify-center gap-[1.88rem] overflow-hidden py-[0rem] pr-[0rem] pl-[2.81rem]">
              <div className="relative h-[1.88rem] w-[65.06rem] shrink-0">
                <b className="absolute top-[0rem] left-[0rem]">Courses</b>
                <div className="absolute top-[0rem] left-[56.25rem] text-right text-[0.88rem] text-royalblue">
                  View all
                </div>
              </div>
              <div className="flex w-[65.06rem] flex-1 flex-row items-center justify-start gap-[1.88rem] overflow-x-auto text-[2.5rem]">
                <Card text="Course" description={"Buy Course"} />
              </div>
            </div>
            <div className="box-border flex h-[23.69rem] w-[67.75rem] shrink-0 flex-col items-start justify-center gap-[1.88rem] overflow-hidden py-[0rem] pr-[0rem] pl-[2.81rem]">
              <div className="relative h-[1.88rem] w-[65.06rem] shrink-0">
                <b className="absolute top-[0rem] left-[0rem]">Courses</b>
                <div className="absolute top-[0rem] left-[56.25rem] text-right text-[0.88rem] text-royalblue">
                  View all
                </div>
              </div>
              <div className="flex w-[65.06rem] flex-1 flex-row items-center justify-start gap-[1.88rem] overflow-x-auto text-[2.5rem]">
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

export default UserDashboard;
