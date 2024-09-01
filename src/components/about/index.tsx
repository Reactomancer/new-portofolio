import { FC } from "react";
import { Tag } from "../../ui/tag";
import { H3 } from "../../ui/typography/headings/h3";

export const About: FC = () => (
  <section className="flex w-full flex-col items-center justify-center gap-6 px-4 py-16 dark:bg-gray-dark-50 lg:px-20 lg:py-24">
    <Tag id={"about"}>About me</Tag>
    <section className="flex flex-col gap-12 lg:flex-row">
      <section className="lg:w-1/2">photo</section>
      <section className="flex flex-col gap-6 lg:w-1/2">
        <H3>Curious about me? Here you have it:</H3>
        <article className="flex flex-col gap-4">
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="flex list-inside list-disc flex-col gap-3">
            <li>B.E. in Computer Engineering</li>
            <li>Avid learner</li>
            <li>Full time freelancer</li>
            <li>Aspiring indie hacker</li>
          </ul>
          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </article>
      </section>
    </section>
  </section>
);
