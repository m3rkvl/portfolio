import { motion } from "framer-motion";

const MoreAboutMe = () => {
  return (
    <section
      id="moreAboutMe"
      className="bg-zinc-800 relative skillsBg w-full py-24 justify-center px-8 flex flex-col items-center gap-4 bg-more-light dark:bg-more-dark bg-opacity-50 xs:px-3"
    >
      <header>
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="dark:text-zinc-600 text-zinc-400 select-none relative z-10 text-base font-bold tracking-widest flex gap-4"
        >
          M O R E <span>A B O U T</span> <span>M E</span>
        </motion.h2>
      </header>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.75 }}
        className="dark:text-zinc-300 text-zinc-500 cursor-default relative z-10 flex flex-col gap-6 w-1/2 lg:w-3/4 slg:text-sm slg:w-full text-center"
      >
        <div>
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
            Hi again! I&apos;m Murat Erkal.{" "}
          </h3>
          <span className="text-sm dark:text-zinc-400 text-zinc-600 font-normal">
            As you know by now.
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-teal-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          I thought of{" "}
          <span className="dark:text-teal-500 text-teal-600">coding</span> as
          this mysterious and scary alien-tech that I would never be able to
          learn. Recently that changed, and here we are... I love learning new
          technologies and building useful apps with them. The challenges coding
          brings and the process of overcoming those challenges has evolved into
          a passion in which I lose the track of time for me.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-purple-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          I&apos;ve been interested in{" "}
          <span className="text-purple-500">design</span> for many years now. I
          designed clothing, websites, logos, characters, vehicles etc. I love
          imagining things and turning them into some form of reality.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-amber-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          Also, I live and breathe{" "}
          <span className="dark:text-amber-500 text-amber-600">music</span>. Any
          time of the day you&apos;ll most probably find me listening to music.
          No matter what I&apos;m doing... I also love making music. Very much
          amateurly, but still I love it.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-blue-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          Lastly, I&apos;m an{" "}
          <span className="text-blue-500">English teacher</span>. I absolutely
          loved teaching English to and interacting with my students. It was an
          experience that I&apos;ll forever be grateful for.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MoreAboutMe;
