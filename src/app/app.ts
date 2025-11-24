import { DOCUMENT } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

type NavLink = { label: string; target: string };
type SkillCategory = { title: string; items: string[]; icon: string };
type Project = {
  title: string;
  summary: string;
  stack: string[];
  highlights: string[];
  links: { github?: string; demo?: string };
};
type TimelineItem = { period: string; title: string; org: string; details: string };
type ContactLink = { label: string; href: string; icon: string };

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly document = inject(DOCUMENT);

  readonly title = 'Khadija Oukhlift';
  readonly subtitle = 'Développeuse web full-stack Java & Angular';
  readonly isDarkMode = signal(false);
  readonly currentYear = new Date().getFullYear();

  readonly navLinks: NavLink[] = [
    { label: 'Accueil', target: '#home' },
    { label: 'À propos', target: '#about' },
    { label: 'Compétences', target: '#skills' },
    { label: 'Projets', target: '#projects' },
    { label: 'Parcours', target: '#experience' },
    { label: 'Contact', target: '#contact' }
  ];

  readonly stats = [
    { label: 'Projets livrés', value: '12+' },
    { label: 'Stack principale', value: 'Java · Spring · Angular' },
    { label: 'Expérience agile', value: 'Scrum / Kanban' }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Front-end',
      icon: '🌐',
      items: ['HTML · CSS · Sass', 'TypeScript', 'Angular', 'React', 'Vue', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Back-end',
      icon: '⚙️',
      items: ['Java · JEE', 'Spring Boot', 'Spring Security', 'JPA · Hibernate', 'RESTful APIs', 'JWT · OAuth2']
    },
    {
      title: 'Data & Cloud',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'Docker', 'CI/CD (GitHub Actions)', 'Swagger · Postman']
    },
    {
      title: 'Gestion & Design',
      icon: '🧭',
      items: ['Scrum · Kanban', 'Jira · Trello', 'Git · GitHub · GitLab', 'UML · Modélisation']
    }
  ];

  readonly personalSkills = [
    'Curiosité technologique',
    'Sens de l’analyse',
    'Travail en équipe (Scrum)',
    'Autonomie projet',
    'Apprentissage rapide',
    'Communication claire'
  ];

  readonly languages = [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Tamazight', level: 'Courant' },
    { name: 'Espagnol', level: 'Intermédiaire' }
  ];

  readonly projects: Project[] = [
    {
      title: 'Delivery Match',
      summary:
        'Plateforme de covoiturage de colis reliant expéditeurs et voyageurs avec suivi en temps réel.',
      stack: ['Angular 18', 'Spring Boot', 'Docker', 'PostgreSQL', 'Chart.js', 'Postman'],
      highlights: [
        'Gestion sécurisée des comptes, trajets, notifications et paiements.',
        'Dashboard analytique (Chart.js) et workflows automatisés via APIs.',
        'Conteneurisation Docker + orchestration des services backend.'
      ],
      links: {
        github: 'https://github.com/Khadeej01',
        demo: 'https://delivery-match-demo.com'
      }
    },
    {
      title: 'ConstructionXpert',
      summary:
        'Application web de pilotage des projets de construction : tâches, ressources et budgets.',
      stack: ['Java EE', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Tailwind CSS'],
      highlights: [
        'Gestion multi-projets avec workflow validation et reporting interactif.',
        'Moteur de règles pour anticiper dérives coûts/charges.',
        'Intégration continue GitLab CI + documentation Swagger.'
      ],
      links: {
        github: 'https://github.com/Khadeej01',
        demo: 'https://constructionxpert-demo.com'
      }
    },
    {
      title: 'Suite APIs REST sécurisées',
      summary:
        'Collection d’APIs REST (Java / Spring) pour la gestion d’utilisateurs, authentification et catalogues.',
      stack: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Swagger'],
      highlights: [
        'Sécurisation OAuth2/JWT avec rôles granulaires.',
        'Suite de tests JUnit5 / Mockito et pipeline GitHub Actions.',
        'Documentation interactive Swagger + scripts Postman.'
      ],
      links: {
        github: 'https://github.com/Khadeej01',
        demo: 'https://rest-suite-demo.com'
      }
    }
  ];

  readonly experiences: TimelineItem[] = [
    {
      period: '2024 – Présent',
      title: 'Développeuse web freelance',
      org: 'Khadeej01 Studio',
      details:
        'Conception d’applications sur mesure (Angular, Spring Boot) pour PME : automatisation métier, intégrations API, optimisation UX et performance.'
    },
    {
      period: '2022 – 2023',
      title: 'Ingénieure d’études (Stage / Alternance)',
      org: 'Startup tech – Casablanca',
      details:
        'Développement d’un portail client Angular + micro-services Java ; mise en place de tests automatisés, CI/CD et monitoring applicatif.'
    }
  ];

  readonly education: TimelineItem[] = [
    {
      period: '2021 – 2022',
      title: 'Formation Full Stack Java / Angular',
      org: 'Programme intensif (en ligne)',
      details: 'Architecture hexagonale, sécurisation Spring, performance front, bonnes pratiques Git.'
    },
    {
      period: '2018 – 2021',
      title: 'Parcours Informatique & Génie logiciel',
      org: 'Université (à préciser)',
      details: 'Algorithmique avancée, UML, modélisation de données, gestion de projet agile.'
    }
  ];

  readonly contactLinks: ContactLink[] = [
    { label: 'GitHub', href: 'https://github.com/Khadeej01', icon: 'GH' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khadija-oukhlift', icon: 'IN' },
    { label: 'Email', href: 'mailto:khadeej01@gmail.com', icon: '@' }
  ];

  constructor() {
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      this.document.documentElement.setAttribute('data-theme', theme);
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
  }
}
