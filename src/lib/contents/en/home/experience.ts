export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  stack: string;
}

export const experienceContent = {
  title: 'Professional Experience',
  subtitle: 'My journey as a FullStack Developer',
  description:
    'Throughout my career, I have worked on various projects and companies, developing robust and scalable web solutions, collaborating with multidisciplinary teams, and applying development best practices.',
  experiences: [
    {
      company: 'Agropaís | Ecuador',
      role: 'Frontend Developer',
      period: 'August 2024 - May 2025',
      responsibilities: [
        'Led UI optimization for an agricultural process management system.',
        'Developed reusable React + TypeScript components to improve scalability.',
        'Reduced load times by 25% through performance optimization.',
      ],
      stack: 'React, TypeScript, TailwindCSS, Next.js, Shadcn, SWR',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'October 2023 - July 2024',
      responsibilities: [
        'Built a system for managing banana export operations.',
        'Implemented modules for materials tracking and producer payment management.',
        'Delivered a fully responsive design optimized for mobile devices.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'BanaMétricas',
      role: 'Full Stack Developer',
      period: 'August 2022 - September 2023',
      responsibilities: [
        'Developed a platform for banana farm management.',
        'Created modules for production metrics, worker management, and financial records.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'Venco',
      role: 'Full Stack Developer',
      period: 'January 2022 - July 2022',
      responsibilities: [
        'Designed and developed a sales and collections management system for small businesses.',
        'Included user management, sales tracking, and report generation.',
      ],
      stack: 'React, Typescript, Node, Mongoose, Express',
    },
  ],
};
