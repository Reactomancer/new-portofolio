import { FC, useState } from "react";
import { MenuLink } from "../typography/Links/menu-link";
import { IconButton } from "../icon-button";
import { DarkModeIcon } from "../Icons/darkMode";
import { LightModeIcon } from "../Icons/light-mode";
import { Button } from "../button";

export const Header: FC = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <header className="flex items-center justify-between px-14 py-4 dark:bg-gray-dark-default">
      <section>Logo</section>
      <section className="hidden items-center gap-4 md:flex">
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <a href="#about">
                <MenuLink>About</MenuLink>
              </a>
            </li>
            <li>
              <MenuLink>Work</MenuLink>
            </li>
            <li>
              <MenuLink>Testimonials</MenuLink>
            </li>
            <li>
              <MenuLink>Contact</MenuLink>
            </li>
          </ul>
          <svg
            width="2"
            height="24"
            viewBox="0 0 2 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="1" y1="24" x2="1" stroke="#1F2937" />
          </svg>

          <IconButton onClick={() => darkModeHandler()}>
            {dark ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </nav>
        <section>
          <Button>Download CV</Button>
        </section>
      </section>
    </header>
  );
};
