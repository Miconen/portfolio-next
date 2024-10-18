import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Fencing App",
    description:
      "A fencing tournament managemenet application which went in to real daily usage. The application can handle round robin and brackets styled tournaments and was written in React.",
    after:
      "If I could change anything I would have focused more on testing to save time, as we slightly suffered from reliability issues at first. But regardless we managed to pull off an impressive product that the client was extremely pleased with.",
    technologies: [
      "Developed during an internship as a real project for a real client",
      "Four person team practicing Agile development principles",
      "Comprehensive usage of issues/tickets, documentation and trunk based development",
      "Translations for Finnish, English, Swedish and Estonian",
      "Kysely for lightweight database interfacing",
      "Hosted on Vercel",
    ],
    links: [{ link: "https://github.com/Miconen/tournament-app" }],
    contributors: [
      {
        name: "Anton Kiiski",
        link: "https://github.com/Kiiskii",
      },
      {
        name: "Niko Söder",
        link: "https://github.com/NikoSoder",
      },
      {
        name: "Kasper Keske",
        link: "https://github.com/Kaztu",
      },
    ],
  },
  {
    title: "Tectonic Bot",
    description:
      "Discord chat bot actively developed and led by me, with continuous feedback from the community and our small development team. This project is also hands down the one I've learned from the most.",
    after:
      "The bot serves as a robust solution for managing our OSRS community of over 350 users. It automates various tasks, helps with moderation, provides real-time updates, manages events, and enhances user experience, and remains active to this day.",
    achievements: ["Over 350 active users", "Long-standing and active project"],
    technologies: [
      "TypeScript for type safety",
      "Prisma for database management",
      "PostgreSQL for data storage",
      "Docker for containerization",
      "Hosted on Railway with automated CI/CD",
      "Comprehensive documentation",
      "Heavy focus on reliability",
    ],
    links: [{ link: "https://github.com/Miconen/tectonic-bot" }],
  },
  {
    title: "Tectonic Bingo",
    description:
      "This bot served as an automated interface through the messaging platform Discord for our community event/game. The event hosted 75 users and ran for ten days, the development of the bot took around two to three weeks excluding the documentation and planning for the event itself which took well over a month of collaboration between multiple people.",
    after: "The project highlighted the value of rapid iteration, as I successfully enhanced the bot mid-event through user feedback. Looking ahead, I would use a more structured database for better data handling and a typed language to improve reliability and maintainability.",
    achievements: [
      "Enhanced User Experience: The bot received highly positive feedback, with participants highlighting the seamless integration and ease of use compared to manually handled events.",
      "High Engagement: 75 users actively participated, with the automated system improving interaction and engagement throughout the event.",
      "Streamlined Event Management: The bot eliminated manual event coordination, leading to a significant reduction in management overhead.",
    ],
    technologies: [
      "Rapid Development: Built using Python, allowing for an efficient development process while maintaining high code quality and adaptability for future events.",
      "Dynamic Progress Visualization: Automatically generated team-specific progress images using the Pillow library, providing real-time visual updates for each team's bingo progress.",
      "Complex Data Handling: Managed in-memory data with efficient serialization to handle real-time game state updates, ensuring data integrity.",
      "Discord API Integration: Seamless communication and event automation via the Discord API, enabling real-time updates, user interaction, and automated event workflows.",
    ],
    links: [{ link: "https://github.com/Miconen/tectonic-bingo-bot" }],
  },
  {
    title: "MNK App",
    description:
      "Live chat project that utilizes SignalR to send and receive real time messages. Supports multiple chat rooms and secure user profiles with self built authorization utilizing JWTs. I was personally in charge of our backend and integration with our frontend, as well as project organization.",
    after: "Hello world!",
    technologies: [
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
    contributors: [
      {
        name: "Anton Kiiski",
        link: "https://github.com/Kiiskii",
      },
      {
        name: "Niko Söder",
        link: "https://github.com/NikoSoder",
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
    technologies: [
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
