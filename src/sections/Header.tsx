"use client";

import { cn } from "@/utils/helpers";
import { MouseEventHandler, useState } from "react";

type Section = "home" | "projects" | "about" | "contact";

export const Header = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("contact");

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.stopPropagation();
    const element = e.target as HTMLAnchorElement;
    const title = element.title as Section | "";
    if (title === "") {
      console.error("Header -> handleClick: The title attr is an empty string");
      return;
    }
    if (title === selectedSection) return;
    setSelectedSection(title);
  };

  return (
    <div className="fixed top-3 z-40 flex w-screen items-center justify-center">
      <nav className="flex justify-center gap-1 rounded-full border border-gray-500 bg-white/10 p-0.5 backdrop-blur-sm">
        <a
          className={cn(
            "nav-item",
            selectedSection === "home" ? "selected-nav-item" : "",
          )}
          href="#"
          title="home"
          onClick={handleClick}
        >
          Home
        </a>
        <a
          className={cn(
            "nav-item",
            selectedSection === "projects" ? "selected-nav-item" : "",
          )}
          href="#"
          title="projects"
          onClick={handleClick}
        >
          Projects
        </a>
        <a
          className={cn(
            "nav-item",
            selectedSection === "about" ? "selected-nav-item" : "",
          )}
          href="#"
          title="about"
          onClick={handleClick}
        >
          About
        </a>
        <a
          className={cn(
            "nav-item",
            selectedSection === "contact" ? "selected-nav-item" : "",
          )}
          href="#"
          title="contact"
          onClick={handleClick}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
