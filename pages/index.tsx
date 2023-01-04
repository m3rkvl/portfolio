import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Header from "../components/Header";
import Projects from "../components/Projects";
import MoreAboutMe from "../components/MoreAboutMe";
import Footer from "../components/Footer";

const projects = [
  {
    title: "watchably.fun",
    desc: "A full stack app where users can create and manage their watchlist. Users can save a movie or a series as 'To Watch', 'Watched', or 'Favorite'. They can also rate the titles they've watched.",
    tech: ["React", "SCSS", "Firebase"],
    img: "watchablyCover",
    link: "https://watchably.fun",
    gitLink: "https://github.com/m3rkvl/watchably",
  },
  {
    title: "poller.host",
    desc: "A full stack app where users can create, vote on, and see result of polls. They can restrict the amount of votes and/or participation.",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    img: "pollerCover",
    link: "https://poller.host",
    gitLink: "https://github.com/m3rkvl/poller",
  },
  {
    title: "mapty.xyz",
    desc: "An app where users can save the locations of and some additional data about their workouts (currently only running and cycling) on a map and see all the locations they've cycled or ran in. Planning on building a backend for this app.",
    tech: ["JavaScript"],
    img: "maptyCover",
    link: "https://mapty.xyz",
    gitLink: "https://github.com/m3rkvl/mapty",
  },
  {
    title: "pigdi.fun",
    desc: "A dice game called 'Pig'. Two players roll dice and try to collect as much points as possible until they roll 1, in which case they lose their turn to their opponent. First to reach 100 points wins. Planning on making it multiplayer.",
    tech: ["JavaScript"],
    img: "pigdiCover",
    link: "https://pigdi.fun",
    gitLink: "https://github.com/m3rkvl/pigdi",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects props={projects} />
        <MoreAboutMe />
      </main>
      <Footer />
    </>
  );
}
