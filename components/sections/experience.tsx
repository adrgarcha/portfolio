import { BriefcaseBusiness } from 'lucide-react';

export default function Experience() {
   return (
      <section className="py-12 md:pt-24 md:pb-20" id="experience">
         <div className="relative flex items-center justify-center gap-x-4 py-4 dark:text-tertiary">
            <BriefcaseBusiness className="size-6 md:size-10" />
            <h2 className="font-bold text-xl md:text-4xl">Experiencia laboral</h2>
            <div className="absolute w-screen h-[40px] md:h-[72px] mr-12 md:mr-64 bg-foreground border border-l-0 border-secondary rounded-lg rounded-l-none -z-10" />
         </div>
         <div className="grid md:flex grid-rows-2 grid-flow-col md:justify-center gap-x-10 md:gap-x-24 mt-10">
            <ExperienceSection role="Tech Lead" company="Golgorio" period="Sept. 2024 - Dic. 2024" className="md:text-right mt-16 md:mt-14">
               Lideré el desarrollo completo, tanto backend como frontend, de una aplicación móvil con React Native para la organización de partidos
               de fútbol que cuenta con más de 700 usuarios activos.
            </ExperienceSection>
            <div className="relative w-3 h-[618px] border-r border-l border-secondary dark:border-secondary/30 row-span-2 order-first md:order-none">
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-16">
                  <div className="size-6 bg-primary border border-secondary dark:border-secondary/30 rounded-full" />
                  <div className="absolute md:right-0 w-12 md:w-24 h-px bg-secondary dark:bg-secondary/30 -z-10" />
               </div>
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-80">
                  <div className="size-6 bg-primary border border-secondary dark:border-secondary/30 rounded-full" />
                  <div className="absolute w-12 md:w-24 h-px bg-secondary dark:bg-secondary/30 -z-10" />
               </div>
            </div>
            <ExperienceSection role="Desarrollador full stack" company="Guadaltel" period="Nov. 2023 - Jul. 2024" className="mt-2 md:mt-[19.65rem]">
               Trabajé en el mantenimiento y mejora continua de una aplicación web para las administraciones públicas utilizada por miles de usuarios.
               Colaboré con un equipo de desarrollo para desarrollar las tareas.
            </ExperienceSection>
         </div>
      </section>
   );
}

function ExperienceSection({
   role,
   company,
   period,
   className,
   children,
}: {
   role: string;
   company: string;
   period: string;
   className?: string;
   children: React.ReactNode;
}) {
   return (
      <section className={className}>
         <h3 className="font-bold text-2xl md:text-3xl text-primary leading-none">{role}</h3>
         <h4 className="font-bold text-2xl md:text-3xl">{company}</h4>
         <p className="font-medium text-sm md:text-base mt-1 md:t-2 mb-2 md:mb-4">{period}</p>
         <p className="md:w-[410px] text-sm md:text-base">{children}</p>
      </section>
   );
}
