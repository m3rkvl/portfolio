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
          I believe{" "}
          <span className="dark:text-teal-500 text-teal-600">coding</span> and
          teaching are very similar in that both are ongoing learning routines
          in which seeing the results you were aiming for is one of the most
          gratifying experience. I love acquiring new technologies and building
          helpful apps with them. The process of overcoming the challenges
          inherent in coding has become a true love for me, one that consumes my
          time and attention almost completely.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-purple-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          I&apos;ve been fascinated with{" "}
          <span className="text-purple-500">design</span> for many years now.
          Conceptualizing ideas and bringing them to fruition of some sort have
          become a passion of mine.
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
          time of the day you&apos;ll most probably find me with with earbuds in
          my ears. I also have a great love for creating music, although I am
          very much an amateur.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.75 }}
          className="selection:text-zinc-100 selection:bg-blue-500 selection:bg-opacity-25 selection:backdrop-blur-sm"
        >
          As an <span className="text-blue-500">English teacher</span>, I have
          had the pleasure of teaching and interacting with many students, and
          it was an experience that I will always cherish and remember with
          gratitude.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MoreAboutMe;
