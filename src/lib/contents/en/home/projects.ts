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
        'Agricultural process management system covering crop monitoring (planting, harvesting, production), agricultural input sales, and crop insurance services. Led UI optimization and implemented a dynamic form builder with conditional validation and nested subforms. Developed a query and CRUD system using Server Actions and Next.js API Router with security layers. Achieved 60% reduction in bundle size and 40% improvement in initial load time through React Server Components, lazy loading, and code splitting. Built advanced data tables with server-side pagination and integrated Leaflet GIS for interactive maps with drawing and area measurement tools.',
      image: '/cluster.png?height=300&width=500',
      stack:
        'Next.js 14, TypeScript, TailwindCSS, Shadcn UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, NUQS, SWR, YUP, React-Hook-Form',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'ExportMétricas Platform',
      description:
        'Comprehensive enterprise web application for the full management of the banana export process, including management of producers, clients, logistics and payments. Implemented user management with role-based access control and granular permissions. Developed inventory management and product traceability modules from harvest to export. Created invoicing and payment management system with multiple payment methods integration.',
      image: '/expometricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, YUP',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'BanaMétricas Platform',
      description:
        'Full backend system for agricultural operations management including employees, payroll, farms, tasks, and automated reports. Built multi-tenant architecture supporting multiple agricultural companies with granular role-based permissions. Implemented payroll automation, automated reporting with PDF generation, and comprehensive frontend dashboard with interactive charts and real-time metrics.',
      image: '/banametricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, Yup, Recharts, html2canvas, jsPDF',
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
