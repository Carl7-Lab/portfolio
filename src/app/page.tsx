import { JSX } from 'react';

import { AboutSection } from '@/components/sections/about/AboutSection';
import { EducationSection } from '@/components/sections/education/EducationSection';
import { ExperienceSection } from '@/components/sections/experience/ExperienceSection';
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection';
import { SkillsSection } from '@/components/sections/skills/SkillsSection';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </main>
  );
}
