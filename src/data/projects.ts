import type { Project } from "../interfaces/project.model";

export const projects: Project[] = [
  {
    id: '001',
    title: 'Porfolio',
    company: 'Cloudvs',
    description: 'About me',
    duration: '2 semanas',
    tools: ['Astrojs', 'Tailwind', 'TypeScript'],
    image: 'src/assets/dashboard_sol.png',
    link: 'https://example.com'
  },
  {
    id: '002',
    title: 'Procesos Back',
    company: 'Banco Sol',
    description: 'Sistema de gestión de procesos internos',
    duration: '12 meses',
    tools: ['Nextjs', 'Typescript', 'Mui.ui', 'NetCore', 'PostgreSQL'],
    image: 'src/assets/dashboard_sol.png',
    link: 'https://example.com'
  },
  {
    id: '003',
    title: 'Super Gestor',
    company: 'Banco Fassil',
    description: 'Sistema de apertura de cuentas',
    duration: '18 meses',
    tools: ['Angular 12+', 'Typescript', 'Material.ui', 'NetCore', 'SQL Server'],
    image: 'src/assets/dashboard_fassil.png',
    link: 'https://example.com'
  },
  {
    id: '004',
    title: 'Ganamovil',
    company: 'Banco Ganadero',
    description: 'Led frontend development for the mobile banking app on iOS and Android platforms. Collaborated with the design team to build attractive, functional mobile experiences Developed UI components using JavaScript technologies Optimized mobile app performance for smooth and responsive usage Conducted testing across multiple devices and resolutions Stayed up- to - date with mobile frontend trends and applied them to projects Led the development of new modules that helped the app reach a 4.7 rating on app stores Implemented fully online loan and credit card application features, increasing user retention and improving interaction within the app',
    duration: '12 meses',
    tools: ['Javascript', 'Css3', '.Net', 'Oracle'],
    image: 'src/assets/app_ganadero.png',
    link: 'https://example.com'
  },
  {
    id: '005',
    title: 'App Patio Service',
    company: 'Patio Service',
    description: 'Aplicacion de Delivery',
    duration: '12 meses',
    tools: ['Angular', 'Ionic', 'Css', 'PostgreSQL'],
    image: 'src/assets/app_patio.png',
    link: 'https://example.com'
  }
]
