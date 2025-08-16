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
  title: 'Proyectos Destacados',
  subtitle:
    'Mis proyectos más recientes y significativos como FullStack Developer',
  description:
    'A continuación se muestran algunos de los proyectos en los que he trabajado, aplicando las mejores prácticas, tecnologías modernas y un enfoque en la experiencia del usuario.',
  otherProjectsTitle: 'Otros Proyectos',
  projects: [
    {
      name: 'Cluster - Agropaís',
      description:
        'Sistema de gestión de procesos agrícolas donde lideré la optimización de UI y desarrollé componentes reutilizables de React + TypeScript. Logré una reducción del 25% en los tiempos de carga a través de la optimización de rendimiento.',
      image: '/cluster.png?height=300&width=500',
      stack: 'React, TypeScript, Next.js, TailwindCSS, Shadcn, SWR',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'Plataforma ExportMétricas',
      description:
        'Sistema para la gestión de operaciones de exportación de banano con módulos para seguimiento de materiales y gestión de pagos a productores. Entregué un diseño completamente responsivo optimizado para dispositivos móviles.',
      image: '/expometricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Plataforma BanaMétricas',
      description:
        'Plataforma para la gestión de fincas bananeras con módulos para métricas de producción, gestión de trabajadores y registros financieros.',
      image: '/banametricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      name: 'CryptoApp',
      description:
        'Aplicación web para el seguimiento y análisis de criptomonedas en tiempo real. Incluye gráficos interactivos, visualización de datos históricos y diseño responsivo.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Vite, TailwindCSS',
      featured: false,
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'Sistema de Ventas Venco',
      description:
        'Sistema de gestión de ventas y cobranzas para pequeñas empresas. Incluye gestión de usuarios, seguimiento de ventas y generación de reportes.',
      // image: '/placeholder.svg?height=300&width=500',
      stack: 'React, TypeScript, Node.js, Express, Mongoose',
      featured: false,
      gradient: 'from-indigo-600 to-indigo-700',
    },
  ],
};
