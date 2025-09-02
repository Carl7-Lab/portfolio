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
        'Led UI optimization for an agricultural process management system covering crop monitoring (planting, harvesting, production), agricultural input sales, and crop insurance services.',
        'Developed a query and CRUD system using Server Actions and Next.js API Router, adding a security layer.',
        'Implemented granular role-based access control with module-level permissions.',
        'Optimized performance with React Server Components, lazy loading, and code splitting, reducing bundle size by 60% and initial load time by 40%.',
        'Built a data table system with server-side pagination, dynamic filters and URL state persistence.',
        'Integrated Leaflet GIS for interactive maps with drawing and area measurement tools.',
        'Implemented a push notification system using Firebase Cloud Messaging.',
        'Designed a modular architecture with Shadcn UI and TailwindCSS, ensuring visual consistency and reusable components.',
        'Used SWR for server-state management and caching, reducing redundant API calls and improving data fetching performance.',
        'Implemented a dynamic form builder system with conditional validation, nested subforms.',
      ],
      stack:
        'Next.js 14, TypeScript, TailwindCSS, Shadcn UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, NUQS, SWR, YUP, React-Hook-Form',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'October 2023 - July 2024',
      responsibilities: [
        'Development of a comprehensive enterprise web application for the full management of the banana export process, including management of producers, clients, logistics and payments.',
        'Implemented a user management system with role-based access control and granular permissions for different user levels.',
        'Developed inventory management and product traceability modules from harvest to export.',
        'Created an invoicing and payment management system with integration of multiple payment methods and financial report generation.',
        'Designed a modular architecture with NestJS using DTOs, guards, interceptors and centralized exception handling.',
        'Integrated Firebase for push notifications and user authentication with JWT and refresh tokens.',
        'Developed a responsive interface with Chakra UI and Material-UI optimized for mobile and desktop devices.',
        'Implemented React Query for efficient server state management, caching and real-time data synchronization.',
        'Used Prisma as ORM for database management with PostgreSQL and Firebase for file storage.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, YUP',
    },
    {
      company: 'BanaMétricas',
      role: 'Full Stack Developer',
      period: 'August 2022 - September 2023',
      responsibilities: [
        'Developed a full backend system for agricultural operations management (employees, payroll, farms, tasks, and automated reports).',
        'Built a multi-tenant architecture to support multiple agricultural companies with granular role-based permissions.',
        'Implemented a payroll automation module handling loans, advances, and work schedules.',
        'Created an automated reporting system with PDF generation and dashboards for weekly and monthly metrics.',
        'Applied a modular NestJS architecture with DTOs, guards, interceptors, and centralized exception handling.',
        'Designed multi-layer security: JWT with refresh tokens, Passport.js, API Keys, password hashing with bcrypt, and full auditing.',
        'Automated tasks with cron jobs and email notifications using Resend.',
        'Integrated with Firebase (push notifications) and Docker (multi-stage containerization).',
        'Ensured system quality with Vitest, E2E and integration tests.',
        'Built a comprehensive frontend dashboard with interactive charts and real-time metrics using Recharts.',
        'Implemented React Query for efficient server state management, caching, and real-time data synchronization.',
        'Implemented a modular component architecture with reusable UI components using Chakra UI and Material-UI.',
        'Developed form systems with Formik and Yup validation for agricultural data management.',
        'Created a responsive design system optimized for mobile devices with touch-friendly interfaces.',
        'Implemented role-based access control with dynamic navigation and permission-based UI rendering.',
        'Designed an intuitive user interface for managing employees, payroll, work progress, and farm operations.',
        'Optimized frontend performance with lazy loading, memoization, and efficient state management.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, Yup, Recharts, html2canvas, jsPDF',
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
