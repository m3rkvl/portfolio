import Image from "next/image";
import html from "../images/skills/html.svg";
import css from "../images/skills/css.svg";
import sass from "../images/skills/sass.svg";
import tailwind from "../images/skills/tailwind.svg";
import javascript from "../images/skills/javascript.svg";
import typescript from "../images/skills/typescript.svg";
import react from "../images/skills/react.svg";
import next from "../images/skills/next.svg";
import redux from "../images/skills/redux.svg";
import firebase from "../images/skills/firebase.svg";
import figma from "../images/skills/figma.svg";
import photoshop from "../images/skills/photoshop.svg";
import netlify from "../images/skills/netlify.svg";
import ToolTip from "./UI/ToolTip";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-zinc-800 w-full py-24 justify-center px-8 flex flex-col dark:bg-opacity-100 bg-opacity-25 items-center gap-10 skillsSection"
    >
      <header>
        <h2 className="text-zinc-600 select-none cursor-default text-base font-bold tracking-widest flex gap-4">
          F A M I L I A R <span>W I T H</span>
        </h2>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        <ToolTip name="HTML5">
          <Image
            src={html}
            alt="HTML5 logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>

        <ToolTip name="CSS">
          <Image src={css} alt="CSS logo" height={32} className="skillLogo" />
        </ToolTip>
        <ToolTip name="SCSS">
          <Image src={sass} alt="Sass logo" height={32} className="skillLogo" />
        </ToolTip>
        <ToolTip name="Tailwind">
          <Image
            src={tailwind}
            alt="Tailwind logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="JavaScript">
          <Image
            src={javascript}
            alt="JavaScript logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="TypeScript">
          <Image
            src={typescript}
            alt="TypeScript logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="React">
          <Image
            src={react}
            alt="React logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="Next.js">
          <Image
            src={next}
            alt="Next.js logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="Redux">
          <Image
            src={redux}
            alt="Redux logo"
            height={32}
            className="skillLogo grayscale brightness-200"
          />
        </ToolTip>
        <ToolTip name="Firebase">
          <Image
            src={firebase}
            alt="Firebase logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="Figma">
          <Image
            src={figma}
            alt="Figma logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="Photoshop">
          <Image
            src={photoshop}
            alt="Photoshop logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
        <ToolTip name="Netlify">
          <Image
            src={netlify}
            alt="Netlify logo"
            height={32}
            className="skillLogo"
          />
        </ToolTip>
      </div>
    </section>
  );
};

export default Skills;
