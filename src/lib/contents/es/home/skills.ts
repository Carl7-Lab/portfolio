export interface SkillCategory {
  category: string;
  icon?: string;
  items: { name: string; level?: number }[];
}

export const skillsContent = {
  title: 'Habilidades Técnicas',
  subtitle: 'Tecnologías y herramientas que domino en mi trabajo diario',
  description:
    'A continuación se muestran las principales tecnologías, frameworks, herramientas y metodologías que utilizo en el desarrollo de proyectos web.',
  additionalTitle: 'Conocimientos Adicionales',
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
      category: 'Bases de Datos',
      icon: 'database',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 82 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'Herramientas',
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
    'Python (Básico)',
    'PHP (Básico)',
  ],
};
