import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Tournament App",
    description:
      "A tournament managemenet application which went in to real daily usage. The application can handle round robin and brackets styled tournaments and was written in React.",
    after:
      (<>
        The project was co- authored by{" "}
        <a
          href="https://github.com/Kiiskii"
          className="text-foreground/80 underline"
        >
          {" "}
          Anton Kiiski{" "}
        </a>{" "}
        ,{" "}
        <a
          href="https://github.com/NikoSoder"
          className="text-foreground/80 underline"
        >
          {" "}
          Niko Söder{" "}
        </a>{" "}
        ,{" "}
        <a href="https://github.com/Kaztu"
          className="text-foreground /80 underline"
        >
          {" "}
          Kasper Keske{" "}
        </a>
        {" "}
        and myself.
        If I could change anything I would have focused more on testing to save time, as we slightly suffered from reliability issues at first. But regardless we managed to pull off an impressive product that the client was extremely pleased with.
      </>),
    listings: [
      "Developed during an internship as a real project for a real client",
      "Four person team practicing Agile development principles",
      "Comprehensive usage of issues/tickets, documentation and trunk based development",
      "Translations for Finnish, English, Swedish and Estonian",
      "Kysely for lightweight database interfacing",
      "Hosted on Vercel"
    ],
    links: [{ link: "https://github.com/Miconen/tournament-app" }],
  },
  {
    title: "Tectonic Bot",
    description:
      "Discord chat bot actively developed and led by me, with continuous feedback from the community and our small development team. This project is also hands down the one I've learned from the most.",
    after:
      "The bot serves as a robust solution for managing our OSRS community of over 350 users. It automates various tasks, helps with moderation, provides real-time updates, manages events, and enhances user experience, and remains active to this day.",
    listings: [
      "TypeScript for type safety",
      "Prisma for database management",
      "PostgreSQL for data storage",
      "Docker for containerization",
      "Hosted on Railway with automated CI/CD",
      "Over 350 active users",
      "Comprehensive documentation",
      "Heavy focus on reliability",
    ],
    links: [{ link: "https://github.com/Miconen/tectonic-bot" }],
  },
  {
    title: "MNK",
    description:
      "Live chat project that utilizes SignalR to send and receive real time messages. Supports multiple chat rooms and secure user profiles with self built authorization utilizing JWTs. I was personally in charge of our backend and integration with our frontend, as well as project organization.",
    after: (
      <>
        MNK was a school project co- authored by{" "}
        <a
          href="https://github.com/Kiiskii"
          className="text-foreground/80 underline"
        >
          {" "}
          Anton Kiiski{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/NikoSoder"
          className="text-foreground/80 underline"
        >
          {" "}
          Niko Söder{" "}
        </a>{" "}
        and myself.Split into a multi - repo for easier DevOps and version
        control.
      </>
    ),
    listings: [
      "TypeScript & Angular Frontend",
      ".NET / C# Backend",
      "User authentication (login & register functionality)",
      "User authorization with JWTs",
      "Automated testing using Azure",
      "EF Core for database management",
      "PostgreSQL for data storage",
      "Docker for containerization",
    ],
    links: [
      {
        link: "https://github.com/Miconen/MNK-frontend",
        content: "View Frontend",
      },
      {
        link: "https://github.com/Miconen/MNK-backend",
        content: "View Backend",
      },
    ],
  },
  {
    title: "OKP-2",
    titleNote: "(Ohjelmisto Kehitys Projekti 2)",
    description:
      "Full-stack school project for consuming the MyHelsinki Open API. The user is able to view places of interest, activities and events around the user if they consent to the app using their location. Alternatively the user can search for a specific location.",
    after:
      "If the user registers for an account (not required), they gain the ability to favorite and track any place, activity or event until it expires. The app also can also display the weather around you with the OpenWeatherMap API.",
    listings: [
      "TypeScript & Angular Frontend",
      ".NET / C# Backend",
      "Utilizes Google Maps, OpenWeatherMap API and MyHelsinki Open API",
      "User authentication (login & register functionality)",
      "User authorization with JWTs",
      "EF Core for database management",
      "PostgreSQL for data storage",
      "Docker for containerization",
      "Hosted on Railway with automated CI/CD",
    ],
    links: [{ link: "https://github.com/Miconen/OKP-2" }],
  },
];

export default projects;
