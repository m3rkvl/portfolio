import Image from "next/image";

import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import mail from "../images/mail.svg";
import ToolTip from "./UI/ToolTip";

interface SocialsProps {
  absolute?: boolean;
}

const Socials = ({ absolute = true }: SocialsProps) => {
  return (
    <address
      className={`flex gap-4  ${
        absolute ? "absolute bottom-2 left-1/2 -translate-x-1/2 z-50" : ""
      }`}
    >
      <ToolTip name="LinkedIn">
        <a
          href="https://www.linkedin.com/in/murat-erkal-6270451b6/"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-full block"
        >
          <Image
            alt="social link"
            src={linkedin}
            height={24}
            className="cursor-pointer select-none rounded-full brightness-75 contrast-200 dark:contrast-100 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-200 hover:scale-[1.1]"
          />
        </a>
      </ToolTip>
      <ToolTip name="Github">
        <a
          href="https://github.com/m3rkvl"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-full block"
        >
          <Image
            alt="social link"
            src={github}
            height={24}
            className="cursor-pointer select-none border contrast-150 dark:contrast-50 border-transparent hover:border-zinc-700 rounded-full brightness-75 grayscale hover:grayscale-0 hover:brightness-125 transition-all hover:contrast-100 dark:hover:contrast-150 duration-200 hover:scale-[1.1]"
          />
        </a>
      </ToolTip>
      <ToolTip name="Email.">
        <a
          href="mailto:half-hour@outlook.com"
          rel="noopener noreferrer"
          target="_blank"
          className="rounded-full block"
        >
          <Image
            alt="social link"
            src={mail}
            height={24}
            className="cursor-pointer contrast-200 dark:contrast-100 select-none rounded-full brightness-75  grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-200 hover:scale-[1.1]"
          />
        </a>
      </ToolTip>
    </address>
  );
};

export default Socials;
