import { JSX } from 'react';

import { AboutSection } from '@/components/sections/about/about-section';
import { EducationSection } from '@/components/sections/education/education-section';
import { ExperienceSection } from '@/components/sections/experience/experience-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { ProjectsSection } from '@/components/sections/projects/projects-section';
import { SkillsSection } from '@/components/sections/skills/skills-section';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
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
