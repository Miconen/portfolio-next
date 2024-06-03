export type Project = {
  title: string;
  titleNote?: string;
  description: React.ReactNode;
  listings: string[];
  after: React.ReactNode;
  links: ProjectLink | ProjectLink[];
  imagePath?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
};

export type ProjectLink = {
  link: string;
  content?: string;
};
