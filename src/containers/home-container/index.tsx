import { FC } from "react";
import { PersonalInfo } from "../../components/info";
import { About } from "../../components/about";
import { Skills } from "../../components/skills";

export const HomeContainer: FC = () => (
  <article className="flex flex-col items-center justify-center text-gray-light-900 dark:text-gray-dark-900">
    <PersonalInfo />
    <About />
    <Skills />
  </article>
);
