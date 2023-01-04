import Image from "next/image";
import Tilt from "react-parallax-tilt";

import giveGradient from "../util/giveGradient";
import giveTechBg from "../util/giveTechBg";

type projectType = {
  project: {
    title: string;
    desc: string;
    img: string;
    link: string;
    gitLink: string;
    tech: string[];
  };
  ind: number;
  last: number;
};

const Project = ({ project, ind, last }: projectType) => {
  const title = project.title.split(".")[0];
  const namespace = "." + project.title.split(".")[1];

  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={2000}
      glareColor={"rgba(255,255,255, .02)"}
      glareBorderRadius="12px"
      glarePosition="all"
      className="rounded-xl tiltEffect"
    >
      <article
        className={`w-[64rem] lg:w-full lg:flex-col lg:gap-4 lg:items-center flex justify-between gap-16 p-6  ${
          ind % 2 === 0 ? "" : "flex-row-reverse"
        }`}
      >
        <div className="relative flex-shrink-0">
          <div
            className={`absolute -inset-0.5 opacity-50 rounded-xl blur animate-tilt ${giveGradient(
              title
            )}`}
          ></div>
          <div className="overflow-hidden rounded-2xl border-2 border-zinc-100 border-opacity-[.1]">
            <Image
              src={`/${project.img}.webp`}
              alt={`Cover image for ${project.title}`}
              width={1200}
              height={800}
              className="h-96 w-auto mdb:h-full object-contain relative select-none rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <div className="flex items-end">
            <h3
              className={`text-4xl cursor-default font-bold leading-[48px] text-transparent bg-clip-text ${giveGradient(
                title
              )}`}
            >
              {title}
            </h3>
            <span className="text-2xl cursor-default mb-[4px] italic font-normal dark:text-zinc-400 text-zinc-600">
              {namespace}
            </span>
          </div>
          <ul className="flex gap-2 mt-3 lg:mt-2">
            {project.tech.map((tech, i) => (
              <li key={i} className={`${giveTechBg(tech)} select-none`}>
                {tech}
              </li>
            ))}
          </ul>
          <p className="dark:text-zinc-200 text-zinc-600 lg:w-2/3 smb2:w-full lg:mt-4 xs:text-sm lg:text-center cursor-default mt-6">
            {project.desc}
          </p>
          <div className="flex gap-6 mt-8 lg:mt-6 text-lg items-center parallaxBtns">
            <div className="relative group">
              <div
                className={`animate-customPing pointer-events-none absolute h-full w-full rounded-full blur ${giveGradient(
                  title
                )}`}
              ></div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 py-1 px-6 rounded-full overflow-hidden dark:bg-zinc-100 bg-zinc-900 bg-opacity-25 dark:bg-opacity-25 backdrop-blur-sm border dark:border-zinc-400 border-zinc-500 dark:text-zinc-100 text-zinc-900 hover:after:opacity-100 transition duration-200 cursor-pointer dark:hover:text-zinc-900 hover:text-zinc-100 after:rounded-full after:absolute after:inset-0 dark:after:bg-zinc-100 after:bg-zinc-900 after:opacity-0 after:transition after:duration-200"
              >
                <span className="relative z-20 select-none pointer-events-none">
                  LIVE
                </span>
              </a>
            </div>
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-6 dark:text-zinc-100 text-zinc-900 select-none rounded-full border-b dark:border-zinc-100 border-zinc-900 opacity-75 hover:opacity-100 transition duration-200 cursor-pointer"
            >
              CODE
            </a>
          </div>
        </div>
      </article>
    </Tilt>
  );
};

export default Project;

/*
ARTICLE CLASSLIST
className={`w-[64rem] flex justify-between gap-16 p-6 bg-zinc-800 bg-opacity-30 border border-zinc-700 border-opacity-30 shadow-bg rounded-xl hover:border-opacity-50 ${
          ind % 2 === 0 ? "" : "flex-row-reverse"
        }`}
*/
