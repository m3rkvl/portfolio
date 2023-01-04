const MoreAboutMe = () => {
  return (
    <section
      id="moreAboutMe"
      className="bg-zinc-800 relative w-full py-24 justify-center px-8 flex flex-col items-center gap-10 moreSection bg-opacity-50 xs:px-3"
    >
      <header>
        <h2 className="dark:text-zinc-600 text-zinc-400 select-none relative z-10 text-base font-bold tracking-widest flex gap-4">
          M O R E <span>A B O U T</span> <span>M E</span>
        </h2>
      </header>
      <div className="text-zinc-300 cursor-default relative z-10 flex flex-col gap-6 w-1/2 lg:w-3/4 slg:text-sm slg:w-full text-center">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-200">
            Hi again! I&apos;m Murat Erkal.{" "}
          </h3>
          <span className="text-sm text-zinc-400 font-normal">
            As you know by now.
          </span>
        </div>
        <p className="selection:text-zinc-100 selection:bg-teal-500 selection:bg-opacity-25 selection:backdrop-blur-sm">
          I thought of <span className="text-teal-500">coding</span> as this
          mysterious and scary alien-tech that I would never be able to learn.
          Recently that changed, and here we are... I love learning new
          technologies and building useful apps with them. The challenges coding
          brings and the process of overcoming those challenges has evolved into
          a passion in which I lose the track of time for me.
        </p>
        <p className="selection:text-zinc-100 selection:bg-purple-500 selection:bg-opacity-25 selection:backdrop-blur-sm">
          I&apos;ve been interested in{" "}
          <span className="text-purple-500">design</span> for many years now. I
          designed clothing, websites, logos, characters, vehicles etc. I love
          imagining things and turning them into some form of reality.
        </p>
        <p className="selection:text-zinc-100 selection:bg-amber-500 selection:bg-opacity-25 selection:backdrop-blur-sm">
          Also, I live and breathe <span className="text-amber-500">music</span>
          . Any time of the day you&apos;ll most probably find me listening to
          music. No matter what I&apos;m doing... I also love making music. Very
          much amateurly, but still I love it.
        </p>
        <p className="selection:text-zinc-100 selection:bg-blue-500 selection:bg-opacity-25 selection:backdrop-blur-sm">
          Lastly, I&apos;m an{" "}
          <span className="text-blue-500">English teacher</span>. I absolutely
          loved teaching and interecting with my students. It was an experience
          that I&apos;ll forever be grateful for.
        </p>
      </div>
    </section>
  );
};

export default MoreAboutMe;
