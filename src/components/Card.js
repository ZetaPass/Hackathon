import { Button } from "@mui/material";

export function Card({ text, description }) {
  return (
    <div className="relative h-[19.94rem] w-[23.31rem] shrink-0 overflow-hidden rounded-small shadow-[-24px_20px_20px_rgba(0,_0,_0,_0.45)] [background:linear-gradient(-53.82deg,_rgba(0,_0,_0,_0.25),_rgba(255,_255,_255,_0.25))] [backdrop-filter:blur(25px)]">
      <img
        className="absolute top-[1rem] left-[1.38rem] h-[12.75rem] w-[20.63rem] rounded-small object-cover"
        alt=""
        src="../rectangle-6@2x.png"
      />
      <div className="absolute bottom-[2.06rem] left-[1.38rem] inline-block h-[2.81rem] w-[7.5rem]">
        {text}
      </div>
      <Button
        className="text-2xlborder-secondaryGradient absolute right-[1.31rem] bottom-[2.06rem] h-[2.81rem] w-[8.5rem] rounded-full border-4 text-white"
        variant="outlined"
        text="outlined"
        textTransform="none"
      >
        {description}
      </Button>
    </div>
  );
}
