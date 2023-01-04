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
    <section id="projects" className="w-full py-24 flex flex-col items-center">
      <header className="text-center">
        <h2 className="dark:text-zinc-600 text-zinc-400 select-none text-base font-bold mb-2 tracking-widest">
          P R O J E C T S
        </h2>
        <p className="indieFont text-lg select-none text-zinc-600 dark:text-zinc-300">{`That I've been working on`}</p>
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
