import { Code, Cpu, Lightbulb, Users } from 'lucide-react';
import { FC } from 'react';

import { CardBrand } from '@/components/common/card-brand/card-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Badge } from '@/components/ui/badge';
import { aboutContent } from '@/lib/contents/about';

const iconMap = {
  code: Code,
  cpu: Cpu,
  lightbulb: Lightbulb,
  users: Users,
};

export const AboutSection: FC = () => (
  <section id="about" className="py-18">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <TitleBrand
          variant="section"
          as="h2"
          className="mb-2 text-center md:text-left"
        >
          {aboutContent.title}
        </TitleBrand>
        <TextBrand
          variant="lead"
          className="mb-8 text-center md:text-left text-muted-foreground"
        >
          {aboutContent.subtitle}
        </TextBrand>
      </div>

      <div className="mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="md:col-span-1">
          {aboutContent.paragraphs.map((p, i) => (
            <TextBrand key={i} variant="body" className="mb-4 text-left">
              {p}
            </TextBrand>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {aboutContent.badges.map(badge => (
              <Badge
                key={badge.label}
                variant="secondary"
                className="text-sm font-semibold hover:scale-110 transition-all duration-300"
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-1">
          {aboutContent.cards.map(card => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <CardBrand
                key={card.title}
                variant="elevated"
                className="flex flex-col gap-3 min-h-[150px] justify-between hover:scale-105 transition-transform"
              >
                <div
                  className={`w-full h-10 rounded-xl flex items-center justify-start pl-4 bg-gradient-to-r ${card.color} mb-2`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>
                <div className="font-bold text-lg text-primary mb-1">
                  {card.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {card.description}
                </div>
              </CardBrand>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
