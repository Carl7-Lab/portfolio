import { JSX } from 'react';

import { AboutSection } from '@/components/sections/about/about-section';
import { ContactSection } from '@/components/sections/contact/contact-section';
import { ExperienceSection } from '@/components/sections/experience/experience-section';
import { Footer } from '@/components/sections/footer/footer-section';
import { HeroSection } from '@/components/sections/hero/hero-section';
import { ProjectsSection } from '@/components/sections/projects/projects-section';
import { SkillsSection } from '@/components/sections/skills/skills-section';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
