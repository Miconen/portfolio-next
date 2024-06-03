import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Skills(skills: Skill) {
  return (
    <div className="flex flex-col gap-4 [&>span]:text-2xl [&>span]:font-bold">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Languages & Frameworks</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>.NET / C#</li>
            <li>Go</li>
            <li>Python</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Full-stack & Devops</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>Database Management (Prisma, EF Core)</li>
            <li>PostgreSQL</li>
            <li>Docker (Containerization)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>API Interation</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>RESTful APIs</li>
            <li>Swagger</li>
            <li>Google Maps API</li>
            <li>OpenWeatherMap API</li>
            <li>MyHelsinki Open API</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Authentication & Authorization:</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>User Authentication (Login & Register Functionality)</li>
            <li>User Authorization with JWTs</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Soft skills</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>Motivated to learn</li>
            <li>Problem-solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Can-do attitude</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  );
}
