import Image from "next/image";

import logo from "../images/logo.png";
import Switcher from "./UI/Switcher";

const Header = () => {
  return (
    <header className="flex z-50 fixed top-6 left-0 right-0 px-6 justify-between gap-4">
      <nav>
        <a href="#" title="Go to the top of the top">
          <Image
            src={logo}
            alt="Murat Erkal's Logo"
            width={32}
            className="opacity-50 hover:opacity-100 transition duration-200 brightness-0 dark:brightness-100"
          />
        </a>
      </nav>
      <menu title="Toggle dark mode">
        <Switcher />
      </menu>
    </header>
  );
};

export default Header;
