import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { GitHub, LinkedIn } from "./icons";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <MobileMenu>
                    <Button variant="ghost" className="flex md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 50 50"
                            className="h-5 w-5"
                        >
                            <path
                                fill="currentColor"
                                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                            ></path>
                        </svg>
                    </Button>
                </MobileMenu>
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="font-bold">Mico Rintala</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#projects"
                        >
                            Projects
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#skills"
                        >
                            Skills
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#aboutme"
                        >
                            About me
                        </a>
                        <a
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#contact"
                        >
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Social media icons */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/miconen"
                        >
                            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                <GitHub />
                            </div>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mico-rintala-a0a71a1b7/"
                        >
                            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                                <LinkedIn />
                            </div>
                        </a>
                    </nav>
                    <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}

export function MobileMenu({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle className="text-center">Mico Rintala</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col m-8 items-center text-md font-medium">
                    <SheetClose asChild>
                        <a
                            className="w-full text-center py-6 transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#projects"
                        >
                            Projects
                        </a>
                    </SheetClose>
                    <SheetClose asChild>
                        <a
                            className="w-full text-center py-6 transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#skills"
                        >
                            Skills
                        </a>
                    </SheetClose>
                    <SheetClose asChild>
                        <a
                            className="w-full text-center py-6 transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#aboutme"
                        >
                            About me
                        </a>
                    </SheetClose>
                    <SheetClose asChild>
                        <a
                            className="w-full text-center py-6 transition-colors hover:text-foreground/80 text-foreground/60"
                            href="/#contact"
                        >
                            Contact
                        </a>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
