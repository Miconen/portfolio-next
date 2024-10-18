"use client";

import projects from "@/app/projects";
import SplitScreen from "@/components/ui/splitscreen";

function Lines({ index }: { index: number }) {
  if (index + 1 === projects.length) return;

  return (
    <div className="flex flex-col items-center my-24">
      <div className="h-12 border-l-2 border-dotted border-gray-500"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500 rotate-90"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

export default function Projects() {
  return projects.map((project, i) => {
    return (
      <div key={project.title}>
        <SplitScreen
          key={project.title}
          project={project}
        />
        <Lines index={i} />
      </div>
    );
  });
}
