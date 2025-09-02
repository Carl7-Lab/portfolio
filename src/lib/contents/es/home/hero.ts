import { socialMedia } from '@/lib/social-media';

export const heroContent = {
  name: {
    first: 'Carlos',
    last: 'Cuesta',
    firstClass: 'text-blue-600',
    lastClass: 'text-teal-500',
  },
  role: 'FullStack Developer',
  tagline: 'Creando experiencias web excepcionales',
  description:
    'Desarrollador FullStack con más de 3 años de experiencia construyendo interfaces responsivas, accesibles y de alto rendimiento. Experto en React, Next.js y TypeScript, y con experiencia en colaborar con equipos de UX/UI para transformar prototipos de Figma en productos funcionales y amigables para el usuario. Enfocado en optimizar el rendimiento y la usabilidad. Apasionado por el código limpio, mantenible y por entregar experiencias de usuario excepcionales.',
  buttons: [
    {
      label: 'Ver Proyectos',
      href: '#projects',
      icon: '<>',
    },
    {
      label: 'Descargar CV',
      href: '/cv.pdf',
      icon: 'download',
      download: true,
    },
  ],
  socials: socialMedia,
};
