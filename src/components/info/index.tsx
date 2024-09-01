import { FC } from "react";
import { H1 } from "../../ui/typography/headings/h1";
import { MapIcon } from "../../ui/Icons/map";
import { GithubIcon } from "../../ui/Icons/github";
import { TwitterIcon } from "../../ui/Icons/twitter";

export const PersonalInfo: FC = () => (
  <section className="flex w-full flex-col-reverse justify-between gap-12 px-4 py-16 md:flex-row md:px-20 md:py-24">
    <section className="flex max-w-3xl flex-col gap-12 md:w-2/3">
      <section className="flex flex-col gap-2">
        <H1>Hi, I’m Omar 👋</H1>
        <p>
          I'm a frontend developer (React.js) with a focus on creating
          exceptional digital experiences that are fast, accessible, visually
          appealing, and responsive. Even though I have been creating web
          applications for over 2 years, I still love it as if it was something
          new.
        </p>
      </section>
      <section>
        <div className="flex items-center gap-2">
          <MapIcon />
          <p>YekaterinBurg, Russian Federation</p>
        </div>
      </section>
      <section>
        <div className="flex items-center gap-1">
          <a
            target="_blank"
            href="https://github.com/Reactomancer/"
            className="rounded-lg p-[6px] hover:bg-gray-light-100 active:bg-gray-light-200 dark:hover:bg-gray-dark-100 dark:active:bg-gray-dark-200"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://x.com/Reactomancer/"
            className="rounded-lg p-[6px] hover:bg-gray-light-100 active:bg-gray-light-200 dark:hover:bg-gray-dark-100 dark:active:bg-gray-dark-200"
          >
            <TwitterIcon />
          </a>
        </div>
      </section>
    </section>
    <section className="md:w-1/3">photo</section>
  </section>
);
