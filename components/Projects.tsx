import { motion } from "framer-motion";

import Project from "./Project";

type projects = {
  props: {
    title: string;
    desc: string;
    img: string;
    link: string;
    gitLink: string;
    tech: string[];
  }[];
};

const Projects = ({ props }: projects) => {
  return (
    <section
      id="projects"
      className="w-full bg-zinc-200 dark:bg-zinc-900 py-24 flex flex-col items-center"
    >
      <header className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="dark:text-zinc-600 text-zinc-400 select-none text-base font-bold mb-2 tracking-widest"
        >
          P R O J E C T S
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="indieFont text-lg select-none text-zinc-600 dark:text-zinc-300"
        >{`That I've been working on`}</motion.p>
      </header>

      <ul className="flex flex-col gap-16 my-16">
        {props?.map((prop, i) => (
          <li key={i}>
            <Project project={prop} last={props.length - 1} ind={i} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
