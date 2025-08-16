export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  stack: string;
}

export const experienceContent = {
  title: 'Experiencia Profesional',
  subtitle: 'Mi trayectoria como FullStack Developer',
  description:
    'A lo largo de mi carrera, he trabajado en diversos proyectos y empresas, desarrollando soluciones web robustas y escalables, colaborando con equipos multidisciplinarios y aplicando las mejores prácticas de desarrollo.',
  experiences: [
    {
      company: 'Agropaís | Ecuador',
      role: 'Frontend Developer',
      period: 'Agosto 2024 - Mayo 2025',
      responsibilities: [
        'Lideré la optimización de UI para un sistema de gestión de procesos agrícolas.',
        'Desarrollé componentes reutilizables de React + TypeScript para mejorar la escalabilidad.',
        'Reduje los tiempos de carga en un 25% a través de la optimización de rendimiento.',
      ],
      stack: 'React, TypeScript, TailwindCSS, Next.js, Shadcn, SWR',
    },
    {
      company: 'ExportMétricas',
      role: 'Full Stack Developer',
      period: 'Octubre 2023 - Julio 2024',
      responsibilities: [
        'Construí un sistema para la gestión de operaciones de exportación de banano.',
        'Implementé módulos para el seguimiento de materiales y gestión de pagos a productores.',
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
