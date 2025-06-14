export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillsContent: SkillCategory[] = [
  {
    category: 'Programming Languages',
    items: ['Advanced: Javascript/Typescript', 'Basic: Python, Php'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Advanced: Node, Express, React, Nestjs, Nextjs, Strapi'],
  },
  {
    category: 'Main Libraries',
    items: [
      'Advanced: React Testing Library, Material-UI, Chakra-UI, TailwindCSS, Shadcn, SWR, React-Query',
    ],
  },
  {
    category: 'Data Base',
    items: ['Advanced: MongoDB, MySQL, Firebase, PostgreSQL'],
  },
  {
    category: 'Tools',
    items: ['Vercel, Docker, DigitalOcean, AWS amplify'],
  },
  {
    category: 'Agile',
    items: ['Scrum'],
  },
  {
    category: 'Languages',
    items: ['Intermediate: English', 'Native: Spanish'],
  },
];
