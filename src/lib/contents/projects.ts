export interface ProjectItem {
  name: string;
  description: string;
  stack: string;
  link?: string;
}

export const projectsContent: ProjectItem[] = [
  {
    name: 'CryptoApp',
    description:
      'Developed a web application for visualizing and capturing information on the value of a chosen cryptocurrency. The application includes modules for viewing current market value and historical data, featuring interactive charts and graphs for comprehensive analysis. It is designed to provide users with detailed insights into cryptocurrency trends and performance.',
    stack: 'React, Typescript, Vite, TailwindCSS',
    // link: '', // Puedes agregar el link si tienes uno
  },
];
