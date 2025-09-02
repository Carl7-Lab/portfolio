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
    'A lo largo de mi carrera, he trabajado en diversos proyectos y empresas, desarrollando soluciones web robustas y escalables, colaborando con equipos multidisciplinarios y aplicando las mejores prácticas de desarrollo.',
  experiences: [
    {
      company: 'Agropaís | Ecuador',
      role: 'Frontend Developer',
      period: 'Agosto 2024 - Mayo 2025',
      responsibilities: [
        'Lideré la optimización de UI para un sistema de gestión de procesos agrícolas que cubre monitoreo de cultivos (siembra, cosecha, producción), ventas de insumos agrícolas y servicios de seguros de cultivos.',
        'Desarrollé un sistema de consultas y CRUD usando Server Actions y Next.js API Router, agregando una capa de seguridad.',
        'Implementé control de acceso granular basado en roles con permisos a nivel de módulo.',
        'Optimicé el rendimiento con React Server Components, carga diferida y división de código, reduciendo el tamaño del bundle en 60% y el tiempo de carga inicial en 40%.',
        'Construí un sistema de tablas de datos con paginación del lado del servidor, filtros dinámicos y persistencia del estado de la URL.',
        'Integré Leaflet GIS para mapas interactivos con herramientas de dibujo y medición de áreas.',
        'Implementé un sistema de notificaciones push usando Firebase Cloud Messaging.',
        'Diseñé una arquitectura modular con Shadcn UI y TailwindCSS, asegurando consistencia visual y componentes reutilizables.',
        'Utilicé SWR para gestión del estado del servidor y caché, reduciendo llamadas API redundantes y mejorando el rendimiento de obtención de datos.',
        'Implementé un sistema constructor de formularios dinámicos con validación condicional y subformularios anidados.',
      ],
      stack:
        'Next.js 14, TypeScript, TailwindCSS, Shadcn UI, NextAuth.js, Firebase Cloud Messaging, Leaflet GIS, NUQS, SWR, YUP, React-Hook-Form',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'Octubre 2023 - Julio 2024',
      responsibilities: [
        'Desarrollo de una aplicación web empresarial integral para la gestión completa del proceso de exportación de banano, incluyendo gestión de productores, clientes, logística y pagos.',
        'Implementé un sistema de gestión de usuarios con control de acceso basado en roles y permisos granulares para diferentes niveles de usuario.',
        'Desarrollé módulos de gestión de inventario y trazabilidad de productos desde la cosecha hasta la exportación.',
        'Creé un sistema de facturación y gestión de pagos con integración de múltiples métodos de pago y generación de reportes financieros.',
        'Diseñé una arquitectura modular con NestJS usando DTOs, guards, interceptors y manejo centralizado de excepciones.',
        'Integré Firebase para notificaciones push y autenticación de usuarios con JWT y refresh tokens.',
        'Desarrollé una interfaz responsiva con Chakra UI y Material-UI optimizada para dispositivos móviles y de escritorio.',
        'Implementé React Query para gestión eficiente del estado del servidor, caché y sincronización de datos en tiempo real.',
        'Utilicé Prisma como ORM para gestión de base de datos con PostgreSQL y Firebase para almacenamiento de archivos.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, YUP',
    },
    {
      company: 'BanaMétricas',
      role: 'Full Stack Developer',
      period: 'Agosto 2022 - Septiembre 2023',
      responsibilities: [
        'Desarrollé un sistema backend completo para gestión de operaciones agrícolas (empleados, nómina, fincas, tareas y reportes automatizados).',
        'Construí una arquitectura multi-tenant para soportar múltiples empresas agrícolas con permisos granulares basados en roles.',
        'Implementé un módulo de automatización de nómina manejando préstamos, anticipos y horarios de trabajo.',
        'Creé un sistema de reportes automatizados con generación de PDF y dashboards para métricas semanales y mensuales.',
        'Apliqué una arquitectura NestJS modular con DTOs, guards, interceptors y manejo centralizado de excepciones.',
        'Diseñé seguridad multi-capa: JWT con refresh tokens, Passport.js, API Keys, hash de contraseñas con bcrypt y auditoría completa.',
        'Automaticé tareas con cron jobs y notificaciones por email usando Resend.',
        'Integré con Firebase (notificaciones push) y Docker (containerización multi-etapa).',
        'Aseguré la calidad del sistema con Vitest, pruebas E2E y de integración.',
        'Construí un dashboard frontend integral con gráficos interactivos y métricas en tiempo real usando Recharts.',
        'Implementé React Query para gestión eficiente del estado del servidor, caché y sincronización de datos en tiempo real.',
        'Implementé una arquitectura de componentes modular con componentes UI reutilizables usando Chakra UI y Material-UI.',
        'Desarrollé sistemas de formularios con validación Formik y Yup para gestión de datos agrícolas.',
        'Creé un sistema de diseño responsivo optimizado para dispositivos móviles con interfaces táctiles.',
        'Implementé control de acceso basado en roles con navegación dinámica y renderizado de UI basado en permisos.',
        'Diseñé una interfaz de usuario intuitiva para gestionar empleados, nómina, progreso del trabajo y operaciones de finca.',
        'Optimicé el rendimiento frontend con carga diferida, memorización y gestión eficiente del estado.',
      ],
      stack:
        'React, NodeJs, Nextjs, Nestjs, Typescript, Prisma, Firebase, React-Query, ChakraUI, Material-UI, Formik, Yup, Recharts, html2canvas, jsPDF',
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
