import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function Projects({ isMobile }: { isMobile: boolean }) {
  return (
    <div id="projects" className="flex w-full justify-center">
      <div className="flex flex-col items-center sm:my-16 sm:grid sm:grid-cols-1 sm:gap-20 sm:gap-y-2">
        <div className=" z-10 mt-5 border-y-2 border-violet-900/45 p-4 text-center text-5xl text-[#FFF07C]">
          PROJECTS
        </div>
        <ProjectCard
          link="https://fast-pizza-sigma.vercel.app/"
          src="/project 1.png"
          tech={[
            "react",
            "Tailwind",
            "styled.component",
            "prisma",
            "nextjs",
            "vercel",
            "posstgresSQL",
            "html",
            "Loadash",
            "shadCN",
          ]}
          name="Fast Pizza - Pizza to your door step"
          gitLink="https://github.com/Shahoriarratul/Fast-Pizza"
          isMobile={isMobile}
        >
          Project 1
        </ProjectCard>
        <ProjectCard
          link="https://use-pop-corn-ebon.vercel.app/"
          src="/project 2.png"
          tech={["react", "Tailwind", "styled.component"]}
          name="PopCorn - Rate your movies"
          gitLink="https://github.com/Shahoriarratul/usePopCorn"
          isMobile={isMobile}
        >
          Project 2
        </ProjectCard>
        <ProjectCard
          link="https://travel-list-lovat.vercel.app/"
          src="/project 3.png"
          tech={["react", "Tailwind", "styled.component"]}
          name="Travel List - Easy travel bucket"
          gitLink="https://github.com/Shahoriarratul/travel-list"
          isMobile={isMobile}
        >
          Project 3
        </ProjectCard>
      </div>
    </div>
  );
}
