export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  stack: string;
}

export const experienceContent = {
  title: 'Experiencia Profesional',
  subtitle: 'Mi trayectoria como Desarrollador FullStack',
  description:
    'A lo largo de mi carrera, he trabajado en varios proyectos y empresas, desarrollando soluciones web robustas y escalables, colaborando con equipos multidisciplinarios y aplicando las mejores prácticas de desarrollo.',
  experiences: [
    {
      company: 'Agropaís | Ecuador',
      role: 'Frontend Developer',
      period: 'Agosto 2024 - Mayo 2025',
      responsibilities: [
        'Lideré la optimización de UI para un sistema de gestión de procesos agrícolas.',
        'Implementé un sistema constructor de formularios dinámicos con validación condicional, subformularios anidados y carga de opciones en tiempo real impulsada por API.',
        'Optimicé el rendimiento con React Server Components (90% del sistema), carga diferida y división de código, reduciendo el tamaño del bundle en 60% y el tiempo de carga inicial en 40%.',
        'Construí un sistema avanzado de tablas de datos con paginación del lado del servidor, filtros dinámicos y persistencia del estado de la URL.',
        'Integré Leaflet GIS para mapas interactivos con herramientas de dibujo y medición de área.',
        'Implementé un sistema de notificaciones push usando Firebase Cloud Messaging.',
        'Diseñé una arquitectura modular con Shadcn UI, TailwindCSS y Radix UI, asegurando consistencia visual y componentes reutilizables.',
      ],
      stack:
        'Next.js 14 (App Router), TypeScript, TailwindCSS, Shadcn UI, Radix UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, REST APIs, NUQS, SWR',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'Octubre 2023 - Julio 2024',
      responsibilities: [
        'Construí un sistema para gestionar operaciones de exportación de banano.',
        'Implementé módulos para seguimiento de materiales y gestión de pagos a productores.',
        'Entregué un diseño completamente responsivo optimizado para dispositivos móviles.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'BanaMétricas',
      role: 'Full Stack Developer',
      period: 'Agosto 2022 - Septiembre 2023',
      responsibilities: [
        'Desarrollé una plataforma para la gestión de fincas bananeras.',
        'Creé módulos para métricas de producción, gestión de trabajadores y registros financieros.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Firebase',
    },
    {
      company: 'Venco',
      role: 'Full Stack Developer',
      period: 'Enero 2022 - Julio 2022',
      responsibilities: [
        'Diseñé y desarrollé un sistema de gestión de ventas y cobranzas para pequeñas empresas.',
        'Incluí gestión de usuarios, seguimiento de ventas y generación de reportes.',
      ],
      stack: 'React, Typescript, Node, Mongoose, Express',
    },
  ],
};
