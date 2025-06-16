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
    'Más de 3 años de experiencia desarrollando aplicaciones web escalables y mantenibles con JavaScript, React y Node.js. Comprometido con código limpio y eficiente.',
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
