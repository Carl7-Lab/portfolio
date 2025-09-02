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
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Chakra UI', level: 85 },
        { name: 'Shadcn UI', level: 88 },
        { name: 'Material-UI', level: 85 },
        { name: 'React Hook Form', level: 88 },
        { name: 'YUP Validation', level: 85 },
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
        { name: 'Server Actions', level: 85 },
        { name: 'Next.js API Router', level: 88 },
        { name: 'JWT Authentication', level: 90 },
        { name: 'Passport.js', level: 85 },
      ],
    },
    {
      category: 'Databases',
      icon: 'database',
      items: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      category: 'Tools & Deployment',
      icon: 'wrench',
      items: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Vercel', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'DigitalOcean', level: 80 },
        { name: 'AWS Amplify', level: 70 },
        { name: 'Firebase Cloud Messaging', level: 85 },
        { name: 'Leaflet GIS', level: 80 },
        { name: 'NextAuth.js', level: 88 },
        { name: 'NUQS', level: 85 },
        { name: 'SWR', level: 85 },
        { name: 'React Query', level: 88 },
        { name: 'Vitest', level: 80 },
      ],
    },
  ],
  additional: [
    'Figma',
    'Responsive Design',
    'Scrum',
    'English (Intermediate)',
    'Spanish (Native)',
    'Security Architecture',
    'Performance Optimization',
    'Role-based Access Control',
    'Multi-tenant Architecture',
    'PDF Generation',
    'Cron Jobs',
    'E2E Testing',
    'Integration Testing',
  ],
};
