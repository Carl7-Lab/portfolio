export interface SkillCategory {
  category: string;
  icon?: string;
  items: { name: string; level?: number }[];
}

export const skillsContent = {
  title: 'Technical Skills',
  subtitle: 'Technologies and tools I master in my daily work',
  description:
    'Below are the main technologies, frameworks, tools, and methodologies I use in web development projects.',
  additionalTitle: 'Additional Skills',
  categories: [
    {
      category: 'Frontend',
      icon: 'globe',
      items: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      category: 'Backend',
      icon: 'database',
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'Express', level: 88 },
        { name: 'Strapi', level: 75 },
      ],
    },
    {
      category: 'Databases',
      icon: 'database',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'Tools',
      icon: 'wrench',
      items: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Vercel', level: 85 },
        { name: 'AWS Amplify', level: 70 },
      ],
    },
  ],
  additional: [
    'TailwindCSS',
    'Chakra UI',
    'Material-UI',
    'Shadcn',
    'SWR',
    'React Query',
    'Prisma',
    'React Testing Library',
    'Vite',
    'DigitalOcean',
    'Scrum',
    'Python (Basic)',
    'PHP (Basic)',
  ],
};
