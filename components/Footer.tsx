import { motion } from "framer-motion";

import Socials from "./Socials";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 1 }}
      className="relative p-10 flex bg-zinc-200 dark:bg-zinc-900 flex-col items-center gap-3"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="dark:text-zinc-200 text-zinc-800 text-center select-none text-2xl flex flex-wrap justify-center items-center">
          Would love to connect <span className="text-red-500">&nbsp;❤</span>
        </h2>
        <h3 className="select-none indieFont dark:text-zinc-400 text-zinc-600">
          Let&apos;s get in touch!
        </h3>
      </div>
      <Socials absolute={false} />
      <a
        href="#"
        className="absolute select-none bottom-2 left-1/2 -translate-x-1/2 dark:text-zinc-100 text-zinc-900 dark:opacity-25 opacity-50 hover:opacity-100 dark:hover:opacity-100 transition duration-200"
      >
        Back to top &uarr;
      </a>
    </motion.footer>
  );
};

export default Footer;
