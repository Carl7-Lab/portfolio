export interface ProjectItem {
  name: string;
  description: string;
  stack: string;
  link?: string;
  image?: string;
  featured?: boolean;
  gradient?: string;
}

export const projectsContent = {
  title: 'Featured Projects',
  subtitle: 'My most recent and significant projects as a FullStack Developer',
  description:
    'Below are some of the projects I have worked on, applying best practices, modern technologies, and a focus on user experience.',
  otherProjectsTitle: 'Other Projects',
  projects: [
    {
      name: 'Cluster - Agropaís',
      description:
        'Complete platform for agricultural process management where I led a developer in improving and optimizing user interfaces. I developed optimized interfaces and implemented reusable components to improve system scalability.',
      image: '/cluster.png?height=300&width=500',
      stack: 'React, TypeScript, Next.js, TailwindCSS, Shadcn, SWR',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'ExportMétricas Platform',
      description:
        'Complete web system for registering and managing box types used in the export process. I implemented functionalities for registering and managing banana exports, including tracking of materials used and recording payments to producers.',
      // image: '/placeholder.svg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'BanaMétricas Platform',
      description:
        'Web application for registering and managing banana farms. I developed functionalities for tracking production metrics, farm worker management, and recording financial transactions.',
      // image: '/placeholder.svg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      name: 'CryptoApp',
      description:
        'Web application to view and capture information about the value of selected cryptocurrencies. Includes modules to view current market value and historical data, with interactive charts for complete analysis.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Vite, TailwindCSS',
      featured: false,
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'Venco Sales System',
      description:
        'Application for sales and collections management aimed at small businesses that sell on credit. Includes modules for user management, sales tracking, and report generation.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Node.js, Express, Mongoose',
      featured: false,
      gradient: 'from-indigo-600 to-indigo-700',
    },
  ],
};
