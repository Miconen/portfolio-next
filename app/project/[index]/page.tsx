import projects from "@/app/projects";
import ContactForm from "@/components/ui/contact-form";
import Navbar from "@/components/ui/navbar";
import ProjectHeader from "@/components/ui/project-header";
import Section from "@/components/ui/section";
import { Achievements, Technologies } from "@/components/ui/splitscreen";
import StyledHeading from "@/components/ui/styled-heading";
import Link from "next/link";

export default function Project({ params }: { params: { index: string } }) {
  if (!params.index) return;
  if (Array.isArray(params.index)) return;

  const projectIndex = parseInt(params.index);
  if (!Number.isSafeInteger(projectIndex)) return;
  if (projectIndex === 0) return;

  const project = projects.at(projectIndex - 1);
  if (!project) return;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar>
        {project.achievements && (
          <Link href={`./${projectIndex}#achievements`}>Achievements</Link>
        )}
        <Link href={`./${projectIndex}#technologies`}>Technologies</Link>
        <Link href={`./${projectIndex}#short`}>Info</Link>
        <Link href={`./${projectIndex}#contact`}>Contact</Link>
      </Navbar>
      <ProjectHeader project={project} />
      <Section>
        <div className="flex flex-col md:flex-row text-center">
          <div className="md:px-4 lg:px-24 py-24 md:py-0 flex flex-col flex-1 gap-8">
            <span className="text-2xl font-bold">Fullstack Dev</span>
            <p>
              I enjoy building projects that captivate my interest. Be it a
              large project with friends or a small script for myself.
            </p>
          </div>
          <div className="md:px-4 lg:px-24 py-24 md:py-0 flex flex-col flex-1 gap-8 border-y md:border-y-0 md:border-x">
            <span className="text-2xl font-bold">Curiosity-Driven</span>
            <p>
              Relentlessly curious and adaptable, striving to be the best
              version of myself, especially in coding.
            </p>
          </div>
          <div className="md:px-4 lg:px-24 py-24 md:py-0 flex flex-col flex-1 gap-8">
            <span className="text-2xl font-bold">Tech Enthusiast</span>
            <p>
              Immersed in Vim and thriving in the terminal, I prioritize
              learning tools that optimizing my workflow and developer
              experience.
            </p>
          </div>
        </div>
      </Section>
      <Section id="achievements" condition={Boolean(project.achievements)}>
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Achievements</h3>
        </StyledHeading>
        <Achievements noTitle project={project} />
      </Section>
      <Section id="technologies">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Technologies</h3>
        </StyledHeading>
        <Technologies noTitle project={project} />
      </Section>
      <Section id="short">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">In short...</h3>
        </StyledHeading>
        <div className="flex w-full md:w-2/3 gap-4">
          <div className="inline-block w-1 justify-between bg-gray-500"></div>
          <div className="flex gap-4 flex-col w-full">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 14"
              className="absolute w-24 h-24 rotate-9 opacity-20 dark:opacity-10 fill-current text-black dark:text-white"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p>{project.description}</p>
            <p>{project.after}</p>
          </div>
        </div>
      </Section>
      <Section id="contact">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Contact</h3>
        </StyledHeading>
        <p className="pb-8 md:w-1/2">
          I’d love to hear from you if something in my portfolio sparked your
          interest! Whether you’d like to discuss career opportunities or just
          have a casual chat, feel free to fill out the form below in Finnish or
          English, and I’ll be sure to get back to you soon!
        </p>
        <ContactForm />
      </Section>
    </main>
  );
}
