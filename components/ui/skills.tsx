import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Skills() {
  return (
    <div className="flex flex-col gap-4 [&>h3]:text-2xl [&>h3]:font-bold [&>ul>ul]:ml-4">
      <h3>Languages & Frameworks</h3>
      <ul>
        <li>JavaScript & TypeScript</li>
        <ul>
          <li>Node.js</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
        <li>.NET / C#</li>
        <li>Go</li>
        <li>Python</li>
      </ul>

      <h3>Full-stack</h3>
      <ul>
        <li>Relational databases (PostgreSQL, MySQL, MariaDB)</li>
        <li>DB Querying</li>
        <ul>
          <li>SQL</li>
          <li>Prisma</li>
          <li>EF Core</li>
          <li>Kysely</li>
        </ul>
        <li>User authentication and authorization</li>
        <li>JWTs</li>
      </ul>

      <h3>???</h3>
      <ul>
        <li>Docker (Containerization)</li>
        <li>CI/CD Pipelines & Devops</li>
        <li>Strong with UNIX systems</li>
      </ul>

      <h3>Soft skills</h3>
      <ul>
        <li>Motivated to learn</li>
        <li>Problem-solving</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Can-do attitude</li>
      </ul>
    </div>
  );
}
