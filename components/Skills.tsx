import Image from "next/image";
import { motion } from "framer-motion";

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
  const durationAmount = 0.3;
  const initDelay = 3.25;
  const delayAmount = 0.2;

  return (
    <section
      id="skills"
      className="bg-zinc-800 w-full py-24 justify-center px-8 flex flex-col dark:bg-opacity-100 bg-opacity-25 items-center gap-10 skillsSection"
    >
      <header>
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.25 }}
          className="text-zinc-600 select-none cursor-default text-base font-bold tracking-widest flex gap-4"
        >
          F A M I L I A R <span>W I T H</span>
        </motion.h2>
      </header>

      <ul className="flex flex-wrap justify-center gap-6">
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: 3.5 + delayAmount * 1,
          }}
        >
          <ToolTip name="HTML5">
            <Image
              src={html}
              alt="HTML5 logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 2,
          }}
        >
          <ToolTip name="CSS">
            <Image src={css} alt="CSS logo" height={32} className="skillLogo" />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 3,
          }}
        >
          <ToolTip name="SCSS">
            <Image
              src={sass}
              alt="Sass logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 4,
          }}
        >
          <ToolTip name="Tailwind">
            <Image
              src={tailwind}
              alt="Tailwind logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 5,
          }}
        >
          <ToolTip name="JavaScript">
            <Image
              src={javascript}
              alt="JavaScript logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 6,
          }}
        >
          <ToolTip name="TypeScript">
            <Image
              src={typescript}
              alt="TypeScript logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 7,
          }}
        >
          <ToolTip name="React">
            <Image
              src={react}
              alt="React logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 8,
          }}
        >
          <ToolTip name="Next.js">
            <Image
              src={next}
              alt="Next.js logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 9,
          }}
        >
          <ToolTip name="Redux">
            <Image
              src={redux}
              alt="Redux logo"
              height={32}
              className="skillLogo grayscale brightness-200"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 10,
          }}
        >
          <ToolTip name="Firebase">
            <Image
              src={firebase}
              alt="Firebase logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 11,
          }}
        >
          <ToolTip name="Figma">
            <Image
              src={figma}
              alt="Figma logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 12,
          }}
        >
          <ToolTip name="Photoshop">
            <Image
              src={photoshop}
              alt="Photoshop logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 13,
          }}
        >
          <ToolTip name="Netlify">
            <Image
              src={netlify}
              alt="Netlify logo"
              height={32}
              className="skillLogo"
            />
          </ToolTip>
        </motion.li>
      </ul>
    </section>
  );
};

export default Skills;
