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
    'Desarrollador FullStack con más de 3 años de experiencia construyendo interfaces responsivas, accesibles y de alto rendimiento. Dominio de React, Next.js y TypeScript, además de experiencia en backend con Bun y Hono e integraciones como Stripe, OpenRouter y Azure Computer Vision. Enfocado en optimizar el rendimiento y la usabilidad, colaborando con equipos de UX/UI para transformar prototipos de Figma en productos funcionales y amigables para el usuario.',
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
