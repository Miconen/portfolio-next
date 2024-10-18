import { Button } from "@/components/ui/button";
import { GitHub } from "./icons";
import Image from "next/image";
import { Project, ProjectLink } from "@/types/project";

const DEFAULT_IMAGE_PATH = "/default.webp";
const DEFAULT_IMAGE_ALT = "Default project image";

function Achievements({ project }: { project: Project }) {
  if (!project.achievements) return;
  if (project.achievements.length === 0) return;

  return (
    <div className="my-4">
      <h5 className="text-white">Achievements</h5>
      <ul className="list-disc text-sm px-4 font-bold font-mono [&>*]:py-1 md:[&>*]:py-1">
        {project.achievements.map((listing) => (
          <li key={listing}>{listing}</li>
        ))}
      </ul>
    </div>
  );
}

function Technologies({ project }: { project: Project }) {
  if (project.technologies.length === 0) return;

  return (
    <div className="my-4">
      <h5 className="text-white">Technologies</h5>
      <ul className="list-disc text-sm px-4 font-mono [&>*]:py-1 md:[&>*]:py-1">
        {project.technologies.map((listing) => (
          <li key={listing}>{listing}</li>
        ))}
      </ul>
    </div>
  );
}

function Buttons({ links }: { links: ProjectLink[] }) {
  return links.map((button) => {
    return (
      <div className="flex flex-col gap-4 md:flex-row" key={button.link}>
        <a href={button.link} target="_blank" rel="noopener noreferrer">
          <Button variant={"outline"} className="w-fit flex gap-2">
            <GitHub />
            {button.content || "View Project"}
          </Button>
        </a>
      </div>
    );
  });
}

export default function SplitScreen({ project }: { project: Project }) {
  return (
    <div className="flex w-full md:w-2/3 gap-4">
      <div className="flex flex-col gap-4">
        <h4 className="text-3xl font-bold pb-2">
          {project.title}
          <span className="ml-2 text-foreground/60 text-sm italic">
            {project.titleNote}
          </span>
        </h4>
        <div className="text-foreground/60 flex flex-col gap-4">
          <p className="text-foreground/80 font-bold">{project.description}</p>
          <Achievements project={project} />
          <Technologies project={project} />
          <p className="text-white">{project.after}</p>
        </div>
        <Buttons links={project.links} />
      </div>
    </div>
  );
}
