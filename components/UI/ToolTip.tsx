import { FC } from "react";

interface ToolTipProps {
  children: React.ReactNode;
  name: string;
}

const ToolTip: FC<ToolTipProps> = (props) => {
  return (
    <div
      tabIndex={0}
      className="group outline-none p-1 focus:bg-zinc-700 focus:bg-opacity-50 rounded-md relative inline-block"
    >
      <div>
        {props.children}
        <div className="opacity-0 select-none bg-zinc-900 text-zinc-100 text-center text-xs font-bold rounded-lg py-2 absolute z-10 group-focus:opacity-100 group-hover:opacity-100 bottom-[125%] left-1/2 -translate-x-1/2 px-3 pointer-events-none">
          {props.name}
          <svg
            className="absolute text-zinc-900 h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
