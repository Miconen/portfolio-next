import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Section from "@/components/ui/section";
import SplitScreen from "@/components/ui/splitscreen";
import StyledHeading from "@/components/ui/styled-heading";

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
      <Section id="projects">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Projects</h3>
        </StyledHeading>
        <div className="flex flex-col gap-32">
          {/* Project: Tectonic-bot */}
          <SplitScreen
            title="Tectonic Bot"
            description="Discord chat bot actively developed and led by me, with continuous feedback from the community and our small development team. This project is also hands down the one I've learned from the most."
            after="The bot serves as a robust solution for managing our OSRS community of over 350 users. It automates various tasks, helps with moderation, provides real-time updates, manages events, and enhances user experience, and remains active to this day."
            listings={[
              "TypeScript for type safety",
              "Prisma for database management",
              "PostgreSQL for data storage",
              "Docker for containerization",
              "Hosted on Railway with automated CI/CD",
              "Over 350 active users",
              "Comprehensive documentation",
              "Heavy focus on reliability",
            ]}
            links={{ link: "https://github.com/Miconen/tectonic-bot" }}
          />
          {/* Project: MNK */}
          <SplitScreen
            title="MNK"
            titleNote="(Realtime chat app)"
            description="Livechat project that utilizes SignalR to send and receive real time messages. Supports multiple chat rooms and secure user profiles with self built authorization utilizing JWTs. I was personally in charge of our backend and integration with our frontend, as well as project organization."
            after={
              <>
                MNK was a school project co-authored by{" "}
                <a
                  href="https://github.com/Kiiskii"
                  className="text-foreground/80 underline"
                >
                  Anton Kiiski
                </a>{" "}
                and{" "}
                <a
                  href="https://github.com/NikoSoder"
                  className="text-foreground/80 underline"
                >
                  Niko Söder
                </a>{" "}
                and myself. Split into a multi-repo for easier DevOps and
                version control.
              </>
            }
            listings={[
              "TypeScript & Angular Frontend",
              ".NET / C# Backend",
              "User authentication (login & register functionality)",
              "User authorization with JWTs",
              "Automated testing using Azure",
              "EF Core for database management",
              "PostgreSQL for data storage",
              "Docker for containerization",
            ]}
            links={[
              {
                link: "https://github.com/Miconen/MNK-frontend",
                content: "View Frontend",
              },
              {
                link: "https://github.com/Miconen/MNK-backend",
                content: "View Backend",
              },
            ]}
          />
          {/* Project: OKP-2 */}
          <SplitScreen
            title="OKP-2"
            titleNote="(Ohjelmisto Kehitys Projekti 2)"
            description="Full-stack school project for consuming the MyHelsinki Open API. The user is able to view places of interest, activities and events around the user if they consent to the app using their location. Alternatively the user can search for a specific location."
            after="If the user registers for an account (not required), they gain the ability to favorite and track any place, activity or event until it expires. The app also can also display the weather around you with the OpenWeatherMap API."
            listings={[
              "TypeScript & Angular Frontend",
              ".NET / C# Backend",
              "Utilizes Google Maps, OpenWeatherMap API and MyHelsinki Open API",
              "User authentication (login & register functionality)",
              "User authorization with JWTs",
              "EF Core for database management",
              "PostgreSQL for data storage",
              "Docker for containerization",
              "Hosted on Railway with automated CI/CD",
            ]}
            links={{ link: "https://github.com/Miconen/OKP-2" }}
          />
        </div>
      </Section>
      <Section id="skills">
        <StyledHeading>
          <h3 className="text-4xl font-bold mb-24">Skills</h3>
        </StyledHeading>
        <div className="flex flex-col gap-4 [&>span]:text-2xl [&>span]:font-bold">
          <span>Languages & Frameworks:</span>
          <ul>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>.NET / C#</li>
          </ul>
            <span>Backend Development:</span>
          <ul>
            <li>Database Management (Prisma, EF Core)</li>
            <li>PostgreSQL</li>
            <li>Docker (Containerization)</li>
          </ul>
            <span>API Integration:</span>
          <ul>
            <li>Google Maps API</li>
            <li>OpenWeatherMap API</li>
            <li>MyHelsinki Open API</li>
          </ul>
            <span>Authentication & Authorization:</span>
          <ul>
            <li>User Authentication (Login & Register Functionality)</li>
            <li>User Authorization with JWTs</li>
          </ul>
            <span>Infrastructure & Hosting:</span>
          <ul>
            <li>Railway (Hosting Platform) with CI/CD</li>
            <li>Docker (Containerization)</li>
          </ul>
          <span>Testing:</span>
          <ul>
            <li>Automated Testing using Azure</li>
          </ul>
          <span>Additional Features:</span>
          <ul>
            <li>Account-Based Features (Favorite & Track)</li>
            <li>Real-time Messaging (SignalR)</li>
            <li>Weather Display Integration</li>
          </ul>
        </div>
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
