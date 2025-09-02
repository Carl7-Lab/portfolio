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
        'Agricultural process management system where I led UI optimization and implemented a dynamic form builder with conditional validation. Achieved 60% reduction in bundle size and 40% improvement in initial load time through React Server Components, lazy loading, and code splitting. Built advanced data tables with server-side pagination and integrated Leaflet GIS for interactive maps.',
      image: '/cluster.png?height=300&width=500',
      stack:
        'Next.js 14 (App Router), TypeScript, TailwindCSS, Shadcn UI, Radix UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, REST APIs, NUQS, SWR',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'ExportMétricas Platform',
      description:
        'System for managing banana export operations with modules for materials tracking and producer payment management. Delivered fully responsive design optimized for mobile devices.',
      image: '/expometricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'BanaMétricas Platform',
      description:
        'Platform for banana farm management with modules for production metrics, worker management, and financial records.',
      image: '/banametricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      name: 'CryptoApp',
      description:
        'Web application for real-time cryptocurrency tracking and analysis. Features interactive charts, historical data visualization, and responsive design.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Vite, TailwindCSS',
      featured: false,
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'Venco Sales System',
      description:
        'Sales and collections management system for small businesses. Includes user management, sales tracking, and report generation.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Node.js, Express, Mongoose',
      featured: false,
      gradient: 'from-indigo-600 to-indigo-700',
    },
  ],
};
