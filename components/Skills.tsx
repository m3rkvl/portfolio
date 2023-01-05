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
  const durationAmount = 0.25;
  const initDelay = 3;
  const delayAmount = 0.25;

  return (
    <section
      id="skills"
      className="w-full py-24 skillsBg justify-center px-8 flex flex-col items-center gap-12 bg-skills-light dark:bg-skills-dark"
    >
      <header>
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.25 }}
          className="flex flex-col gap-1 items-center"
        >
          <span className="dark:text-zinc-600 text-zinc-400 select-none cursor-default text-base font-bold tracking-widest flex gap-4">
            F A M I L I A R <span>W I T H</span>
          </span>
          <span className="dark:text-zinc-700 mdb:hidden text-zinc-300 select-none cursor-default text-sm italic -mt-1">
            You can hover on the logos to see the names
          </span>
        </motion.h2>
      </header>

      <ul className="flex flex-wrap justify-center gap-6">
        <motion.li
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: durationAmount,
            delay: initDelay + delayAmount * 1,
          }}
        >
          <ToolTip name="HTML5">
            <Image
              src={html}
              alt="HTML5 logo"
              height={32}
              className="skillLogo"
            />
            <p className="techName">HTML5</p>
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
            <p className="techName">CSS3</p>
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
              alt="SCSS logo"
              height={32}
              className="skillLogo"
            />
            <p className="techName">SCSS</p>
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
            <p className="techName">Tailwind CSS</p>
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
            <p className="techName">JavaScript</p>
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
            <p className="techName">TypeScript</p>
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
            <p className="techName">React</p>
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
            <p className="techName">Next.js</p>
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
            <p className="techName">Redux</p>
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
            <p className="techName">Firebase</p>
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
            <p className="techName">Figma</p>
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
            <p className="techName">Photoshop</p>
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
            <p className="techName">Netlify</p>
          </ToolTip>
        </motion.li>
      </ul>
    </section>
  );
};

export default Skills;
