"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import projects from "@/app/projects";
import SplitScreen from "@/components/ui/splitscreen";
import { useState } from "react";

export default function Projects() {
  const PROJECTS_PER_PAGE = 3;
  const [page, setPage] = useState<number>(1);

  function getProjects() {
    const startIndex = (page - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;

    const filteredProjects = projects.filter((_, i) => {
      return i >= startIndex && i < endIndex;
    });

    return filteredProjects.map((project) => {
      return (
        <SplitScreen
          key={project.title}
          title={project.title}
          titleNote={project.titleNote}
          description={project.description}
          listings={project.listings}
          after={project.after}
          links={project.links}
          imagePath={project.imagePath}
          imageAlt={project.imageAlt}
          imageSide={project.imageSide}
        />
      );
    });
  }

  function paginationHandler(newPage: number) {
    if (newPage === 0) return;
    if (newPage > Math.ceil(projects.length / PROJECTS_PER_PAGE)) return;

    setPage(() => newPage);
  }

  return (
    <div className="flex flex-col gap-32">
      {getProjects()}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#projects"
              onClick={() => paginationHandler(page - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#projects">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#projects"
              onClick={() => paginationHandler(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
