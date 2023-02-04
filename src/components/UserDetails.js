export function UserDetails() {
  return (
    <div className="mr-11 box-border flex h-[61.38rem] w-5/6 flex-col items-start justify-start overflow-y-auto border-r-[1px] border-solid border-darkslategray bg-gray-300 px-[2.81rem] pt-[1.88rem]  text-[1rem] shadow-[14px_0px_30px_rgba(0,_0,_0,_0.5)] scrollbar-hide">
      <div className="relative h-[58.56rem] w-[16.38rem] shrink-0 overflow-y-auto scrollbar-hide">
        <div className="absolute top-[0rem] left-[0rem] h-[15.25rem] w-[16.38rem] overflow-hidden rounded-base text-[1.25rem]">
          <img
            className="absolute top-[0rem] right-[0rem] left-[0rem] h-[7.69rem] w-full max-w-full overflow-hidden"
            alt=""
            src="../ellipse-1.svg"
          />
          <img
            className="absolute top-[3.44rem] left-[calc(50%_-_50px)] h-[6.25rem] w-[6.25rem] object-cover"
            alt=""
            src="../ellipse-12@2x.png"
          />
          <b className="absolute top-[10.75rem] left-[calc(50%_-_53px)]">
            User name
          </b>
          <div className="absolute top-[12.31rem] left-[calc(50%_-_40px)] text-[0.88rem] font-light">
            Designation
          </div>
        </div>
        <div className="absolute top-[16.13rem] left-[0rem] flex h-[31.06rem] w-[16.38rem] flex-col items-center justify-start gap-[0.31rem] overflow-hidden rounded-base">
          <div className="flex flex-row items-start justify-start self-stretch rounded-base hover:cursor-pointer hover:bg-white hover:text-black">
            <div className="box-border flex w-[16.38rem] shrink-0 flex-row items-start justify-start gap-[1.25rem] rounded-base  py-[1.13rem] pr-[2.5rem] pl-[0.94rem]">
              <img
                className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
                alt=""
                src="../icon.svg"
              />
              <div className="relative">Home</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.25rem] self-stretch rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
              alt=""
              src="../icon.svg"
            />
            <div className="relative">Courses</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.25rem] self-stretch rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
              alt=""
              src="../icon.svg"
            />
            <div className="relative">Events</div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[1.25rem] self-stretch rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
              alt=""
              src="../icon.svg"
            />
            <div className="relative">Blogs</div>
          </div>
        </div>
        <div className="absolute top-[48.06rem] left-[0rem] flex w-[16.38rem] flex-col items-center justify-center overflow-hidden rounded-base">
          <div className="box-border flex w-[16.38rem] flex-row items-start justify-start gap-[1.25rem] rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden hover:cursor-pointer hover:bg-white hover:text-black"
              alt=""
              src="../icon4.svg"
            />
            <div className="relative">Settings</div>
          </div>
          <div className="box-border flex w-[16.38rem] flex-row items-start justify-start gap-[1.25rem] rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
              alt=""
              src="../icon4.svg"
            />
            <div className="relative">Services</div>
          </div>
          <div className="box-border flex w-[16.38rem] flex-row items-start justify-start gap-[1.25rem] rounded-base bg-gray-200 py-[1.13rem] pr-[2.5rem] pl-[0.94rem] hover:cursor-pointer hover:bg-white hover:text-black">
            <img
              className="relative h-[1.25rem] w-[1.25rem] shrink-0 overflow-hidden"
              alt=""
              src="../icon4.svg"
            />
            <div className="relative">{`Help & FAQs`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
