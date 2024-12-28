import { BriefcaseBusiness } from 'lucide-react';

export default function Experience() {
   return (
      <section className="pt-24 pb-20" id="experience">
         <div className="flex items-center justify-center gap-x-4 py-4 text-secondary">
            <BriefcaseBusiness size={40} />
            <h2 className="font-bold text-4xl">Experiencia laboral</h2>
            <div className="absolute w-full h-[72px] mr-96 bg-foreground border border-l-0 border-secondary rounded-lg rounded-l-none -z-10" />
         </div>
         <div className="flex justify-center gap-x-24 mt-10">
            <ExperienceSection role="Tech Lead" company="Golgorio" period="Sept. 2024 - Dic. 2024" className="text-right mt-16">
               Lideré el desarrollo completo, tanto backend como frontend, de una aplicación móvil con React Native para la organización de partidos
               de fútbol que cuenta con más de 700 usuarios activos.
            </ExperienceSection>
            <div className="relative w-3 h-[618px] border-r border-l border-secondary">
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-16">
                  <div className="size-6 bg-primary border border-secondary rounded-full" />
                  <div className="absolute right-0 w-24 h-px bg-secondary -z-10" />
               </div>
               <div className="absolute flex items-center left-1/2 -translate-x-1/2 mt-80">
                  <div className="size-6 bg-primary border border-secondary rounded-full" />
                  <div className="absolute w-24 h-px bg-secondary -z-10" />
               </div>
            </div>
            <ExperienceSection role="Desarrollador full stack" company="Guadaltel" period="Nov. 2023 - Jul. 2024" className="text-left mt-80">
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
      <section className={`text-secondary ${className}`}>
         <h3 className="font-bold text-3xl text-primary leading-none">{role}</h3>
         <h4 className="font-bold text-3xl">{company}</h4>
         <p className="font-medium mt-2 mb-4">{period}</p>
         <p className="w-[410px]">{children}</p>
      </section>
   );
}
