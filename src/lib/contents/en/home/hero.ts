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
    'Over 3 years of experience developing scalable and maintainable web applications with JavaScript, React, and Node.js. Committed to clean and efficient code.',
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
