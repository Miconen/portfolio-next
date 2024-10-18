import { Project } from "@/types/project";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/ui/icons";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex w-full mb-32">
      <div className="container flex flex-col justify-center">
        {/* Content field */}
        <div className="flex flex-col py-32 gap-1">
          <span className="font-black text-4xl md:text-5xl">
            {project.title}
          </span>
          <span className="font-bold text-lg text-foreground/60">
            {project.titleNote}
          </span>
          <div className="flex gap-4 mt-4">
            {project.links.map((link) => {
              return (
                <a href={link.link}>
                  <Button className="w-fit flex gap-2" variant={"outline"}>
                    <GitHub /> {link.content ?? "Project"}
                  </Button>
                </a>
              );
            })}
            <a href="/#contact">
              <Button className="w-fit flex gap-2">
                <Mail aria-hidden={true} className="h-4 w-4" />
                <span className="sr-only">Mail Icon</span> Contact
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
