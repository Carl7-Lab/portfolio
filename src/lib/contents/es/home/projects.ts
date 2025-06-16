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
    'A continuación se muestran algunos de los proyectos en los que he trabajado, aplicando buenas prácticas, tecnologías modernas y un enfoque en la experiencia de usuario.',
  otherProjectsTitle: 'Otros Proyectos',
  projects: [
    {
      name: 'Cluster - Agropaís',
      description:
        'Plataforma completa para la gestión de procesos agrícolas donde lideré un desarrollador en la mejora y optimización de interfaces de usuario. Desarrollé interfaces optimizadas e implementé componentes reutilizables para mejorar la escalabilidad del sistema.',
      image: '/cluster.png?height=300&width=500',
      stack: 'React, TypeScript, Next.js, TailwindCSS, Shadcn, SWR',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'ExportMétricas Platform',
      description:
        'Sistema web completo para el registro y gestión de tipos de cajas utilizadas en el proceso de exportación. Implementé funcionalidades para el registro y gestión de exportaciones de banano, incluyendo seguimiento de materiales utilizados y registro de pagos a productores.',
      image: '/expometricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'BanaMétricas Platform',
      description:
        'Aplicación web para el registro y gestión de fincas bananeras. Desarrollé funcionalidades para el seguimiento de métricas de producción, gestión de trabajadores de finca y registro de transacciones financieras.',
      image: '/banametricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI',
      featured: true,
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      name: 'CryptoApp',
      description:
        'Aplicación web para visualizar y capturar información sobre el valor de criptomonedas seleccionadas. Incluye módulos para ver el valor actual del mercado y datos históricos, con gráficos interactivos para análisis completo.',
      // image: '/image-no-found.png?height=300&width=500',
      stack: 'React, TypeScript, Vite, TailwindCSS',
      featured: false,
      gradient: 'from-slate-600 to-slate-700',
    },
    {
      name: 'Sistema de Ventas Venco',
      description:
        'Aplicación para gestión de ventas y cobranzas dirigida a pequeñas empresas que venden a crédito. Incluye módulos para gestión de usuarios, seguimiento de ventas y generación de reportes.',
      // image: '/image-no-found.png?height=300&width=500',
      stack: 'React, TypeScript, Node.js, Express, Mongoose',
      featured: false,
      gradient: 'from-indigo-600 to-indigo-700',
    },
  ],
};
