import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Section from "@/components/ui/section";
import StyledHeading from "@/components/ui/styled-heading";
import Skills from "@/components/ui/skills";
import Projects from "@/components/ui/projects";
import ContactForm from "@/components/ui/contact-form";
import calculateAge from "@/lib/age";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
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
      <Section id="skills">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Skills</h3>
        </StyledHeading>
        <Skills />
      </Section>
      <Section id="projects">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Featured projects</h3>
        </StyledHeading>
        <Projects />
      </Section>
      <Section id="aboutme">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">About Me</h3>
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
            <p>
              Hello! I’m Mico, a passionate developer from Finland with over six years of experience in coding, which I consider more of a hobby than just a job. My journey in the tech world has primarily revolved around web development, but I’ve found a real passion for backend development.
            </p>

            <p>
              Throughout my career, I’ve had the pleasure of working within a vibrant community of over 350 people, where I developed community management and event-centered software. Collaborating with other skilled developers around the globe and receiving feedback from our users has not only sharpened my technical skills but also deepened my appreciation for community-driven projects.
            </p>

            <p>
              When I’m not coding, you can find me jogging or playing the same
              video games I enjoy building software around. Feel free to reach out
              if you’d like to connect or chat about projects, ideas, or career
              opportunities!
            </p>
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
