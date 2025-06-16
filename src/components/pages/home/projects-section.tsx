import Image from 'next/image';
import { FC } from 'react';

import { CardBrand } from '@/components/common/card-brand/card-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Badge } from '@/components/ui/badge';
import { Dictionary } from '@/lib/dictionaries';

export const ProjectsSection: FC<{ dict: Dictionary }> = ({ dict }) => {
  const featuredProjects = dict.home.projects.projects.filter(p => p.featured);
  const otherProjects = dict.home.projects.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TitleBrand
            variant="section"
            as="h2"
            className="mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
          >
            {dict.home.projects.title}
          </TitleBrand>
          <TextBrand variant="lead" className="mb-2 text-muted-foreground">
            {dict.home.projects.subtitle}
          </TextBrand>
          <TextBrand
            variant="body"
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            {dict.home.projects.description}
          </TextBrand>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <CardBrand
              key={index}
              variant="elevated"
              className={`overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 h-[300px] w-[500px] bg-gradient-to-r ${project.gradient} opacity-5`}
                  />
                  <Image
                    src={
                      project.image ||
                      '/image-no-found.png?height=300&width=500'
                    }
                    alt={project.name}
                    width={500}
                    height={300}
                    className="h-[300px] w-[500px] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 h-[300px] w-[500px] group-hover:scale-110 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Badge
                      variant="secondary"
                      className="glass-effect text-white border-white/20"
                    >
                      Proyecto Privado
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <TitleBrand
                    variant="card"
                    as="h3"
                    className="mb-2 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {project.name}
                  </TitleBrand>
                  <TextBrand
                    variant="body"
                    className="mb-4 text-muted-foreground"
                  >
                    {project.description}
                  </TextBrand>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(',').map(tech => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:scale-105 transition-transform duration-200"
                      >
                        {tech.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardBrand>
          ))}
        </div>

        <div>
          <TitleBrand
            variant="primary"
            as="h3"
            className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent"
          >
            {dict.home.projects.otherProjectsTitle}
          </TitleBrand>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherProjects.map((project, index) => (
              <CardBrand
                key={index}
                variant="bordered"
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <TitleBrand
                  variant="card"
                  as="h4"
                  className="mb-2 group-hover:text-blue-600 transition-colors duration-300"
                >
                  {project.name}
                </TitleBrand>
                <TextBrand
                  variant="body"
                  className="mb-4 text-muted-foreground text-sm"
                >
                  {project.description}
                </TextBrand>
                <div className="flex flex-wrap gap-1">
                  {project.stack.split(',').map(tech => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:scale-105 transition-transform duration-200"
                    >
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>
              </CardBrand>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
