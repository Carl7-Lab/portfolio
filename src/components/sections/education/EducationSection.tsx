import { FC } from 'react';

import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { educationContent } from '@/lib/contents/education';

export const EducationSection: FC = () => (
  <section id="education" className="py-12">
    <TitleBrand variant="section" as="h2" className="mb-4">
      Education
    </TitleBrand>
    <div className="bg-card rounded-lg p-6 shadow-sm border border-border max-w-xl mx-auto">
      <div className="font-semibold text-primary text-lg mb-2">
        {educationContent.university}
      </div>
      <TextBrand variant="body" className="mb-1">
        {educationContent.degree}
      </TextBrand>
      <div className="text-sm text-secondary">{educationContent.date}</div>
    </div>
  </section>
);
