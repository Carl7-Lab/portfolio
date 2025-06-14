import { Code, Cpu, Lightbulb, Users } from 'lucide-react';
import { FC } from 'react';

import { CardBrand } from '@/components/common/card-brand/card-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Badge } from '@/components/ui/badge';
import { Dictionary } from '@/lib/dictionaries';

const iconMap = {
  code: Code,
  cpu: Cpu,
  lightbulb: Lightbulb,
  users: Users,
};

export const AboutSection: FC<{ dict: Dictionary }> = ({ dict }) => (
  <section id="about" className="pt-18">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <TitleBrand
          variant="section"
          as="h2"
          className="mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
        >
          {dict.home.about.title}
        </TitleBrand>
        <TextBrand
          variant="lead"
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          {dict.home.about.subtitle}
        </TextBrand>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          {dict.home.about.paragraphs.map((p, i) => (
            <TextBrand key={i} variant="body" className="mb-6 text-left">
              {p}
            </TextBrand>
          ))}
          <div className="flex flex-wrap gap-2 mt-2">
            {dict.home.about.badges.map(badge => (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dict.home.about.cards.map(card => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <CardBrand
                key={card.title}
                variant="elevated"
                className="flex flex-col gap-3 min-h-[150px] justify-between hover:scale-110 transition-all duration-300"
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
