import { FC } from 'react';

import { TitleBrand } from '@/components/common/typographic/title-brand';
import { skillsContent } from '@/lib/contents/skills';

export const SkillsSection: FC = () => (
  <section id="skills" className="py-12">
    <TitleBrand variant="section" as="h2" className="mb-8">
      Skills
    </TitleBrand>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillsContent.map(skill => (
        <div
          key={skill.category}
          className="bg-card rounded-lg p-6 shadow-sm border border-border"
        >
          <div className="font-semibold text-primary text-lg mb-2">
            {skill.category}
          </div>
          <ul className="list-disc pl-5 space-y-1">
            {skill.items.map((item, idx) => (
              <li key={idx} className="text-body text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
