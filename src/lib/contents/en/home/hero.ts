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
    'FullStack Developer with over 3 years of experience building responsive, accessible, and high-performance interfaces. Strong command of React, Next.js, and TypeScript, plus backend experience with Bun and Hono and integrations such as Stripe, OpenRouter, and Azure Computer Vision. Focused on performance and usability, collaborating with UX/UI teams to turn Figma prototypes into functional and user-friendly products.',
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
