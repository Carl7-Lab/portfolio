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
  subtitle: 'Mis proyectos más recientes y significativos como Desarrollador FullStack',
  description:
    'A continuación se muestran algunos de los proyectos en los que he trabajado, aplicando las mejores prácticas, tecnologías modernas y un enfoque en la experiencia del usuario.',
  otherProjectsTitle: 'Otros Proyectos',
  projects: [
    {
      name: 'Cluster - Agropaís',
      description:
        'Sistema de gestión de procesos agrícolas que cubre monitoreo de cultivos (siembra, cosecha, producción), ventas de insumos agrícolas y servicios de seguros de cultivos. Lideré la optimización de UI e implementé un constructor de formularios dinámicos con validación condicional y subformularios anidados. Desarrollé un sistema de consultas y CRUD usando Server Actions y Next.js API Router con capas de seguridad. Logré una reducción del 60% en el tamaño del bundle y una mejora del 40% en el tiempo de carga inicial a través de React Server Components, carga diferida y división de código. Construí tablas de datos avanzadas con paginación del lado del servidor e integré Leaflet GIS para mapas interactivos con herramientas de dibujo y medición de áreas.',
      image: '/cluster.png?height=300&width=500',
      stack:
        'Next.js 14, TypeScript, TailwindCSS, Shadcn UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, NUQS, SWR, YUP, React-Hook-Form',
      featured: true,
      gradient: 'from-teal-600 to-teal-700',
    },
    {
      name: 'Plataforma ExportMétricas',
      description:
        'Aplicación web empresarial integral para la gestión completa del proceso de exportación de banano, incluyendo gestión de productores, clientes, logística y pagos. Implementé gestión de usuarios con control de acceso basado en roles y permisos granulares. Desarrollé módulos de gestión de inventario y trazabilidad de productos desde la cosecha hasta la exportación. Creé sistema de facturación y gestión de pagos con integración de múltiples métodos de pago.',
      image: '/expometricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, YUP',
      featured: true,
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      name: 'Plataforma BanaMétricas',
      description:
        'Sistema backend completo para gestión de operaciones agrícolas incluyendo empleados, nómina, fincas, tareas y reportes automatizados. Construí arquitectura multi-tenant para soportar múltiples empresas agrícolas con permisos granulares basados en roles. Implementé automatización de nómina, reportes automatizados con generación de PDF y dashboard frontend integral con gráficos interactivos y métricas en tiempo real.',
      image: '/banametricas.jpeg?height=300&width=500',
      stack:
        'React, Node.js, Next.js, NestJS, TypeScript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, Yup, Recharts, html2canvas, jsPDF',
      featured: true,
      gradient: 'from-orange-600 to-orange-700',
    },
    {
      name: 'CryptoApp',
      description:
        'Aplicación web para seguimiento y análisis de criptomonedas en tiempo real. Características de gráficos interactivos, visualización de datos históricos y diseño responsivo.',
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
