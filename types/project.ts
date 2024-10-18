export type Project = {
  title: string;
  titleNote?: string;
  description: string;
  achievements?: string[];
  technologies: string[];
  after: string;
  links: ProjectLink[];
  imagePath?: string;
  imageAlt?: string;
  contributors?: Contributor[];
};

export type ProjectLink = {
  link: string;
  content?: string;
};

export type Contributor = {
  name: string;
  link: string;
};
