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
      role: 'Front Developer',
      period: 'August 2024 - May 2025',
      responsibilities: [
        'Led one developer in the enhancement and optimization of user interfaces for agricultural process management.',
        'Developed optimized user interfaces for agricultural process management.',
        'Implemented reusable React and TypeScript components to improve system scalability.',
        'Optimized performance and enhanced the user experience of the platform.',
      ],
      stack: 'React, TypeScript, TailwindCSS, Next.js, Shadcn, SWR',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'October 2023 - July 2024',
      responsibilities: [
        'Developed a web application for the registration and management of box types used in the export process.',
        'Implemented features for the registration and management of banana exports, including tracking materials used and recording payments to producers.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'BanaMétricas',
      role: 'Full Stack Developer',
      period: 'August 2022 - September 2023',
      responsibilities: [
        'Developed a web application for the registration and management of banana farms.',
        'Implemented features for tracking production metrics, managing farm workers, and recording financial transactions.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'Venco',
      role: 'Full Stack Developer',
      period: 'January 2022 - July 2022',
      responsibilities: [
        'Developed a web application for managing sales and collections. The application includes modules for user management, sales tracking, and report generation. It is targeted at small businesses that sell on credit and are not required to maintain formal accounting records.',
      ],
      stack: 'React, Typescript, Node, Mongoose, Express',
    },
  ],
};
