import { Globe, Database, Wrench } from 'lucide-react';
import { FC } from 'react';

import { CardBrand } from '@/components/common/card-brand/card-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dictionary } from '@/lib/dictionaries';

const iconMap = {
  globe: Globe,
  database: Database,
  wrench: Wrench,
};

export const SkillsSection: FC<{ dict: Dictionary }> = ({ dict }) => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <TitleBrand variant="section" as="h2" className="mb-2">
          {dict.home.skills.title}
        </TitleBrand>
        <TextBrand variant="lead" className="mb-2 text-muted-foreground">
          {dict.home.skills.subtitle}
        </TextBrand>
        <TextBrand
          variant="body"
          className="max-w-2xl mx-auto text-muted-foreground"
        >
          {dict.home.skills.description}
        </TextBrand>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {dict.home.skills.categories.map((category, index) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <CardBrand
              key={index}
              variant="elevated"
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-2 mb-2 text-primary">
                {Icon && <Icon className="h-6 w-6" />} {category.category}
              </div>
              {category.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.name}</span>
                    <span className="text-muted-foreground">{item.level}%</span>
                  </div>
                  <Progress value={item.level} className="h-2" />
                </div>
              ))}
            </CardBrand>
          );
        })}
      </div>
      <div className="text-center">
        <TitleBrand
          variant="primary"
          as="h3"
          className="text-xl font-semibold mb-6"
        >
          {dict.home.skills.additionalTitle}
        </TitleBrand>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {dict.home.skills.additional.map(skill => (
            <Badge key={skill} variant="outline" className="text-sm py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);
