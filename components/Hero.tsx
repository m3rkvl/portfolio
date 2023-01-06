import Image from "next/image";
import { motion } from "framer-motion";

import profile from "../images/profile.png";
import profileTr from "../images/profileTransparent.png";
import Socials from "./Socials";

const Hero = () => {
  const durationDef = 0.5;
  return (
    <section className="relative w-full py-[9rem] xxs:py-[5rem] px-28 lgb:px-4 dark:bg-zinc-900 bg-zinc-200 flex flex-col gap-4 items-center">
      <motion.article
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: durationDef, delay: 1 }}
        className="heroCard"
      >
        <div className="relative z-10 flex flex-col items-start gap-2 w-2/3 slg:w-full slg:items-center slg:text-center mx-10 mdb:mx-4 slg:mx-0">
          <h1 className="cursor-default select-none text-4xl mdb:text-3xl smb:text-2xl font-bold mb-2 smb2:text-xl">
            👋 Hey there! I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500">
              Murat
            </span>
            .
          </h1>
          <p className="cursor-default select-none text-2xl mdb:text-lg smb:text-base dark:text-zinc-400 text-zinc-800 leading-7 mb-4 mdb:mb-2 smb2:text-sm">
            A front end developer who also designs, <br /> teaches English and
            loves making music.
          </p>
          <a
            href="#moreAboutMe"
            className="underline select-none mdb:text-sm dark:text-zinc-400 text-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-300"
          >
            Read more
          </a>
        </div>
        <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={profile}
            alt="Murat Erkal's picture"
            width={224}
            priority
            className="select-none"
          />
        </div>
        <Socials />
      </motion.article>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: durationDef, delay: 1.5 }}
        className="flex gap-8 xs:gap-4"
      >
        <a
          href="#projects"
          className="py-2 px-12 mt-6 text-lg xs:px-8 dark:text-zinc-900 text-zinc-100 font-semibold bg-gradient-to-t from-zinc-900 to-zinc-900 dark:from-zinc-100 dark:to-zinc-100 rounded-full border border-zinc-100 relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-tr after:from-teal-500 after:via-blue-500 after:to-purple-500  after:opacity-0 hover:after:opacity-100 hover:after:translate-y-0 hover:border-zinc-200 after:transition-all after:duration-200 transition-all dark:hover:border-zinc-500 hover:text-zinc-100 duration-200"
        >
          <span className="relative pointer-events-none select-none z-10">
            Projects
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1WHvuelQf6MEqWBhESSshQKS11mHDY7-L/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
          className="py-2 px-12 mt-6 xs:px-8 text-lg font-semibold select-none dark:text-zinc-100 text-zinc-900  border dark:hover:text-zinc-200 hover:text-zinc-700 hover:border-zinc-500 border-zinc-900 dark:border-zinc-100 rounded-full dark:hover:border-zinc-500 transition-all duration-200"
        >
          Resume
        </a>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: durationDef, delay: 2.25 }}
        href="#skills"
        aria-label="Navigate down."
        title="Navigate down."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 absolute left-1/2 -translate-x-1/2 bottom-4 dark:text-zinc-100 text-zinc-900 animate-upDown transition duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;
