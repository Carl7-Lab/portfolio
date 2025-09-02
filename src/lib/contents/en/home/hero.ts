import { socialMedia } from '@/lib/social-media';

export const heroContent = {
  name: {
    first: 'Carlos',
    last: 'Cuesta',
    firstClass: 'text-blue-600',
    lastClass: 'text-teal-500',
  },
  role: 'FullStack Developer',
  tagline: 'Creating exceptional web experiences',
  description:
    'FullStack Developer with over 3 years of experience building responsive, accessible, and high-performance interfaces. Skilled in React, Next.js, and TypeScript, and experienced in collaborating with UX/UI teams to transform Figma prototypes into functional, user-friendly products. Focused on optimizing performance and usability. Passionate about clean, maintainable code and delivering outstanding user experiences.',
  buttons: [
    {
      label: 'View Projects',
      href: '#projects',
      icon: '<>',
    },
    {
      label: 'Download CV',
      href: '/cv.pdf',
      icon: 'download',
      download: true,
    },
  ],
  socials: socialMedia,
};
