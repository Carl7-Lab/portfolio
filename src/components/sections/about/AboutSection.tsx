import { FC } from 'react';

import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { aboutContent } from '@/lib/contents/about';

export const AboutSection: FC = () => (
  <section id="about" className="py-12">
    <TitleBrand variant="section" as="h2" className="mb-4">
      {aboutContent.title}
    </TitleBrand>
    <TextBrand variant="body" className="max-w-2xl mx-auto">
      {aboutContent.description}
    </TextBrand>
  </section>
);
