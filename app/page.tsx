import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Section from "@/components/ui/section";
import StyledHeading from "@/components/ui/styled-heading";
import Skills from "@/components/ui/skills";
import Projects from "@/components/ui/projects";

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
      </Section>
      <Section id="contact">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Contact</h3>
        </StyledHeading>
      </Section>
    </main>
  );
}
