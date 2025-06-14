import { FC } from 'react';

import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { projectsContent } from '@/lib/contents/projects';

export const ProjectsSection: FC = () => (
  <section id="projects" className="py-12">
    <TitleBrand variant="section" as="h2" className="mb-8">
      Projects
    </TitleBrand>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projectsContent.map(project => (
        <div
          key={project.name}
          className="bg-card rounded-lg p-6 shadow-sm border border-border"
        >
          <div className="font-semibold text-primary text-lg mb-2">
            {project.name}
          </div>
          <TextBrand variant="body" className="mb-2">
            {project.description}
          </TextBrand>
          <div className="text-xs text-muted-foreground mb-2">
            Tech Stack: {project.stack}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline text-sm"
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);
