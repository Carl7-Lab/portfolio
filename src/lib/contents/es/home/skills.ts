export interface SkillCategory {
  category: string;
  icon?: string;
  items: { name: string; level?: number }[];
}

export const skillsContent = {
  title: 'Habilidades Técnicas',
  subtitle: 'Tecnologías y herramientas que domino en mi trabajo diario',
  description:
    'A continuación se muestran las principales tecnologías, frameworks, herramientas y metodologías que utilizo en proyectos de desarrollo web.',
  additionalTitle: 'Habilidades Adicionales',
  categories: [
    {
      category: 'Frontend',
      icon: 'globe',
      items: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 88 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Chakra UI', level: 85 },
        { name: 'Shadcn', level: 85 },
      ],
    },
    {
      category: 'Backend',
      icon: 'database',
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'NestJS', level: 85 },
        { name: 'Prisma', level: 80 },
      ],
    },
    {
      category: 'Bases de Datos',
      icon: 'database',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'Herramientas y Despliegue',
      icon: 'wrench',
      items: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Vercel', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'DigitalOcean', level: 80 },
        { name: 'AWS Amplify', level: 70 },
      ],
    },
  ],
  additional: [
    'Figma',
    'Diseño Responsivo',
    'SWR',
    'React Query',
    'Scrum',
    'Inglés (Intermedio)',
    'Español (Nativo)',
  ],
};
