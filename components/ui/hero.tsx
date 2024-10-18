import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/components/ui/icons";

export default function Hero() {
    return (
        <div className="flex w-full mb-32">
            <div className="container flex flex-col justify-center">
                {/* Content field */}
                <div className="flex flex-col py-32 gap-1">
                    <span className="font-extrabold text-xl text-foreground/60">
                        Hey, I am
                    </span>
                    <span className="font-black text-4xl md:text-5xl">Mico Rintala</span>
                    {/* Text animation source */}
                    {/* https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/ */}
                    <div className="w-fit font-black text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 whitespace-nowrap">
                        <span className="inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                            <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                                <li>Full Stack Dev</li>
                                <li>React & Angular Dev</li>
                                <li>Vim Enjoyer</li>
                                <li>Backend Dev</li>
                                <li>Frontend Dev</li>
                                <li>TS & Python Dev</li>
                                <li>C# & PHP Dev</li>
                                <li aria-hidden="true">Full Stack Dev</li>
                            </ul>
                        </span>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a href="/#contact">
                            <Button className="w-fit flex gap-2">
                                <Mail aria-hidden={true} className="h-4 w-4" />
                                <span className="sr-only">Mail Icon</span> Contact
                            </Button>
                        </a>
                        <a href="https://github.com/Miconen">
                            <Button className="w-fit flex gap-2" variant={"outline"}>
                                <GitHub /> Projects
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
