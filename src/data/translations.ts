export type Language = 'es' | 'en' | 'fr' | 'pt' | 'nl' | 'de';

export interface Experience {
  company: string;
  role: string;
  date: string;
  desc: string;
  bullets: string[];
  stack: { f: string; l: string; d: string };
  highlight?: boolean;
}

export interface EducationItem {
  title: string;
  school: string;
  date: string;
  type: 'degree' | 'master' | 'certification';
}

export interface StackCategory {
  categoryName: string;
  description: string;
  items: { name: string; level: string; icon?: string; badge?: string }[];
}

export interface Translation {
  nav: {
    experience: string;
    education: string;
    coverLetter: string;
    stack: string;
    contact: string;
    downloadPdf: string;
  };
  hero: {
    subtitle: string;
    title: string;
    bio: string;
    status: string;
    contactBtn: string;
    viewCoverBtn: string;
  };
  expTitle: string;
  expSubtitle: string;
  eduTitle: string;
  eduSubtitle: string;
  coverTitle: string;
  coverSubtitle: string;
  coverTagline: string;
  coverGreeting: string;
  coverP1: string;
  coverP2: string;
  coverP3: string;
  coverValediction: string;
  stackTitle: string;
  stackSubtitle: string;
  contactTitle: string;
  contactSubtitle: string;
  emailLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
  portfolioLabel: string;
  experiences: Experience[];
  education: EducationItem[];
  stackCategories: StackCategory[];
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      experience: "Experiencia",
      education: "Estudios",
      coverLetter: "Cover Letter",
      stack: "Stack Completo",
      contact: "Contacto",
      downloadPdf: "📥 Descargar PDF"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 años de experiencia liderando equipos técnicos, diseñando arquitecturas digitales escalables y transformando retos de negocio complejos en software de alto impacto.",
      status: "🟢 Disponible para proyectos Freelance & Contratación",
      contactBtn: "💬 Contactar",
      viewCoverBtn: "✉️ Ver Cover Letter"
    },
    expTitle: "Experiencia Profesional",
    expSubtitle: "Trayectoria de liderazgo y desarrollo técnico en proyectos de alto nivel",
    eduTitle: "Historial Académico & Certificaciones",
    eduSubtitle: "Formación universitaria, másteres y titulaciones oficiales reguladas",
    coverTitle: "Carta de Presentación",
    coverSubtitle: "Propuesta de valor, vocación y flexibilidad de colaboración",
    coverTagline: "💡 Pasión por la Tecnología & Versatilidad Profesional",
    coverGreeting: "Estimado/a responsable de selección / equipo de desarrollo,",
    coverP1: "Me dirijo a usted con el entusiasmo de quien tiene la fortuna de ejercer diariamente su profesión favorita: la ingeniería de software y la arquitectura de sistemas Full Stack. Con más de 12 años de experiencia liderando y desarrollando soluciones digitales de alto impacto, mi motor principal sigue siendo el mismo desde el primer día: escribir código limpio, escalable y transformar retos complejos en productos de excelencia.",
    coverP2: "A lo largo de mi trayectoria he diseñado sistemas frontend y backend (React, Next.js, Vue.js, Angular, Node.js) y gestionado entornos cloud (GCloud, AWS, Docker). Entiendo la colaboración técnica desde la máxima flexibilidad: por ello, ofrezco mis servicios tanto en modalidad de <strong>consultoría freelance (contrato mercantil / B2B)</strong> como a través de <strong>diferentes tipos de contratación laboral</strong> (remoto, híbrido, jornada completa o por proyectos), adaptándome a las necesidades reales de su organización.",
    coverP3: "Mi objetivo es continuar evolucionando profesionalmente junto a equipos ambiciosos, aportando visión técnica estratégica, solidez y un liderazgo positivo. Estaré encantado de mantener una conversación para profundizar en cómo puedo contribuir al éxito de sus próximos proyectos.",
    coverValediction: "Atentamente,\nAlberto Ledesma Ollega",
    stackTitle: "Stack Técnico & Herramientas de Carrera",
    stackSubtitle: "Desglose exhaustivo de tecnologías y metodologías dominadas a lo largo de +12 años",
    contactTitle: "Contacto & Vinculación",
    contactSubtitle: "Canales directos para iniciar colaboraciones freelance o contrataciones",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono Directo",
    linkedinLabel: "Perfil Profesional LinkedIn",
    portfolioLabel: "Portfolio Web",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Desarrollador Front-end (Consultoría Freelance)",
        date: "mar. 2026 - ago. 2026 (6 meses)",
        desc: "Consultor frontend freelance integrado en el equipo de desarrollo para una gran plataforma analítica en el sector asegurador.",
        bullets: [
          "Desarrollo y mantenimiento de componentes de interfaz de usuario con Vue.js y TypeScript para visualización de datos complejos y gestión de informes.",
          "Resolución de incidencias técnicas en flujos transversales de la aplicación, garantizando la sincronización de datos entre vistas de UI y módulos de exportación.",
          "Optimización y corrección de bugs de tipado estricto y formateo numérico en informes descargables.",
          "Participación activa en Code Reviews, resolución de hilos técnicos en entornos de integración continua y mantenimiento de la calidad de código mediante test coverage."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (Proyecto Avatar IA)",
        role: "Technical Lead (Consultoría Freelance)",
        date: "may. 2024 - ago. 2025 (1 año 3 meses)",
        desc: "Liderazgo técnico como consultor freelance especializado en el desarrollo de un avatar interactivo de IA para ferias de alto nivel.",
        bullets: [
          "Arquitectura de baja latencia para respuesta en tiempo real mediante IA generativa.",
          "Garantía de calidad mediante Testing Unitario y pipelines de CI/CD.",
          "Traducción de diseños complejos de Figma a interfaces pixel-perfect."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Responsable Técnico Full Stack",
        date: "oct. 2021 - Actualidad",
        desc: "Transformación digital y optimización de rendimiento para plataformas de marketing.",
        bullets: [
          "Implementación de arquitecturas Headless CMS con WordPress.",
          "Optimización de assets mediante Cloudinary mejorando el LCP y SEO.",
          "Interfaces autogestionables que reducen costes operativos."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "SEO Técnico, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Jefe Técnico & Angular Developer",
        date: "may. 2020 - ene. 2024",
        desc: "Dirección técnica en producto Fintech con enfoque en automatización y escalabilidad.",
        bullets: [
          "Automatización de procesos financieros críticos mediante Cron Jobs robustos.",
          "Gestión de infraestructura escalable en Google Cloud utilizando Docker.",
          "Establecimiento de cultura de calidad con testing E2E (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "CONSULTORÍA SENIOR (Autónomo)",
        role: "Upfield, Amovens & Grandes Cuentas",
        date: "ene. 2016 - Actualidad",
        desc: "Soluciones escalables para retos técnicos complejos en empresas líderes.",
        bullets: [
          "Upfield: Dashboard logístico global con sincronización masiva de inventario (Cron Jobs).",
          "Amovens: Optimización core de React y estabilización mediante suites de testing Jest.",
          "SEO: Consultoría técnica especializada para maximizar el tráfico orgánico."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Grado en Ingeniería de Software", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Máster en Programación Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Técnico Superior en Desarrollo de Apps Multiplataforma (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Certificación Oficial en React & Frontend Architecture", school: "Curso Regulado / Titulación Oficial", date: "2021", type: "certification" },
      { title: "Certificación Regulada en SQL & Gestores de Bases de Datos", school: "Titulación Oficial Avanzada", date: "2019", type: "certification" },
      { title: "Especialización Oficial en Data Science & IA (Python / ML)", school: "Curso Regulado Profesional", date: "2023", type: "certification" },
      { title: "Certificación Oficial Cloud Infrastructure & DevOps (AWS/Docker)", school: "Titulación Regulada", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI Architecture",
        description: "Tecnologías clave para la creación de interfaces interactivas y pixel-perfect",
        items: [
          { name: "React.js", level: "Experto (+10 años)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Experto (+6 años)", badge: "Core" },
          { name: "Vue.js", level: "Avanzado (+4 años)", badge: "Accenture" },
          { name: "Angular", level: "Avanzado (+5 años)", badge: "Jubilame" },
          { name: "TypeScript", level: "Experto (+8 años)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Experto (+12 años)", badge: "Core" },
          { name: "Tailwind CSS", level: "Experto (+5 años)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Experto (+12 años)", badge: "Fundamentos" },
          { name: "State Management (Redux, Zustand, Context)", level: "Experto", badge: "Arquitectura" }
        ]
      },
      {
        categoryName: "Backend & System Design",
        description: "Servicios escalables, APIs RESTful y lógica de servidor",
        items: [
          { name: "Node.js", level: "Experto (+9 años)", badge: "Backend" },
          { name: "Express.js", level: "Experto (+9 años)", badge: "Backend" },
          { name: "RESTful APIs", level: "Experto (+12 años)", badge: "Arquitectura" },
          { name: "Cron Jobs & Schedulers", level: "Avanzado", badge: "Fintech / Logistics" },
          { name: "Webhooks Architecture", level: "Avanzado", badge: "IA / Integraciones" },
          { name: "Headless CMS (WordPress REST API)", level: "Experto", badge: "Erescambio" },
          { name: "GraphQL", level: "Intermedio-Avanzado", badge: "APIs" },
          { name: "Rate Limiting & Security", level: "Avanzado", badge: "Seguridad" }
        ]
      },
      {
        categoryName: "Data, Artificial Intelligence & Media",
        description: "Bases de datos relacionales/NoSQL e integración de IA de vanguardia",
        items: [
          { name: "Data Science & Python (ML Basics)", level: "Certificación Oficial", badge: "Titulación Regulada" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Experto (+10 años)", badge: "Titulación Oficial" },
          { name: "MongoDB / NoSQL", level: "Avanzado (+6 años)", badge: "Bases de Datos" },
          { name: "HeyGen (Avatares IA Generativos)", level: "Líder Técnico", badge: "GFT IA" },
          { name: "PIPECAT (Streaming de Voz/IA)", level: "Líder Técnico", badge: "GFT IA" },
          { name: "Cloudinary (Flujos de Média)", level: "Experto", badge: "Erescambio" },
          { name: "Data Visualization (Recharts, Chart.js)", level: "Avanzado", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infrastructure & DevOps",
        description: "Contenedores, plataformas en la nube e integración continua",
        items: [
          { name: "Docker & Containerization", level: "Avanzado (+6 años)", badge: "Certificación Oficial" },
          { name: "Google Cloud Platform (GCloud)", level: "Avanzado (+5 años)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Avanzado (+5 años)", badge: "Certificación Oficial" },
          { name: "Vercel / Netlify Deployments", level: "Experto", badge: "Despliegues" },
          { name: "CI/CD Pipelines (GitHub Actions, GitLab)", level: "Avanzado", badge: "DevOps" },
          { name: "Testing Unitario (Jest, React Testing Library)", level: "Experto", badge: "QA" },
          { name: "Testing E2E (Cypress)", level: "Avanzado", badge: "QA" }
        ]
      },
      {
        categoryName: "Herramientas, SEO & Metodologías",
        description: "Optimización de motores de búsqueda, diseño y gestión de proyectos",
        items: [
          { name: "SEO Técnico & Core Web Vitals", level: "Especialista", badge: "Performance" },
          { name: "Git & Version Control", level: "Experto (+12 años)", badge: "Herramienta" },
          { name: "Jira / Agilidad (Scrum & Kanban)", level: "Líder Técnico", badge: "Gestión" },
          { name: "Figma (Figma-to-Code)", level: "Avanzado", badge: "UI/UX" },
          { name: "Code Review & Technical Mentoring", level: "Líder Técnico", badge: "Liderazgo" }
        ]
      }
    ]
  },
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Contact",
      downloadPdf: "📥 Download PDF"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 years of experience leading technical teams, architecting scalable digital solutions, and transforming complex business challenges into high-impact software.",
      status: "🟢 Available for Freelance & Contract Roles",
      contactBtn: "💬 Get in Touch",
      viewCoverBtn: "✉️ View Cover Letter"
    },
    expTitle: "Professional Experience",
    expSubtitle: "Track record of technical leadership and development in enterprise projects",
    eduTitle: "Academic History & Certifications",
    eduSubtitle: "University degree, master's degrees, and official regulated qualifications",
    coverTitle: "Cover Letter",
    coverSubtitle: "Value proposition, vocation, and flexible collaboration options",
    coverTagline: "💡 Passion for Technology & Professional Versatility",
    coverGreeting: "Dear Hiring Manager / Talent Acquisition Team,",
    coverP1: "I am writing to express my enthusiasm as someone fortunate enough to work every day in their favorite profession: software engineering and Full Stack system architecture. With over 12 years of experience leading and building high-impact digital solutions, my core motivation remains unchanged: writing clean, scalable code and transforming complex technical challenges into exceptional products.",
    coverP2: "Throughout my career, I have architected frontend and backend systems (React, Next.js, Vue.js, Angular, Node.js) and managed cloud infrastructure (GCloud, AWS, Docker). I approach technical collaboration with ultimate flexibility: therefore, I offer my services both via <strong>freelance consulting (B2B contract)</strong> and through <strong>various employment contract models</strong> (remote, hybrid, full-time, or project-based), tailoring my engagement to your organization's specific goals.",
    coverP3: "My objective is to continue growing professionally alongside ambitious teams, contributing strategic vision, technical excellence, and positive leadership. I would welcome the opportunity to discuss how my background and expertise can drive success for your upcoming initiatives.",
    coverValediction: "Best regards,\nAlberto Ledesma Ollega",
    stackTitle: "Technical Stack & Career Tools",
    stackSubtitle: "Exhaustive breakdown of technologies and methodologies mastered over 12+ years",
    contactTitle: "Contact & Engagement",
    contactSubtitle: "Direct channels to initiate freelance collaborations or hiring discussions",
    emailLabel: "Email Address",
    phoneLabel: "Direct Phone",
    linkedinLabel: "LinkedIn Profile",
    portfolioLabel: "Web Portfolio",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Front-end Developer (Freelance Consultant)",
        date: "Mar. 2026 - Aug. 2026 (6 mos)",
        desc: "Integrated as a freelance frontend consultant into the development team for a major analytical platform within the insurance sector.",
        bullets: [
          "Developed and maintained user interface components using Vue.js and TypeScript for complex data visualization and report management.",
          "Resolved technical incidents across cross-cutting application flows, ensuring seamless data synchronization between UI views and document export modules.",
          "Fixed and optimized bugs related to strict data typing and numeric data formatting within downloadable reports.",
          "Actively participated in Code Reviews, addressed technical threads in continuous integration environments, and maintained code quality through test coverage."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (AI Avatar Project)",
        role: "Technical Lead (Freelance Consultant)",
        date: "May 2024 - Aug. 2025 (1y 3m)",
        desc: "Technical leadership as a freelance consultant in the development of an interactive AI avatar for trade shows.",
        bullets: [
          "Low-latency architecture for real-time response using generative AI.",
          "QA through Unit Testing and CI/CD pipelines for live events.",
          "Figma-to-code translation for pixel-perfect interfaces."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Technical Full Stack Lead",
        date: "Oct. 2021 - Present",
        desc: "Digital transformation and performance optimization for marketing platforms.",
        bullets: [
          "Headless CMS implementation with WordPress to maximize speed.",
          "Asset optimization via Cloudinary significantly improving SEO.",
          "Self-managed interfaces reducing client operational costs."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "Technical SEO, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Technical Lead & Angular Developer",
        date: "May 2020 - Jan. 2024",
        desc: "Technical direction in Fintech product focused on automation.",
        bullets: [
          "Automation of critical financial processes via robust Cron Jobs.",
          "Scalable infrastructure on Google Cloud using Docker.",
          "Establishing a quality culture with E2E testing (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "SENIOR CONSULTING (Freelance)",
        role: "Upfield, Amovens & Enterprise Clients",
        date: "Jan. 2016 - Present",
        desc: "Scalable solutions for complex technical challenges in leading companies.",
        bullets: [
          "Upfield: Global logistics Dashboard with massive inventory synchronization.",
          "Amovens: React core optimization and stabilization via Jest testing.",
          "SEO: Specialized technical consulting to maximize organic traffic."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Bachelor's Degree in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master's Degree in Full Stack Web Development", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Higher Degree in Multiplatform Application Dev (DAM)", school: "IES Nervión (Seville)", date: "2008 - 2010", type: "degree" },
      { title: "Official Certification in React & Frontend Architecture", school: "Regulated Professional Course", date: "2021", type: "certification" },
      { title: "Regulated Certification in SQL & Database Management", school: "Official Advanced Qualification", date: "2019", type: "certification" },
      { title: "Official Specialization in Data Science & AI (Python / ML)", school: "Regulated Professional Course", date: "2023", type: "certification" },
      { title: "Official Certification in Cloud Infrastructure & DevOps (AWS/Docker)", school: "Regulated Qualification", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI Architecture",
        description: "Core technologies for building responsive, pixel-perfect interfaces",
        items: [
          { name: "React.js", level: "Expert (+10 yrs)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Expert (+6 yrs)", badge: "Core" },
          { name: "Vue.js", level: "Advanced (+4 yrs)", badge: "Accenture" },
          { name: "Angular", level: "Advanced (+5 yrs)", badge: "Jubilame" },
          { name: "TypeScript", level: "Expert (+8 yrs)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Expert (+12 yrs)", badge: "Core" },
          { name: "Tailwind CSS", level: "Expert (+5 yrs)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Expert (+12 yrs)", badge: "Foundations" },
          { name: "State Management (Redux, Zustand, Context)", level: "Expert", badge: "Architecture" }
        ]
      },
      {
        categoryName: "Backend & System Design",
        description: "Scalable services, RESTful APIs, and server-side logic",
        items: [
          { name: "Node.js", level: "Expert (+9 yrs)", badge: "Backend" },
          { name: "Express.js", level: "Expert (+9 yrs)", badge: "Backend" },
          { name: "RESTful APIs", level: "Expert (+12 yrs)", badge: "Architecture" },
          { name: "Cron Jobs & Schedulers", level: "Advanced", badge: "Fintech / Logistics" },
          { name: "Webhooks Architecture", level: "Advanced", badge: "AI / Integrations" },
          { name: "Headless CMS (WordPress REST API)", level: "Expert", badge: "Erescambio" },
          { name: "GraphQL", level: "Intermediate-Advanced", badge: "APIs" },
          { name: "Rate Limiting & Security", level: "Advanced", badge: "Security" }
        ]
      },
      {
        categoryName: "Data, Artificial Intelligence & Media",
        description: "Relational/NoSQL databases and cutting-edge AI integration",
        items: [
          { name: "Data Science & Python (ML Basics)", level: "Official Certification", badge: "Regulated Degree" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Expert (+10 yrs)", badge: "Official Degree" },
          { name: "MongoDB / NoSQL", level: "Advanced (+6 yrs)", badge: "Databases" },
          { name: "HeyGen (Generative AI Avatars)", level: "Technical Lead", badge: "GFT AI" },
          { name: "PIPECAT (Audio/AI Streaming)", level: "Technical Lead", badge: "GFT AI" },
          { name: "Cloudinary (Asset Workflows)", level: "Expert", badge: "Erescambio" },
          { name: "Data Visualization (Recharts, Chart.js)", level: "Advanced", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infrastructure & DevOps",
        description: "Containerization, cloud platforms, and continuous integration",
        items: [
          { name: "Docker & Containerization", level: "Advanced (+6 yrs)", badge: "Official Certification" },
          { name: "Google Cloud Platform (GCloud)", level: "Advanced (+5 yrs)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Advanced (+5 yrs)", badge: "Official Certification" },
          { name: "Vercel / Netlify Deployments", level: "Expert", badge: "Deployments" },
          { name: "CI/CD Pipelines (GitHub Actions, GitLab)", level: "Advanced", badge: "DevOps" },
          { name: "Unit Testing (Jest, React Testing Library)", level: "Expert", badge: "QA" },
          { name: "E2E Testing (Cypress)", level: "Advanced", badge: "QA" }
        ]
      },
      {
        categoryName: "Tools, SEO & Methodologies",
        description: "Search engine optimization, design, and project leadership",
        items: [
          { name: "Technical SEO & Core Web Vitals", level: "Specialist", badge: "Performance" },
          { name: "Git & Version Control", level: "Expert (+12 yrs)", badge: "Tools" },
          { name: "Jira / Agile (Scrum & Kanban)", level: "Technical Lead", badge: "Management" },
          { name: "Figma (Figma-to-Code)", level: "Advanced", badge: "UI/UX" },
          { name: "Code Review & Technical Mentoring", level: "Technical Lead", badge: "Leadership" }
        ]
      }
    ]
  },
  fr: {
    nav: {
      experience: "Expérience",
      education: "Études",
      coverLetter: "Cover Letter",
      stack: "Stack Complet",
      contact: "Contact",
      downloadPdf: "📥 Télécharger le PDF"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Architecte Frontend",
      title: "Alberto Ledesma Ollega",
      bio: "+12 ans d'expérience dans la direction d'équipes techniques, la conception d'architectures numériques évolutives et la transformation de défis complexes.",
      status: "🟢 Disponible pour projets Freelance & Contrats",
      contactBtn: "💬 Me Contacter",
      viewCoverBtn: "✉️ Voir la Cover Letter"
    },
    expTitle: "Expérience Professionnelle",
    expSubtitle: "Parcours de leadership et de développement technique dans des projets d'envergure",
    eduTitle: "Parcours Académique & Certifications",
    eduSubtitle: "Formation universitaire, masters et diplômes officiels réglementés",
    coverTitle: "Lettre de Motivation",
    coverSubtitle: "Proposition de valeur, vocation et flexibilité de collaboration",
    coverTagline: "💡 Passion pour la Technologie & Polyvalence Professionnelle",
    coverGreeting: "Madame, Monsieur, Responsable du recrutement / Équipe technique,",
    coverP1: "Je m'adresse à vous avec l'enthousiasme de celui qui a la chance d'exercer quotidiennement sa profession favorite : l'ingénierie logicielle et l'architecture de systèmes Full Stack. Avec plus de 12 ans d'expérience dans la direction et le développement de solutions numériques à haut impact, ma motivation principale reste la même depuis le premier jour : écrire un code propre, évolutif et transformer des défis complexes en produits d'excellence.",
    coverP2: "Tout au long de mon parcours, j'ai conçu des systèmes frontend et backend (React, Next.js, Vue.js, Angular, Node.js) et géré des environnements cloud (GCloud, AWS, Docker). J'aborde la collaboration technique avec une flexibilité maximale : c'est pourquoi je propose mes services aussi bien en <strong>consulting freelance (contrat B2B)</strong> que via <strong>différents types de contrats de travail</strong> (à distance, hybride, temps plein ou au projet), en m'adaptant aux besoins spécifiques de votre organisation.",
    coverP3: "Mon objectif est de continuer à évoluer professionnellement au sein d'équipes ambitieuses, en apportant une vision stratégique, une rigueur technique et un leadership positif. Je serais ravi de vous rencontrer lors d'un entretien pour échanger sur la manière dont mon expérience peut contribuer au succès de vos futurs projets.",
    coverValediction: "Veuillez agréer mes salutations distinguées,\nAlberto Ledesma Ollega",
    stackTitle: "Stack Technique & Outils de Carrière",
    stackSubtitle: "Bilan exhaustif des technologies et méthodologies maîtrisées sur +12 ans",
    contactTitle: "Contact & Prise de Contact",
    contactSubtitle: "Canaux directs pour initier des collaborations freelance ou des recrutements",
    emailLabel: "Adresse E-mail",
    phoneLabel: "Téléphone Direct",
    linkedinLabel: "Profil LinkedIn",
    portfolioLabel: "Portfolio Web",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Développeur Front-end (Consulting Freelance)",
        date: "mars 2026 - août 2026 (6 mois)",
        desc: "Consultant frontend freelance intégré à l'équipe de développement pour une grande plateforme analytique dans le secteur de l'assurance.",
        bullets: [
          "Développement et maintenance de composants d'interface utilisateur avec Vue.js et TypeScript pour la visualisation de données complexes et la gestion de rapports.",
          "Résolution d'incidents techniques sur des flux transversaux d'applications, garantissant une synchronisation fluide des données entre les vues UI et les modules d'exportation.",
          "Optimisation et correction de bugs liés au typage strict des données et au formatage numérique dans les rapports téléchargeables.",
          "Participation active aux Code Reviews, résolution de sujets techniques dans des environnements d'intégration continue et maintien de la qualité du code par le test coverage."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (Projet Avatar IA)",
        role: "Technical Lead (Consulting Freelance)",
        date: "mai 2024 - août 2025 (1 an 3 mois)",
        desc: "Leadership technique en tant que consultant freelance spécialisé dans le développement d'un avatar IA interactif pour des salons professionnels de haut niveau.",
        bullets: [
          "Architecture à faible latence pour des réponses en temps réel via l'IA générative.",
          "Assurance qualité via des tests unitaires et des pipelines CI/CD pour des événements en direct.",
          "Intégration fidèle de designs complexes Figma vers des interfaces pixel-perfect."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Responsable Technique Full Stack",
        date: "oct. 2021 - Présent",
        desc: "Transformation numérique et optimisation des performances pour plateformes marketing.",
        bullets: [
          "Mise en œuvre d'architectures Headless CMS avec WordPress.",
          "Optimisation des assets via Cloudinary améliorant considérablement le LCP et le SEO.",
          "Interfaces auto-gérables réduisant les coûts opérationnels."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "SEO Technique, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Lead Technique & Développeur Angular",
        date: "mai 2020 - janv. 2024",
        desc: "Direction technique d'un produit Fintech axé sur l'automatisation et l'évolutivité.",
        bullets: [
          "Automatisation de processus financiers critiques via des Cron Jobs robustes.",
          "Gestion d'infrastructures évolutives sur Google Cloud avec Docker.",
          "Mise en place d'une culture de qualité avec des tests E2E (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "CONSULTING SENIOR (Indépendant)",
        role: "Upfield, Amovens & Grands Comptes",
        date: "janv. 2016 - Présent",
        desc: "Solutions évolutives pour des défis techniques complexes chez des entreprises leaders.",
        bullets: [
          "Upfield : Dashboard logistique mondial avec synchronisation massive des stocks.",
          "Amovens : Optimisation du cœur React et stabilisation via des suites de tests Jest.",
          "SEO : Conseil technique spécialisé pour maximiser le trafic organique."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Licence en Ingénierie Logicielle", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master en Développement Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Diplôme Supérieur DAM (Développement d'Apps Multiplateformes)", school: "IES Nervión (Séville)", date: "2008 - 2010", type: "degree" },
      { title: "Certification Officielle React & Architecture Frontend", school: "Formation Réglementée", date: "2021", type: "certification" },
      { title: "Certification Réglementée SQL & Gestion de Bases de Données", school: "Diplôme Officiel Avancé", date: "2019", type: "certification" },
      { title: "Spécialisation Officielle Data Science & IA (Python / ML)", school: "Formation Réglementée Pro", date: "2023", type: "certification" },
      { title: "Certification Officielle Infrastructure Cloud & DevOps (AWS/Docker)", school: "Diplôme Réglementé", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI Architecture",
        description: "Technologies clés pour créer des interfaces réactives et impeccables",
        items: [
          { name: "React.js", level: "Expert (+10 ans)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Expert (+6 ans)", badge: "Core" },
          { name: "Vue.js", level: "Avancé (+4 ans)", badge: "Accenture" },
          { name: "Angular", level: "Avancé (+5 ans)", badge: "Jubilame" },
          { name: "TypeScript", level: "Expert (+8 ans)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Expert (+12 ans)", badge: "Core" },
          { name: "Tailwind CSS", level: "Expert (+5 ans)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Expert (+12 ans)", badge: "Fondations" },
          { name: "State Management (Redux, Zustand, Context)", level: "Expert", badge: "Architecture" }
        ]
      },
      {
        categoryName: "Backend & System Design",
        description: "Services évolutifs, API RESTful et logique serveur",
        items: [
          { name: "Node.js", level: "Expert (+9 ans)", badge: "Backend" },
          { name: "Express.js", level: "Expert (+9 ans)", badge: "Backend" },
          { name: "RESTful APIs", level: "Expert (+12 ans)", badge: "Architecture" },
          { name: "Cron Jobs & Planificateurs", level: "Avancé", badge: "Fintech / Logistique" },
          { name: "Architecture Webhooks", level: "Avancé", badge: "IA / Intégrations" },
          { name: "Headless CMS (WordPress REST API)", level: "Expert", badge: "Erescambio" },
          { name: "GraphQL", level: "Intermédiaire-Avancé", badge: "APIs" },
          { name: "Rate Limiting & Sécurité", level: "Avancé", badge: "Sécurité" }
        ]
      },
      {
        categoryName: "Data, Intelligence Artificielle & Média",
        description: "Bases de données et intégration d'IA de pointe",
        items: [
          { name: "Data Science & Python (Bases ML)", level: "Certification Officielle", badge: "Diplôme Réglementé" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Expert (+10 ans)", badge: "Diplôme Officiel" },
          { name: "MongoDB / NoSQL", level: "Avancé (+6 ans)", badge: "Bases de Données" },
          { name: "HeyGen (Avatars IA Génératifs)", level: "Lead Technique", badge: "GFT IA" },
          { name: "PIPECAT (Streaming Vocal/IA)", level: "Lead Technique", badge: "GFT IA" },
          { name: "Cloudinary (Workflows Média)", level: "Expert", badge: "Erescambio" },
          { name: "Data Visualization (Recharts, Chart.js)", level: "Avancé", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infrastructure & DevOps",
        description: "Conteneurs, plateformes cloud et intégration continue",
        items: [
          { name: "Docker & Conteneurisation", level: "Avancé (+6 ans)", badge: "Certification Officielle" },
          { name: "Google Cloud Platform (GCloud)", level: "Avancé (+5 ans)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Avancé (+5 ans)", badge: "Certification Officielle" },
          { name: "Déploiements Vercel / Netlify", level: "Expert", badge: "Déploiement" },
          { name: "Pipelines CI/CD (GitHub Actions, GitLab)", level: "Avancé", badge: "DevOps" },
          { name: "Tests Unitaires (Jest, React Testing Library)", level: "Expert", badge: "QA" },
          { name: "Tests E2E (Cypress)", level: "Avancé", badge: "QA" }
        ]
      },
      {
        categoryName: "Outils, SEO & Méthodologies",
        description: "Optimisation pour les moteurs de recherche et gestion de projets",
        items: [
          { name: "SEO Technique & Core Web Vitals", level: "Spécialiste", badge: "Performance" },
          { name: "Git & Contrôle de Version", level: "Expert (+12 ans)", badge: "Outil" },
          { name: "Jira / Agilité (Scrum & Kanban)", level: "Lead Technique", badge: "Gestion" },
          { name: "Figma (Figma-to-Code)", level: "Avancé", badge: "UI/UX" },
          { name: "Code Review & Mentorat Technique", level: "Lead Technique", badge: "Leadership" }
        ]
      }
    ]
  },
  pt: {
    nav: {
      experience: "Experiência",
      education: "Estudos",
      coverLetter: "Cover Letter",
      stack: "Stack Completo",
      contact: "Contato",
      downloadPdf: "📥 Baixar PDF"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Arquiteto Frontend",
      title: "Alberto Ledesma Ollega",
      bio: "+12 anos de experiência liderando equipes técnicas, projetando arquiteturas digitais escaláveis e transformando desafios complexos em software de alto impacto.",
      status: "🟢 Disponível para projetos Freelance & Contratação",
      contactBtn: "💬 Entrar em Contato",
      viewCoverBtn: "✉️ Ver Cover Letter"
    },
    expTitle: "Experiência Profissional",
    expSubtitle: "Trajetória de liderança e desenvolvimento técnico em projetos de grande porte",
    eduTitle: "Histórico Acadêmico & Certificações",
    eduSubtitle: "Formação universitária, mestrados e qualificações oficiais regulamentadas",
    coverTitle: "Carta de Apresentação",
    coverSubtitle: "Proposta de valor, vocação e flexibilidade de colaboração",
    coverTagline: "💡 Paixão pela Tecnologia & Versatilidade Profissional",
    coverGreeting: "Prezado(a) responsável de recrutamento / equipe técnica,",
    coverP1: "Escrevo com o entusiasmo de quem tem a sorte de exercer diariamente sua profissão favorita: a engenharia de software e a arquitetura de sistemas Full Stack. Com mais de 12 anos de experiência liderando e desenvolvendo soluções digitais de alto impacto, minha motivação principal continua sendo a mesma desde o primeiro dia: escrever código limpo, escalável e transformar desafios complexos em produtos de excelência.",
    coverP2: "Ao longo da minha trajetória, projetei sistemas frontend e backend (React, Next.js, Vue.js, Angular, Node.js) e gerenciei ambientes em nuvem (GCloud, AWS, Docker). Entando a colaboração técnica a partir da máxima flexibilidade: por isso, ofereço meus serviços tanto em modalidade de <strong>consultoria freelance (contrato B2B)</strong> quanto por meio de <strong>diferentes tipos de contratação de trabalho</strong> (remoto, híbrido, tempo integral ou por projetos), adaptando-me às necessidades reais da sua organização.",
    coverP3: "Meu objetivo é continuar evoluindo profissionalmente ao lado de equipes ambiciosas, trazendo visão técnica estratégica, solidez e uma liderança positiva. Terei todo o prazer em agendar uma conversa para aprofundar como minha experiência pode contribuir para o sucesso dos seus próximos projetos.",
    coverValediction: "Atenciosamente,\nAlberto Ledesma Ollega",
    stackTitle: "Stack Técnico & Ferramentas de Carreira",
    stackSubtitle: "Detalhamento exaustivo de tecnologias e metodologias dominadas ao longo de +12 anos",
    contactTitle: "Contato & Parcerias",
    contactSubtitle: "Canais diretos para iniciar colaborações freelance ou contratações",
    emailLabel: "E-mail de Contato",
    phoneLabel: "Telefone Direto",
    linkedinLabel: "Perfil Profissional LinkedIn",
    portfolioLabel: "Portfolio Web",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Desenvolvedor Front-end (Consultoria Freelance)",
        date: "mar. 2026 - ago. 2026 (6 meses)",
        desc: "Consultor frontend freelance integrado à equipe de desenvolvimento para uma grande plataforma analítica no setor de seguros.",
        bullets: [
          "Desenvolvimento e manutenção de componentes de interface de usuário com Vue.js e TypeScript para visualização de dados complexos e gestão de relatórios.",
          "Resolução de incidentes técnicos em fluxos transversais da aplicação, garantindo sincronização fluida de dados entre exibições de UI e módulos de exportação.",
          "Otimização e correção de bugs relacionados a tipagem estrita de dados e formatação numérica em relatórios baixáveis.",
          "Participação ativa em Code Reviews, resolução de tópicos técnicos em ambientes de integração contínua e manutenção da qualidade de código via test coverage."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (Projeto Avatar IA)",
        role: "Technical Lead (Consultoria Freelance)",
        date: "mai. 2024 - ago. 2025 (1 ano 3 meses)",
        desc: "Liderança técnica como consultor freelance especializado no desenvolvimento de um avatar interativo de IA para feiras de alto nível.",
        bullets: [
          "Arquitetura de baixa latência para resposta em tempo real via IA generativa.",
          "Garantia de qualidade via testes unitários e pipelines CI/CD para eventos ao vivo.",
          "Tradução de designs complexos do Figma para interfaces pixel-perfect."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Líder Técnico Full Stack",
        date: "out. 2021 - Presente",
        desc: "Transformação digital e otimização de performance para plataformas de marketing.",
        bullets: [
          "Implementação de arquiteturas Headless CMS com WordPress.",
          "Otimização de assets via Cloudinary melhorando significativamente LCP e SEO.",
          "Interfaces autogerenciáveis que reduzem custos operacionais."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "SEO Técnico, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Líder Técnico & Desenvolvedor Angular",
        date: "mai. 2020 - jan. 2024",
        desc: "Direção técnica em produto Fintech com foco em automação e escalabilidade.",
        bullets: [
          "Automação de processos financeiros críticos via Cron Jobs robustos.",
          "Gestão de infraestrutura escalável no Google Cloud utilizando Docker.",
          "Estabelecimento de cultura de qualidade com testes E2E (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "CONSULTORIA SENIOR (Autônomo)",
        role: "Upfield, Amovens & Grandes Contas",
        date: "jan. 2016 - Presente",
        desc: "Soluções escaláveis para desafios técnicos complexos em empresas líderes.",
        bullets: [
          "Upfield: Dashboard logístico global com sincronização massiva de estoque.",
          "Amovens: Otimização do core do React e estabilização via suítes de testes Jest.",
          "SEO: Consultoria técnica especializada para maximizar o tráfego orgânico."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Graduação em Engenharia de Software", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Mestrado em Desenvolvimento Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Técnico Superior DAM (Dev. de Aplicações Multiplataforma)", school: "IES Nervión (Sevilha)", date: "2008 - 2010", type: "degree" },
      { title: "Certificação Oficial em React & Arquitetura Frontend", school: "Curso Regulamentado", date: "2021", type: "certification" },
      { title: "Certificação Regulamentada em SQL & Gestão de Bancos de Dados", school: "Titulação Oficial Avançada", date: "2019", type: "certification" },
      { title: "Especialização Oficial em Data Science & IA (Python / ML)", school: "Curso Regulamentado Pro", date: "2023", type: "certification" },
      { title: "Certificação Oficial Cloud Infrastructure & DevOps (AWS/Docker)", school: "Titulação Regulamentada", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI Architecture",
        description: "Tecnologias chave para criação de interfaces responsivas e impecáveis",
        items: [
          { name: "React.js", level: "Especialista (+10 anos)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Especialista (+6 anos)", badge: "Core" },
          { name: "Vue.js", level: "Avançado (+4 anos)", badge: "Accenture" },
          { name: "Angular", level: "Avançado (+5 anos)", badge: "Jubilame" },
          { name: "TypeScript", level: "Especialista (+8 anos)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Especialista (+12 anos)", badge: "Core" },
          { name: "Tailwind CSS", level: "Especialista (+5 anos)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Especialista (+12 anos)", badge: "Fundamentos" },
          { name: "State Management (Redux, Zustand, Context)", level: "Especialista", badge: "Arquitetura" }
        ]
      },
      {
        categoryName: "Backend & System Design",
        description: "Serviços escaláveis, APIs RESTful e lógica de servidor",
        items: [
          { name: "Node.js", level: "Especialista (+9 anos)", badge: "Backend" },
          { name: "Express.js", level: "Especialista (+9 anos)", badge: "Backend" },
          { name: "RESTful APIs", level: "Especialista (+12 anos)", badge: "Arquitetura" },
          { name: "Cron Jobs & Agendadores", level: "Avançado", badge: "Fintech / Logística" },
          { name: "Arquitetura Webhooks", level: "Avançado", badge: "IA / Integrações" },
          { name: "Headless CMS (WordPress REST API)", level: "Especialista", badge: "Erescambio" },
          { name: "GraphQL", level: "Intermediário-Avançado", badge: "APIs" },
          { name: "Rate Limiting & Segurança", level: "Avançado", badge: "Segurança" }
        ]
      },
      {
        categoryName: "Data, Inteligência Artificial & Mídia",
        description: "Bancos de dados relacionais/NoSQL e integração de IA de ponta",
        items: [
          { name: "Data Science & Python (Básicos ML)", level: "Certificação Oficial", badge: "Titulação Regulada" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Especialista (+10 anos)", badge: "Titulação Oficial" },
          { name: "MongoDB / NoSQL", level: "Avançado (+6 anos)", badge: "Bancos de Dados" },
          { name: "HeyGen (Avatares IA Generativos)", level: "Líder Técnico", badge: "GFT IA" },
          { name: "PIPECAT (Streaming de Voz/IA)", level: "Líder Técnico", badge: "GFT IA" },
          { name: "Cloudinary (Workflows de Mídia)", level: "Especialista", badge: "Erescambio" },
          { name: "Data Visualization (Recharts, Chart.js)", level: "Avançado", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infraestrutura & DevOps",
        description: "Containerização, plataformas de nuvem e integração contínua",
        items: [
          { name: "Docker & Containerização", level: "Avançado (+6 anos)", badge: "Certificação Oficial" },
          { name: "Google Cloud Platform (GCloud)", level: "Avançado (+5 anos)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Avançado (+5 anos)", badge: "Certificação Oficial" },
          { name: "Implantações Vercel / Netlify", level: "Especialista", badge: "Implantação" },
          { name: "Pipelines CI/CD (GitHub Actions, GitLab)", level: "Avançado", badge: "DevOps" },
          { name: "Testes Unitários (Jest, React Testing Library)", level: "Especialista", badge: "QA" },
          { name: "Testes E2E (Cypress)", level: "Avançado", badge: "QA" }
        ]
      },
      {
        categoryName: "Ferramentas, SEO & Metodologias",
        description: "Otimização para mecanismos de busca, design e gestão de projetos",
        items: [
          { name: "SEO Técnico & Core Web Vitals", level: "Especialista", badge: "Performance" },
          { name: "Git & Controle de Versão", level: "Especialista (+12 anos)", badge: "Ferramenta" },
          { name: "Jira / Agilidade (Scrum & Kanban)", level: "Líder Técnico", badge: "Gestão" },
          { name: "Figma (Figma-to-Code)", level: "Avançado", badge: "UI/UX" },
          { name: "Code Review & Mentoria Técnica", level: "Líder Técnico", badge: "Liderança" }
        ]
      }
    ]
  },
  nl: {
    nav: {
      experience: "Ervaring",
      education: "Opleiding",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Contact",
      downloadPdf: "📥 PDF downloaden"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 jaar ervaring in het leiden van technische teams, het ontwerpen van schaalbare digitale oplossingen en het omzetten van complexe uitdagingen.",
      status: "🟢 Beschikbaar voor Freelance & Contractopdrachten",
      contactBtn: "💬 Contact Opnemen",
      viewCoverBtn: "✉️ Bekijk Cover Letter"
    },
    expTitle: "Werkervaring",
    expSubtitle: "Staat van dienst in technisch leiderschap en ontwikkeling in grootschalige projecten",
    eduTitle: "Opleiding & Certificeringen",
    eduSubtitle: "Universitaire opleiding, masters en officiële gereguleerde kwalificaties",
    coverTitle: "Sollicitatiebrief",
    coverSubtitle: "Waardepropositie, roeping en flexibele samenwerkingsopties",
    coverTagline: "💡 Passie voor Technologie & Professionele Veelzijdigheid",
    coverGreeting: "Beste recruitment manager / talent team,",
    coverP1: "Ik schrijf u met het enthousiasme van iemand die het geluk heeft elke dag te werken in zijn favoriete beroep: software engineering en Full Stack systeemarchitectuur. Met meer dan 12 jaar ervaring in het leiden en bouwen van hoogwaardige digitale oplossingen, blijft mijn drijfveer ongewijzigd: het schrijven van schone, schaalbare code en het omzetten van complexe uitdagingen in uitstekende producten.",
    coverP2: "Gedurende mijn carrière heb ik frontend- en backend-systemen ontworpen (React, Next.js, Vue.js, Angular, Node.js) en cloudinfrastructuur beheerd (GCloud, AWS, Docker). Ik benader technische samenwerking met maximale flexibiliteit: daarom bied ik mijn diensten aan via <strong>freelance consultancy (B2B-contract)</strong> evenals via <strong>verschillende dienstverbanden</strong> (op afstand, hybride, voltijd of op projectbasis), afgestemd op de specifieke behoeften van uw organisatie.",
    coverP3: "Mijn doel is om professioneel te blijven groeien samen met ambitieuze teams, door strategische visie, technische uitmuntendheid en positief leiderschap bij te dragen. Ik ga graag met u in gesprek om te bespreken hoe mijn ervaring waarde kan toevoegen aan uw toekomstige projecten.",
    coverValediction: "Met vriendelijke groet,\nAlberto Ledesma Ollega",
    stackTitle: "Technische Stack & Carrière-tools",
    stackSubtitle: "Uitgebreid overzicht van technologieën en methodologieën beheerst in +12 jaar",
    contactTitle: "Contact & Samenwerking",
    contactSubtitle: "Directe kanalen om freelance samenwerkingen of sollicitaties te starten",
    emailLabel: "E-mailadres",
    phoneLabel: "Direct Telefoonnummer",
    linkedinLabel: "LinkedIn Profiel",
    portfolioLabel: "Web Portfolio",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Front-end Developer (Freelance Consultant)",
        date: "mrt. 2026 - aug. 2026 (6 mnd)",
        desc: "Geïntegreerd als freelance frontend-consultant in het ontwikkelteam van een groot analytisch platform binnen de verzekeringssector.",
        bullets: [
          "Ontwikkelen en onderhouden van UI-componenten met Vue.js en TypeScript voor complexe datavisualisatie en rapportbeheer.",
          "Oplossen van technische incidenten in applicatie-overstijgende stromen, met behoud van naadloze datasynchronisatie tussen UI-weergaven en exportmodules.",
          "Optimaliseren en verhelpen van bugs met betrekking tot strikte data-typering en numerieke opmaak in downloadbare rapporten.",
          "Actieve deelname aan Code Reviews, behandelen van technische vraagstukken in CI-omgevingen en waarborgen van codekwaliteit via testdekking."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (AI Avatar Project)",
        role: "Technical Lead (Freelance Consultant)",
        date: "mei 2024 - aug. 2025 (1 jr 3 mnd)",
        desc: "Technisch leiderschap als freelance consultant bij de ontwikkeling van een interactieve AI-avatar voor hoogwaardige beurzen.",
        bullets: [
          "Lage-latentie architectuur voor real-time respons met behulp van generatieve AI.",
          "Kwaliteitsborging via Unit Testing en CI/CD pipelines voor live-evenementen.",
          "Vertaling van complexe Figma-ontwerpen naar pixel-perfecte interfaces."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Technical Full Stack Lead",
        date: "okt. 2021 - Heden",
        desc: "Digitale transformatie en prestatie-optimalisatie voor marketingplatformen.",
        bullets: [
          "Implementatie van Headless CMS-architecturen met WordPress.",
          "Asset-optimalisatie via Cloudinary voor aanzienlijke verbetering van LCP en SEO.",
          "Zelfbeherende interfaces die operationele kosten verlagen."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "Technische SEO, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Technical Lead & Angular Developer",
        date: "mei 2020 - jan. 2024",
        desc: "Technisch leiderschap bij Fintech-product gericht op automatisering en schaalbaarheid.",
        bullets: [
          "Automatisering van kritieke financiële processen via robuuste Cron Jobs.",
          "Beheer van schaalbare infrastructuur op Google Cloud met Docker.",
          "Opzetten van een kwaliteitscultuur met E2E-testing (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "SENIOR CONSULTING (Zelfstandige)",
        role: "Upfield, Amovens & Grote Klanten",
        date: "jan. 2016 - Heden",
        desc: "Schaalbare oplossingen voor complexe technische uitdagingen bij toonaangevende bedrijven.",
        bullets: [
          "Upfield: Wereldwijd logistiek dashboard met massale voorraadsynchronisatie.",
          "Amovens: React core-optimalisatie en stabilisatie via Jest-test-suites.",
          "SEO: Gespecialiseerde technische consultancy voor maximale organische weergave."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Bachelor in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master in Full Stack Web Development", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Hoger Technicus Multiplatform Dev (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Officiële Certificering in React & Frontend Architectuur", school: "Gereguleerde Cursus", date: "2021", type: "certification" },
      { title: "Gereguleerde Certificering in SQL & Databasemanagement", school: "Geavanceerde Officiële Kwalificatie", date: "2019", type: "certification" },
      { title: "Officiële Specialisatie in Data Science & AI (Python / ML)", school: "Gereguleerde Professionele Cursus", date: "2023", type: "certification" },
      { title: "Officiële Certificering Cloud Infrastructuur & DevOps (AWS/Docker)", school: "Gereguleerde Kwalificatie", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI Architectuur",
        description: "Kerntechnologieën voor het bouwen van responsieve, pixel-perfecte interfaces",
        items: [
          { name: "React.js", level: "Expert (+10 jaar)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Expert (+6 jaar)", badge: "Core" },
          { name: "Vue.js", level: "Gevorderd (+4 jaar)", badge: "Accenture" },
          { name: "Angular", level: "Gevorderd (+5 jaar)", badge: "Jubilame" },
          { name: "TypeScript", level: "Expert (+8 jaar)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Expert (+12 jaar)", badge: "Core" },
          { name: "Tailwind CSS", level: "Expert (+5 jaar)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Expert (+12 jaar)", badge: "Basis" },
          { name: "State Management (Redux, Zustand, Context)", level: "Expert", badge: "Architectuur" }
        ]
      },
      {
        categoryName: "Backend & Systeemarchitectuur",
        description: "Schaalbare diensten, RESTful API's en serverlogica",
        items: [
          { name: "Node.js", level: "Expert (+9 jaar)", badge: "Backend" },
          { name: "Express.js", level: "Expert (+9 jaar)", badge: "Backend" },
          { name: "RESTful APIs", level: "Expert (+12 jaar)", badge: "Architectuur" },
          { name: "Cron Jobs & Schedulers", level: "Gevorderd", badge: "Fintech / Logistiek" },
          { name: "Webhooks Architectuur", level: "Gevorderd", badge: "AI / Integraties" },
          { name: "Headless CMS (WordPress REST API)", level: "Expert", badge: "Erescambio" },
          { name: "GraphQL", level: "Middelgroot-Gevorderd", badge: "APIs" },
          { name: "Rate Limiting & Beveiliging", level: "Gevorderd", badge: "Beveiliging" }
        ]
      },
      {
        categoryName: "Data, AI & Media",
        description: "Relationele/NoSQL databases en integratie van geavanceerde AI",
        items: [
          { name: "Data Science & Python (ML Basis)", level: "Officiële Certificering", badge: "Gereguleerd Diploma" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Expert (+10 jaar)", badge: "Officieel Diploma" },
          { name: "MongoDB / NoSQL", level: "Gevorderd (+6 jaar)", badge: "Databases" },
          { name: "HeyGen (Generatieve AI Avatars)", level: "Tech Lead", badge: "GFT AI" },
          { name: "PIPECAT (Spraak/AI Streaming)", level: "Tech Lead", badge: "GFT AI" },
          { name: "Cloudinary (Media Workflows)", level: "Expert", badge: "Erescambio" },
          { name: "Data Visualisatie (Recharts, Chart.js)", level: "Gevorderd", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infrastructuur & DevOps",
        description: "Containerisatie, cloudplatformen en continue integratie",
        items: [
          { name: "Docker & Containerisatie", level: "Gevorderd (+6 jaar)", badge: "Officiële Certificering" },
          { name: "Google Cloud Platform (GCloud)", level: "Gevorderd (+5 jaar)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Gevorderd (+5 jaar)", badge: "Officiële Certificering" },
          { name: "Vercel / Netlify Deployments", level: "Expert", badge: "Deployments" },
          { name: "CI/CD Pipelines (GitHub Actions, GitLab)", level: "Gevorderd", badge: "DevOps" },
          { name: "Unit Testing (Jest, React Testing Library)", level: "Expert", badge: "QA" },
          { name: "E2E Testing (Cypress)", level: "Gevorderd", badge: "QA" }
        ]
      },
      {
        categoryName: "Tools, SEO & Methodologieën",
        description: "Zoekmachine-optimalisatie, ontwerp en projectmanagement",
        items: [
          { name: "Technische SEO & Core Web Vitals", level: "Specialist", badge: "Performance" },
          { name: "Git & Versiebeheer", level: "Expert (+12 jaar)", badge: "Tool" },
          { name: "Jira / Agile (Scrum & Kanban)", level: "Tech Lead", badge: "Management" },
          { name: "Figma (Figma-to-Code)", level: "Gevorderd", badge: "UI/UX" },
          { name: "Code Review & Technische Mentoring", level: "Tech Lead", badge: "Leiderschap" }
        ]
      }
    ]
  },
  de: {
    nav: {
      experience: "Erfahrung",
      education: "Ausbildung",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Kontakt",
      downloadPdf: "📥 PDF herunterladen"
    },
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend-Architekt",
      title: "Alberto Ledesma Ollega",
      bio: "+12 Jahre Erfahrung in der Leitung technischer Teams, der Entwicklung skalierbarer digitaler Architekturen und der Transformation komplexer Herausforderungen.",
      status: "🟢 Verfügbar für Freelance-Projekte & Festanstellungen",
      contactBtn: "💬 Kontakt Aufnehmen",
      viewCoverBtn: "✉️ Cover Letter Anzeigen"
    },
    expTitle: "Berufserfahrung",
    expSubtitle: "Technische Führung und Entwicklung in hochrangigen Unternehmen",
    eduTitle: "Ausbildung & Zertifizierungen",
    eduSubtitle: "Universitätsabschluss, Master-Abschlüsse und offizielle geregelte Qualifikationen",
    coverTitle: "Anschreiben",
    coverSubtitle: "Wertversprechen, Berufung und flexible Zusammenarbeit",
    coverTagline: "💡 Leidenschaft für Technologie & Professionelle Vielseitigkeit",
    coverGreeting: "Sehr geehrte(r) Personalverantwortliche(r) / Talent Team,",
    coverP1: "Ich schreibe Ihnen mit der Begeisterung eines Entwicklers, der das Privileg hat, täglich in seinem Wunschberuf zu arbeiten: Software-Engineering und Full-Stack-Systemarchitektur. Mit über 12 Jahren Erfahrung in der Leitung und Entwicklung hochwirksamer digitaler Lösungen bleibt meine Hauptmotivation unverändert: das Schreiben von sauberem, skalierbarem Code und die Umwandlung komplexer Herausforderungen in herausragende Produkte.",
    coverP2: "Im Laufe meiner Karriere habe ich Frontend- und Backend-Systeme entwickelt (React, Next.js, Vue.js, Angular, Node.js) und Cloud-Infrastrukturen verwaltet (GCloud, AWS, Docker). Ich verstehe technische Zusammenarbeit mit höchster Flexibilität: Daher biete ich meine Leistungen sowohl im Rahmen von <strong>Freelance-Consulting (B2B-Vertrag)</strong> als auch über <strong>verschiedene Anstellungsverhältnisse</strong> (Remote, Hybrid, Vollzeit oder Projektbasis) an, genau angepasst an die Bedürfnisse Ihrer Organisation.",
    coverP3: "Mein Ziel ist es, mich gemeinsam mit ehrgeizigen Teams weiterzuentwickeln und strategische Vision, technische Exzellenz und positive Führung einzubringen. Ich freue mich auf ein Gespräch, um zu erörtern, wie meine Erfahrung zum Erfolg Ihrer nächsten Initiativen beitragen kann.",
    coverValediction: "Mit freundlichen Grüßen,\nAlberto Ledesma Ollega",
    stackTitle: "Technischer Stack & Karriere-Tools",
    stackSubtitle: "Umfassende Aufschlüsselung aller in +12 Jahren beherrschten Technologien",
    contactTitle: "Kontakt & Anfragen",
    contactSubtitle: "Direkte Kanäle zur Einleitung von Freelance-Projekten oder Anstellungen",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Direkttelefon",
    linkedinLabel: "LinkedIn-Profil",
    portfolioLabel: "Web-Portfolio",
    experiences: [
      {
        company: "ACCENTURE",
        role: "Front-end Entwickler (Freelance-Berater)",
        date: "März 2026 – Aug. 2026 (6 Mon.)",
        desc: "Als freiberuflicher Frontend-Berater im Entwicklungsteam einer großen Analyseplattform in der Versicherungsbranche integriert.",
        bullets: [
          "Entwicklung und Pflege von Benutzeroberflächenkomponenten mit Vue.js und TypeScript für komplexe Datenvisualisierung und Berichtsverwaltung.",
          "Behebung technischer Vorfälle in anwendungsübergreifenden Abläufen zur Gewährleistung nahtloser Datensynchronisation zwischen UI und Exportmodulen.",
          "Optimierung und Behebung von Fehlern bezüglich strikter Datentypisierung und numerischer Formatierung in herunterladbaren Berichten.",
          "Aktive Teilnahme an Code-Reviews, Behebung technischer Probleme in CI-Umgebungen und Sicherstellung der Codequalität durch Testabdeckung."
        ],
        stack: { f: "Vue.js, TypeScript", l: "Data Sync, Export Modules", d: "CI/CD, Code Reviews, Testing" },
        highlight: true
      },
      {
        company: "GFT (KI-Avatar-Projekt)",
        role: "Technical Lead (Freelance-Berater)",
        date: "Mai 2024 – Aug. 2025 (1 J. 3 Mon.)",
        desc: "Technische Leitung als freiberuflicher Berater bei der Entwicklung eines interaktiven KI-Avatars für hochrangige Messen.",
        bullets: [
          "Low-Latency-Architektur für Echtzeitantworten mittels generativer KI.",
          "Qualitätssicherung durch Unittests und CI/CD-Pipelines für Live-Events.",
          "Umsetzung komplexer Figma-Designs in pixelgenaue Benutzeroberflächen."
        ],
        stack: { f: "Next.js, React, Tailwind", l: "HeyGen, PIPECAT, Webhooks", d: "CI/CD, Code Reviews" },
        highlight: true
      },
      {
        company: "Erescambio Marketing",
        role: "Technical Full Stack Lead",
        date: "Okt. 2021 – Heute",
        desc: "Digitale Transformation und Leistungsoptimierung für Marketingplattformen.",
        bullets: [
          "Implementierung von Headless-CMS-Architekturen mit WordPress.",
          "Asset-Optimierung über Cloudinary zur deutlichen Verbesserung von LCP und SEO.",
          "Selbstverwaltete Benutzeroberflächen zur Senkung der Betriebskosten."
        ],
        stack: { f: "React, Headless CMS", l: "Cloudinary, REST APIs", d: "Technisches SEO, Web Vitals" }
      },
      {
        company: "JUBILAME",
        role: "Technical Lead & Angular Developer",
        date: "Mai 2020 – Jan. 2024",
        desc: "Technische Leitung eines Fintech-Produkts mit Fokus auf Automatisierung und Skalierbarkeit.",
        bullets: [
          "Automatisierung kritischer Finanzprozesse über robuste Cron-Jobs.",
          "Verwaltung skalierbarer Infrastruktur auf Google Cloud mittels Docker.",
          "Etablierung einer Qualitätskultur mit E2E-Testing (Cypress)."
        ],
        stack: { f: "Angular, TypeScript", l: "Cron-Jobs, PostgreSQL", d: "Docker, GCloud, Jira" }
      },
      {
        company: "SENIOR CONSULTING (Freiberuflich)",
        role: "Upfield, Amovens & Großkunden",
        date: "Jan. 2016 – Heute",
        desc: "Skalierbare Lösungen für komplexe technische Herausforderungen bei führenden Unternehmen.",
        bullets: [
          "Upfield: Globales Logistik-Dashboard mit massiver Inventarsynchronisierung.",
          "Amovens: React-Core-Optimierung und Stabilisierung durch Jest-Test-Suites.",
          "SEO: Spezialisierte technische Beratung zur Maximierung des organischen Traffics."
        ],
        stack: { f: "React, Node.js, Docker", l: "API Rate Limiting, Cron-Jobs", d: "Jest, Unit Testing" }
      }
    ],
    education: [
      { title: "Bachelor in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master in Full Stack Webentwicklung", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Staatlich geprüfter Informatiker Anwendungsentwicklung (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Offizielle Zertifizierung in React & Frontend-Architektur", school: "Geregelter Kurs", date: "2021", type: "certification" },
      { title: "Geregelte Zertifizierung in SQL & Datenbankverwaltung", school: "Offizielle Fortgeschrittene Qualifikation", date: "2019", type: "certification" },
      { title: "Offizielle Spezialisierung in Data Science & KI (Python / ML)", school: "Geregelter Professioneller Kurs", date: "2023", type: "certification" },
      { title: "Offizielle Zertifizierung Cloud-Infrastruktur & DevOps (AWS/Docker)", school: "Geregelte Qualifikation", date: "2022", type: "certification" }
    ],
    stackCategories: [
      {
        categoryName: "Frontend & UI-Architektur",
        description: "Schlüsseltechnologien zur Erstellung reaktiver und makelloser Benutzeroberflächen",
        items: [
          { name: "React.js", level: "Experte (+10 J.)", badge: "Core" },
          { name: "Next.js (App Router / SSR)", level: "Experte (+6 J.)", badge: "Core" },
          { name: "Vue.js", level: "Fortgeschritten (+4 J.)", badge: "Accenture" },
          { name: "Angular", level: "Fortgeschritten (+5 J.)", badge: "Jubilame" },
          { name: "TypeScript", level: "Experte (+8 J.)", badge: "Core" },
          { name: "JavaScript ES6+", level: "Experte (+12 J.)", badge: "Core" },
          { name: "Tailwind CSS", level: "Experte (+5 J.)", badge: "Modern UI" },
          { name: "HTML5 / CSS3 / SASS", level: "Experte (+12 J.)", badge: "Grundlagen" },
          { name: "State Management (Redux, Zustand, Context)", level: "Experte", badge: "Architektur" }
        ]
      },
      {
        categoryName: "Backend & System-Design",
        description: "Skalierbare Dienste, RESTful-APIs und serverseitige Logik",
        items: [
          { name: "Node.js", level: "Experte (+9 J.)", badge: "Backend" },
          { name: "Express.js", level: "Experte (+9 J.)", badge: "Backend" },
          { name: "RESTful APIs", level: "Experte (+12 J.)", badge: "Architektur" },
          { name: "Cron-Jobs & Scheduler", level: "Fortgeschritten", badge: "Fintech / Logistik" },
          { name: "Webhooks-Architektur", level: "Fortgeschritten", badge: "KI / Integrationen" },
          { name: "Headless CMS (WordPress REST API)", level: "Experte", badge: "Erescambio" },
          { name: "GraphQL", level: "Mittel-Fortgeschritten", badge: "APIs" },
          { name: "Rate Limiting & Sicherheit", level: "Fortgeschritten", badge: "Sicherheit" }
        ]
      },
      {
        categoryName: "Data, Künstliche Intelligenz & Medien",
        description: "Relationale/NoSQL-Datenbanken und Integration fortschrittlichster KI",
        items: [
          { name: "Data Science & Python (ML Grundlagen)", level: "Offizielle Zertifizierung", badge: "Geregelter Abschluss" },
          { name: "SQL (PostgreSQL, MySQL)", level: "Experte (+10 J.)", badge: "Offizieller Abschluss" },
          { name: "MongoDB / NoSQL", level: "Fortgeschritten (+6 J.)", badge: "Datenbanken" },
          { name: "HeyGen (Generative KI-Avatare)", level: "Tech Lead", badge: "GFT KI" },
          { name: "PIPECAT (Sprach-/KI-Streaming)", level: "Tech Lead", badge: "GFT KI" },
          { name: "Cloudinary (Medien-Workflows)", level: "Experte", badge: "Erescambio" },
          { name: "Datenvisualisierung (Recharts, Chart.js)", level: "Fortgeschritten", badge: "Accenture" }
        ]
      },
      {
        categoryName: "Cloud, Infrastruktur & DevOps",
        description: "Containerisierung, Cloud-Plattformen und kontinuierliche Integration",
        items: [
          { name: "Docker & Containerisierung", level: "Fortgeschritten (+6 J.)", badge: "Offizielle Zertifizierung" },
          { name: "Google Cloud Platform (GCloud)", level: "Fortgeschritten (+5 J.)", badge: "Jubilame" },
          { name: "Amazon Web Services (AWS)", level: "Fortgeschritten (+5 J.)", badge: "Offizielle Zertifizierung" },
          { name: "Vercel / Netlify Deployments", level: "Experte", badge: "Deployments" },
          { name: "CI/CD-Pipelines (GitHub Actions, GitLab)", level: "Fortgeschritten", badge: "DevOps" },
          { name: "Unittests (Jest, React Testing Library)", level: "Experte", badge: "QA" },
          { name: "E2E-Testing (Cypress)", level: "Fortgeschritten", badge: "QA" }
        ]
      },
      {
        categoryName: "Tools, SEO & Methodiken",
        description: "Suchmaschinenoptimierung, Design und Projektleitung",
        items: [
          { name: "Technisches SEO & Core Web Vitals", level: "Spezialist", badge: "Leistung" },
          { name: "Git & Versionskontrolle", level: "Experte (+12 J.)", badge: "Tool" },
          { name: "Jira / Agilität (Scrum & Kanban)", level: "Tech Lead", badge: "Management" },
          { name: "Figma (Figma-to-Code)", level: "Fortgeschritten", badge: "UI/UX" },
          { name: "Code-Review & Technisches Mentoring", level: "Tech Lead", badge: "Führung" }
        ]
      }
    ]
  }
};
