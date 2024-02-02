import { Button } from "@/components/ui/button";
import { GitHub } from "./icons";
import Image from "next/image";

type Project = {
    title: string;
    titleNote?: string;
    description: string | React.ReactNode;
    listings: string[];
    after: string | React.ReactNode;
    links: ProjectLink | ProjectLink[];
    imagePath?: string;
    imageAlt?: string;
    imageSide?: "left" | "right";
};

type ProjectLink = {
    link: string;
    content?: string;
};

const DEFAULT_IMAGE_PATH = "/default.webp";
const DEFAULT_IMAGE_ALT = "Default project image";

export default function SplitScreen(project: Project) {
    return (
        <div className="flex flex-col items-center lg:flex-row gap-12">
            {/* Left Side - Project Description */}
            <div className="lg:w-3/5 flex flex-col gap-4">
                <h4 className="text-3xl font-bold md:w-2/3 pb-2">
                    {project.title}
                    <span className="ml-2 text-foreground/60 text-sm italic">
                        {project.titleNote}
                    </span>
                </h4>
                <div className="text-foreground/60 md:w-2/3 flex flex-col gap-4">
                    <p className="text-foreground/80 font-bold">{project.description}</p>
                    <ul className="list-disc px-4 font-mono [&>*]:py-1 md:[&>*]:py-0">
                        {project.listings.map((listing) => (
                            <li>{listing}</li>
                        ))}
                    </ul>
                    <p>{project.after}</p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    {renderButtons(project.links)}
                </div>
            </div>

            {/* Right Side - Project Image */}
            <div className="lg:w-2/5">
                <Image
                    width={400}
                    height={400}
                    src={project.imagePath || DEFAULT_IMAGE_PATH}
                    alt={project.imageAlt || DEFAULT_IMAGE_ALT}
                    className="rounded-lg w-full h-auto"
                />
            </div>
        </div>
    );
}

export function ProjectButton(button: ProjectLink) {
    return (
        <a href={button.link} target="_blank" rel="noopener noreferrer">
            <Button variant={"outline"} className="w-fit flex gap-2">
                <GitHub />
                {button.content || "View Project"}
            </Button>
        </a>
    );
}

function renderButtons(links: ProjectLink | ProjectLink[]) {
    if (!Array.isArray(links))
        return <ProjectButton link={links.link} content={links.content} />;
    return links.map((link) => {
        return <ProjectButton link={link.link} content={link.content} />;
    });
}
