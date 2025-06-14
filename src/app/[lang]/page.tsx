import { JSX } from 'react';

import { AboutSection } from '@/components/pages/home/about-section';
import { ContactSection } from '@/components/pages/home/contact-section';
import { ExperienceSection } from '@/components/pages/home/experience-section';
import { Footer } from '@/components/pages/home/footer-section';
import { HeroSection } from '@/components/pages/home/hero-section';
import { ProjectsSection } from '@/components/pages/home/projects-section';
import { SkillsSection } from '@/components/pages/home/skills-section';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ lang: 'es' | 'en' }>;
};

export default async function Home({ params }: Props): Promise<JSX.Element> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection dict={dict} />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <AboutSection dict={dict} />
        <ExperienceSection dict={dict} />
        <ProjectsSection dict={dict} />
        <SkillsSection dict={dict} />
        <ContactSection dict={dict} />
      </div>
      <Footer dict={dict} />
    </main>
  );
}
