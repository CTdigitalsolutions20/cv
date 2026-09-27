export type Language = 'es' | 'en' | 'fr' | 'pt' | 'nl' | 'de';

export interface LanguageOption {
  code: Language;
  label: string;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'es', label: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', label: 'PT', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', label: 'NL', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' },
];


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
    timelapse?: string;
    coverLetter: string;
    stack: string;
    contact: string;
    downloadPdf: string;
    bookMeeting?: string;
  };
  timelapseBadge?: string;
  timelapseTitle?: string;
  timelapseSubtitle?: string;
  timelapseFilterAll?: string;
  timelapseFilterWork?: string;
  timelapseFilterEdu?: string;
  timelapseFilterHighlight?: string;
  timelapsePlayBtn?: string;
  timelapsePauseBtn?: string;
  timelapseResetBtn?: string;
  timelapseSearchPlaceholder?: string;
  hero: {
    subtitle: string;
    title: string;
    bio: string;
    status: string;
    contactBtn: string;
    viewCoverBtn: string;
    bookMeetingBtn?: string;
    metricYears: string;
    metricConsulting: string;
    metricStack: string;
    metricLanguages: string;
  };
  expBadge: string;
  expTitle: string;
  expSubtitle: string;
  expHighlight: string;
  expStackTitle: string;
  expStackFeatured: string;
  eduBadge: string;
  eduTitle: string;
  eduSubtitle: string;
  eduDegreeLabel: string;
  eduMasterLabel: string;
  eduCertLabel: string;
  eduVerified: string;
  coverBadge: string;
  coverTitle: string;
  coverSubtitle: string;
  coverTagline: string;
  coverGreeting: string;
  coverP1: string;
  coverP2: string;
  coverP3: string;
  coverValediction: string;
  copyText: string;
  copiedText: string;
  printPdf: string;
  stackBadge: string;
  stackTitle: string;
  stackSubtitle: string;
  stackSearchPlaceholder: string;
  stackClear: string;
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  emailLabel: string;
  phoneLabel: string;
  linkedinLabel: string;
  portfolioLabel: string;
  bookMeetingLabel?: string;
  bookMeetingSub?: string;
  bookMeeting?: string;
  copyEmail: string;
  callPhone: string;
  openProfile: string;
  footerBuiltWith: string;
  experiences: Experience[];
  education: EducationItem[];
  stackCategories: StackCategory[];
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      experience: "Experiencia",
      education: "Estudios",
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Stack Completo",
      contact: "Contacto",
      downloadPdf: "📥 Descargar PDF",
      bookMeeting: "Agendar Reunión"
    },
    timelapseBadge: "Rama Cronológica 2008 - 2026",
    timelapseTitle: "Timelapse de Vida & Carreer Branch",
    timelapseSubtitle: "Visualización interactiva y cronológica de toda mi trayectoria estudiantil y profesional",
    timelapseFilterAll: "Todos los Hitos",
    timelapseFilterWork: "💼 Experiencia Laboral",
    timelapseFilterEdu: "🎓 Estudios & Titulaciones",
    timelapseFilterHighlight: "⭐ Destacados",
    timelapsePlayBtn: "▶ Reproducir Timelapse",
    timelapsePauseBtn: "⏸ Pausar",
    timelapseResetBtn: "↺ Reiniciar",
    timelapseSearchPlaceholder: "Buscar hito o tecnología (ej. Accenture, React, DAM, Master...)",
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 años de experiencia liderando equipos técnicos, diseñando arquitecturas digitales escalables y transformando retos de negocio complejos en software de alto impacto.",
      status: "🟢 Disponible para proyectos Freelance & Contratación",
      contactBtn: "💬 Contactar",
      viewCoverBtn: "✉️ Ver Cover Letter",
      bookMeetingBtn: "📅 Agendar Reunión",
      metricYears: "Años de Experiencia",
      metricConsulting: "Consultoría & Empresa",
      metricStack: "Frontend & Backend",
      metricLanguages: "Soporte Multilingüe"
    },
    expBadge: "Trayectoria Profesional",
    expTitle: "Experiencia Profesional",
    expSubtitle: "Trayectoria de liderazgo y desarrollo técnico en proyectos de alto nivel",
    expHighlight: "Consultoría Freelance",
    expStackTitle: "Arquitectura Frontend & Stack",
    expStackFeatured: "Stack Destacado:",
    eduBadge: "Académico & Certificaciones",
    eduTitle: "Historial Académico & Certificaciones",
    eduSubtitle: "Formación universitaria, másteres y titulaciones oficiales reguladas",
    eduDegreeLabel: "Titulación Universitaria / Grado",
    eduMasterLabel: "Máster de Especialización",
    eduCertLabel: "Certificación Regulada / Oficial",
    eduVerified: "Titulación verificada y homologada",
    coverBadge: "Carta Profesional",
    coverTitle: "Carta de Presentación",
    coverSubtitle: "Propuesta de valor, vocación y flexibilidad de colaboración",
    coverTagline: "💡 Pasión por la Tecnología & Versatilidad Profesional",
    coverGreeting: "Estimado/a responsable de selección / equipo de desarrollo,",
    coverP1: "Me dirijo a usted con el entusiasmo de quien tiene la fortuna de ejercer diariamente su profesión favorita: la ingeniería de software y la arquitectura de sistemas Full Stack. Con más de 12 años de experiencia liderando y desarrollando soluciones digitales de alto impacto, mi motor principal sigue siendo el mismo desde el primer día: escribir código limpio, escalable y transformar retos complejos en productos de excelencia.",
    coverP2: "A lo largo de mi trayectoria he diseñado sistemas frontend y backend (React, Next.js, Vue.js, Angular, Node.js) y gestionado entornos cloud (GCloud, AWS, Docker). Entiendo la colaboración técnica desde la máxima flexibilidad: por ello, ofrezco mis servicios tanto en modalidad de <strong>consultoría freelance (contrato mercantil / B2B)</strong> como a través de <strong>diferentes tipos de contratación laboral</strong> (remoto, híbrido, jornada completa o por proyectos), adaptándome a las necesidades reales de su organización.",
    coverP3: "Mi objetivo es continuar evolucionando profesionalmente junto a equipos ambiciosos, aportando visión técnica estratégica, solidez y un liderazgo positivo. Estaré encantado de mantener una conversación para profundizar en cómo puedo contribuir al éxito de sus próximos proyectos.",
    coverValediction: "Atentamente,\nAlberto Ledesma Ollega",
    copyText: "Copiar Texto",
    copiedText: "¡Copiado!",
    printPdf: "Imprimir PDF",
    stackBadge: "Stack Tecnológico (+12 Años)",
    stackTitle: "Stack Técnico & Herramientas de Carrera",
    stackSubtitle: "Desglose exhaustivo de tecnologías y metodologías dominadas a lo largo de +12 años",
    stackSearchPlaceholder: "Buscar herramienta (ej: React, Python, SQL, Docker...)",
    stackClear: "Limpiar",
    contactBadge: "Canales Directos",
    contactTitle: "Contacto & Vinculación",
    contactSubtitle: "Canales directos para iniciar colaboraciones freelance o contrataciones",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono Directo",
    linkedinLabel: "Perfil Profesional LinkedIn",
    portfolioLabel: "Portfolio Web",
    bookMeetingLabel: "Agendar Reunión 1-to-1",
    bookMeetingSub: "Selecciona día y hora en mi Google Calendar",
    bookMeeting: "Agendar Reunión",
    copyEmail: "Copiar Correo",
    callPhone: "Llamar",
    openProfile: "Abrir Perfil",
    footerBuiltWith: "Desarrollado con",
    experiences: [
      {
        company: "Wilting Components • Aeropuerto de Eindhoven",
        role: "Desarrollador Full-Stack / Frontend (Herramientas de automatización industrial)",
        date: "jun. 2025 - Presente",
        desc: "Desarrolló aplicaciones web internas y paneles operativos utilizando TypeScript, React y Node.js para monitorizar las estadísticas de mecanizado CNC y visualizar los parámetros de producción en tiempo real.",
        bullets: [
          "Desarrollo de aplicaciones web internas y paneles operativos utilizando TypeScript, React y Node.js para monitorizar las estadísticas de mecanizado CNC y visualizar los parámetros de producción en tiempo real.",
          "Creación de interfaces interactivas para calcular y registrar las compensaciones de desgaste de las herramientas, estandarizando la entrada manual para procesos de mecanizado vertical de 3 y 5 ejes.",
          "Diseño de API REST ligeras y flujos de datos WebSocket para procesar la telemetría de control y los metadatos del código G, reduciendo significativamente el tiempo de configuración del operario.",
          "Integración de tecnologías web modernas con los sistemas de producción en planta, mejorando la trazabilidad en líneas de producción de alta precisión."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Desarrollador Front-end de Vue 3 – Sector asegurador",
        date: "abr. 2023 - jun. 2025 (2 años 2 meses)",
        desc: "Para Zurich Insurance Group (a través de Accenture), trabajé como ingeniero frontend en interfaces de usuario complejas y la lógica subyacente, principalmente con Vue 3 y TypeScript.",
        bullets: [
          "Procesamiento e integración de grandes volúmenes de datos procedentes de sistemas bancarios y aseguradores heredados (Cobol), garantizando la conversión estricta a estándares europeos.",
          "Desarrollo 100% remoto asumiendo responsabilidad directa sobre el entorno técnico, resolución independiente de errores de compilación y optimización de configuraciones de tsconfig.",
          "Participación en sprints Agile con revisiones de código estrictas en GitLab y aseguramiento de puertas de calidad en SonarQube Cloud.",
          "Mantenimiento continuo de una cobertura de pruebas unitarias superior al 94% sin ningún bloqueo abierto."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Desarrollador Frontend & Technical Lead",
        date: "jun. 2018 - abr. 2023 (4 años 10 meses)",
        desc: "Liderazgo técnico, diseño de arquitectura e ingeniería frontend práctica para proyectos críticos, desde el sector bancario hasta soluciones de IA innovadoras.",
        bullets: [
          "Plataforma GenAI (Fluidra): Configuración de arquitectura desde cero para plataforma interactiva de avatares de IA para eventos internacionales, construida con React, Next.js y Tailwind CSS.",
          "Ingeniería de baja latencia: Integración de servicios avanzados de IA (HeyGen y PIPECAT), con procesamiento óptimo de flujos de datos asíncronos y webhooks para una experiencia de usuario fluida y en tiempo real.",
          "Configuración de conjunto riguroso de pruebas unitarias y canalización CI/CD automatizada asegurando un sistema extremadamente estable en demostraciones en vivo.",
          "Micro-Frontends (La Caixa): Contribución activa a la migración y arquitectura escalable de micro-frontends bancarios."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Ingeniero de Software Full Stack (Jubilame)",
        date: "ene. 2014 - 2018 (4 años)",
        desc: "Durante varios años, fui el responsable absoluto de la estrategia tecnológica y la ingeniería de interfaz en Jubilame, una plataforma integral de ahorro para la jubilación y seguros.",
        bullets: [
          "Liderazgo técnico y escalado de equipo: Comenzamos como un equipo reducido de tan solo 3 personas y ayudé a expandir el equipo de ingeniería hasta alcanzar los 12 desarrolladores a medida que la plataforma crecía en complejidad e infraestructura en la nube.",
          "Migración continua del ecosistema Angular: Lideré la migración continua de nuestro ecosistema Angular, gestionando e implementando rigurosamente cada actualización importante de versión principal desde 2016 hasta 2022 para mantener la aplicación moderna y con un rendimiento óptimo.",
          "Calculadora financiera compleja: Desarrollo del núcleo de la aplicación, una calculadora financiera avanzada para modelar escenarios de jubilación donde el rendimiento, la gestión del estado y la precisión de los cálculos eran imprescindibles.",
          "Infraestructura Cloud, Docker & SEO Técnico: Gestión de configuración integral en Google Cloud Platform (GCP) y Firebase utilizando Docker para contenerizar los entornos y mantener fluidos los procesos de implementación, e integración directa de SEO técnico en la arquitectura para máxima visibilidad en Google."
        ],
        stack: { f: "Angular, TypeScript", l: "Calculadora Financiera, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "CONSULTORÍA TÉCNICA SENIOR @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Clientes Enterprise",
        date: "ene. 2014 - dic. 2018",
        desc: "Soluciones escalables, desarrollo FullStack y consultoría técnica para retos complejos en empresas líderes e instituciones.",
        bullets: [
          "Upfield: Dashboard logístico global con sincronización masiva de inventario mediante tareas programadas (Cron Jobs).",
          "Amovens: Optimización core de React y estabilización mediante suites de testing Jest.",
          "Junta de Andalucía & Real Betis Balompié: Tareas FullStack, desarrollo web y soluciones técnicas de alto impacto."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Grado en Ingeniería de Software", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Máster en Programación Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Técnico Superior en Desarrollo de Apps Multiplataforma (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Certificación Oficial en React & Frontend Architecture", school: "Curso Regulado / Titulación Oficial", date: "2017", type: "certification" },
      { title: "Certificación Regulada en SQL & Gestores de Bases de Datos", school: "Titulación Oficial Avanzada", date: "2016", type: "certification" },
      { title: "Especialización Oficial en Data Science & IA (Python / ML)", school: "Curso Regulado Profesional", date: "2017", type: "certification" },
      { title: "Certificación Oficial Cloud Infrastructure & DevOps (AWS/Docker)", school: "Titulación Regulada", date: "2017", type: "certification" }
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
          { name: "WebSockets & Real-Time Datafeeds", level: "Experto (+4 años)", badge: "Wilting IoT" },
          { name: "Real-Time Operational Dashboards", level: "Experto", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Lightweight Endpoints", level: "Experto (+12 años)", badge: "Arquitectura" },
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
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Contact",
      downloadPdf: "📥 Download PDF",
      bookMeeting: "Book a Meeting"
    },
    timelapseBadge: "Chronological Branch 2008 - 2026",
    timelapseTitle: "Life & Career Interactive Timelapse",
    timelapseSubtitle: "An interactive, unified timeline branch of my academic journey and professional experience",
    timelapseFilterAll: "All Milestones",
    timelapseFilterWork: "💼 Work Experience",
    timelapseFilterEdu: "🎓 Education & Degrees",
    timelapseFilterHighlight: "⭐ Highlights",
    timelapsePlayBtn: "▶ Play Timelapse",
    timelapsePauseBtn: "⏸ Pause",
    timelapseResetBtn: "↺ Reset",
    timelapseSearchPlaceholder: "Search milestone or stack (e.g., Accenture, React, DAM...)",
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 years of experience leading technical teams, architecting scalable digital solutions, and transforming complex business challenges into high-impact software.",
      status: "🟢 Available for Freelance & Contract Roles",
      contactBtn: "💬 Get in Touch",
      viewCoverBtn: "✉️ View Cover Letter",
      bookMeetingBtn: "📅 Schedule a Call",
      metricYears: "Years of Experience",
      metricConsulting: "Consulting & Enterprise",
      metricStack: "Frontend & Backend",
      metricLanguages: "Multilingual Support"
    },
    expBadge: "Career Journey",
    expTitle: "Professional Experience",
    expSubtitle: "Track record of technical leadership and development in enterprise projects",
    expHighlight: "Freelance Consulting",
    expStackTitle: "Frontend Architecture & Stack",
    expStackFeatured: "Featured Stack:",
    eduBadge: "Academic & Certifications",
    eduTitle: "Academic History & Certifications",
    eduSubtitle: "University degree, master's degrees, and official regulated qualifications",
    eduDegreeLabel: "University Degree",
    eduMasterLabel: "Master's Degree",
    eduCertLabel: "Official / Regulated Certification",
    eduVerified: "Verified & Accredited Qualification",
    coverBadge: "Professional Letter",
    coverTitle: "Cover Letter",
    coverSubtitle: "Value proposition, vocation, and flexible collaboration options",
    coverTagline: "💡 Passion for Technology & Professional Versatility",
    coverGreeting: "Dear Hiring Manager / Talent Acquisition Team,",
    coverP1: "I am writing to express my enthusiasm as someone fortunate enough to work every day in their favorite profession: software engineering and Full Stack system architecture. With over 12 years of experience leading and building high-impact digital solutions, my core motivation remains unchanged: writing clean, scalable code and transforming complex technical challenges into exceptional products.",
    coverP2: "Throughout my career, I have architected frontend and backend systems (React, Next.js, Vue.js, Angular, Node.js) and managed cloud infrastructure (GCloud, AWS, Docker). I approach technical collaboration with ultimate flexibility: therefore, I offer my services both via <strong>freelance consulting (B2B contract)</strong> and through <strong>various employment contract models</strong> (remote, hybrid, full-time, or project-based), tailoring my engagement to your organization's specific goals.",
    coverP3: "My objective is to continue growing professionally alongside ambitious teams, contributing strategic vision, technical excellence, and positive leadership. I would welcome the opportunity to discuss how my background and expertise can drive success for your upcoming initiatives.",
    coverValediction: "Best regards,\nAlberto Ledesma Ollega",
    copyText: "Copy Text",
    copiedText: "Copied!",
    printPdf: "Print PDF",
    stackBadge: "Full Arsenal (+12 Years)",
    stackTitle: "Technical Stack & Career Tools",
    stackSubtitle: "Exhaustive breakdown of technologies and methodologies mastered over 12+ years",
    stackSearchPlaceholder: "Search tool (e.g. React, Python, SQL, Docker...)",
    stackClear: "Clear",
    contactBadge: "Direct Channels",
    contactTitle: "Contact & Engagement",
    contactSubtitle: "Direct channels to initiate freelance collaborations or hiring discussions",
    emailLabel: "Email Address",
    phoneLabel: "Direct Phone",
    linkedinLabel: "LinkedIn Profile",
    portfolioLabel: "Web Portfolio",
    bookMeetingLabel: "Schedule a 1-on-1 Call",
    bookMeetingSub: "Pick a date and time on my Google Calendar",
    bookMeeting: "Book a Meeting",
    copyEmail: "Copy Email",
    callPhone: "Call Phone",
    openProfile: "Open Profile",
    footerBuiltWith: "Built with",
    experiences: [
      {
        company: "Wilting Components • Eindhoven Airport",
        role: "Full-Stack / Frontend Developer (Industrial Automation Tools)",
        date: "Jun. 2025 – Present",
        desc: "Developed internal web applications and operational dashboards using TypeScript, React, and Node.js to monitor CNC machining metrics and visualize real-time production parameters.",
        bullets: [
          "Developed internal web applications and operational dashboards with TypeScript, React, and Node.js to monitor CNC machining statistics and render real-time telemetry.",
          "Built interactive interfaces to calculate and log tool wear offsets, standardizing manual input for 3-axis and 5-axis vertical machining processes.",
          "Designed lightweight REST APIs and WebSocket datafeeds to process controller telemetry and G-code metadata, significantly reducing operator setup time.",
          "Bridged modern web technologies with shop-floor production systems, improving traceability across high-precision manufacturing lines."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Vue 3 Front-end Developer – Insurance Sector",
        date: "Apr. 2023 – Jun. 2025 (2 yrs 2 mos)",
        desc: "Worked as a frontend engineer for Zurich Insurance Group (via Accenture), building complex user interfaces and core business logic with Vue 3 and TypeScript.",
        bullets: [
          "Processed and integrated legacy banking and insurance data (Cobol), strictly normalizing formats to European UI standards.",
          "Worked 100% remotely taking full ownership of local setup, resolving compilation issues and optimizing tsconfig configurations.",
          "Active participation in Agile sprints with strict GitLab Code Reviews and SonarQube Cloud quality gates.",
          "Maintained a unit testing coverage consistently above 94% with zero open blocking issues."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Frontend Developer & Technical Lead",
        date: "Jun. 2018 – Apr. 2023 (4 yrs 10 mos)",
        desc: "Technical leadership, architecture design, and hands-on frontend engineering for critical projects spanning banking micro-frontends to generative AI avatars.",
        bullets: [
          "GenAI Platform (Fluidra): Built greenfield architecture for interactive AI avatars at international trade shows using React, Next.js, and Tailwind CSS.",
          "Low-latency engineering: Integrated advanced AI services (HeyGen & PIPECAT) with async data streams and webhooks for real-time interaction.",
          "Automated CI/CD pipelines and rigorous unit testing ensuring maximum resilience during live demonstrations.",
          "Micro-Frontends (La Caixa): Active contribution to the migration and architecture of high-traffic banking micro-frontends."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Full Stack Software Engineer (Jubilame)",
        date: "Jan. 2014 – 2018 (4 yrs)",
        desc: "For several years, I was fully responsible for the technology strategy and frontend engineering at Jubilame, a comprehensive pension savings and insurance platform.",
        bullets: [
          "Technical Leadership & Team Scaling: Joined as a lean team of just 3 people and helped expand the engineering team up to 12 developers as the cloud infrastructure and platform complexity grew.",
          "Continuous Angular Migration: Led the ongoing migration of our Angular ecosystem, managing and implementing every major version upgrade from 2016 through 2022 to maintain peak application speed and performance.",
          "Complex Financial Calculator: Engineered the core application, a complex financial calculator modeling retirement scenarios where state management, rendering performance, and mathematical precision were critical.",
          "Cloud Infrastructure, Docker & Technical SEO: Managed full GCP and Firebase setup utilizing Docker for containerized environments to keep deployment processes smooth, integrating technical SEO directly into architecture for top Google search visibility."
        ],
        stack: { f: "Angular, TypeScript", l: "Financial Calculator, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "SENIOR TECHNICAL CONSULTING @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Enterprise Clients",
        date: "Jan. 2014 – Dec. 2018",
        desc: "Scalable architecture, FullStack development, and technical consulting for complex challenges across leading enterprises and public institutions.",
        bullets: [
          "Upfield: Global logistics dashboard with automated inventory synchronization (Cron Jobs).",
          "Amovens: Core React optimization and application stabilization via Jest testing suites.",
          "Junta de Andalucía & Real Betis Balompié: FullStack tasks, custom web solutions, and high-impact digital platform engineering."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Bachelor's Degree in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master's Degree in Full Stack Web Development", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Higher Degree in Multiplatform Application Dev (DAM)", school: "IES Nervión (Seville)", date: "2008 - 2010", type: "degree" },
      { title: "Official Certification in React & Frontend Architecture", school: "Regulated Professional Course", date: "2017", type: "certification" },
      { title: "Regulated Certification in SQL & Database Management", school: "Official Advanced Qualification", date: "2016", type: "certification" },
      { title: "Official Specialization in Data Science & AI (Python / ML)", school: "Regulated Professional Course", date: "2017", type: "certification" },
      { title: "Official Certification in Cloud Infrastructure & DevOps (AWS/Docker)", school: "Regulated Qualification", date: "2017", type: "certification" }
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
          { name: "WebSockets & Real-Time Datafeeds", level: "Expert (+4 yrs)", badge: "Wilting IoT" },
          { name: "Real-Time Operational Dashboards", level: "Expert", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Lightweight Endpoints", level: "Expert (+12 yrs)", badge: "Architecture" },
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
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Stack Complet",
      contact: "Contact",
      downloadPdf: "📥 Télécharger le PDF",
      bookMeeting: "Réserver un RDV"
    },
    timelapseBadge: "Branche Chronologique 2008 - 2026",
    timelapseTitle: "Timelapse de Parcours et de Carrière",
    timelapseSubtitle: "Arborescence interactive et unifiée de mon parcours académique et professionnel",
    timelapseFilterAll: "Tous les Jalons",
    timelapseFilterWork: "💼 Expérience Pro",
    timelapseFilterEdu: "🎓 Études & Diplômes",
    timelapseFilterHighlight: "⭐ Incontournables",
    timelapsePlayBtn: "▶ Lancer le Timelapse",
    timelapsePauseBtn: "⏸ Pause",
    timelapseResetBtn: "↺ Réinitialiser",
    timelapseSearchPlaceholder: "Rechercher par technologie ou entreprise...",
    hero: {
      subtitle: "Senior Full Stack Lead & Architecte Frontend",
      title: "Alberto Ledesma Ollega",
      bio: "+12 ans d'expérience dans la direction d'équipes techniques, la conception d'architectures numériques évolutives et la transformation de défis complexes.",
      status: "🟢 Disponible pour projets Freelance & Contrats",
      contactBtn: "💬 Me Contacter",
      viewCoverBtn: "✉️ Voir la Cover Letter",
      bookMeetingBtn: "📅 Réserver un RDV",
      metricYears: "Années d'Expérience",
      metricConsulting: "Conseil & Entreprise",
      metricStack: "Frontend & Backend",
      metricLanguages: "Support Multilingue"
    },
    expBadge: "Parcours Professionnel",
    expTitle: "Expérience Professionnelle",
    expSubtitle: "Parcours de leadership et de développement technique dans des projets d'envergure",
    expHighlight: "Conseil Indépendant",
    expStackTitle: "Architecture Frontend & Stack",
    expStackFeatured: "Technologies Clés :",
    eduBadge: "Diplômes & Certifications",
    eduTitle: "Parcours Académique & Certifications",
    eduSubtitle: "Formation universitaire, masters et diplômes officiels réglementés",
    eduDegreeLabel: "Diplôme Universitaire",
    eduMasterLabel: "Master de Spécialisation",
    eduCertLabel: "Certification Officielle / Réglementée",
    eduVerified: "Diplôme Vérifié et Homologué",
    coverBadge: "Lettre Professionnelle",
    coverTitle: "Lettre de Motivation",
    coverSubtitle: "Proposition de valeur, vocation et flexibilité de collaboration",
    coverTagline: "💡 Passion pour la Technologie & Polyvalence Professionnelle",
    coverGreeting: "Madame, Monsieur, Responsable du recrutement / Équipe technique,",
    coverP1: "Je m'adresse à vous avec l'enthousiasme de celui qui a la chance d'exercer quotidiennement sa profession favorite : l'ingénierie logicielle et l'architecture de systèmes Full Stack. Avec plus de 12 ans d'expérience dans la direction et le développement de solutions numériques à haut impact, ma motivation principale reste la même depuis le premier jour : écrire un code propre, évolutif et transformer des défis complexes en produits d'excellence.",
    coverP2: "Tout au long de mon parcours, j'ai conçu des systèmes frontend et backend (React, Next.js, Vue.js, Angular, Node.js) et géré des environnements cloud (GCloud, AWS, Docker). J'aborde la collaboration technique avec une flexibilité maximale : c'est pourquoi je propose mes services aussi bien en <strong>consulting freelance (contrat B2B)</strong> que via <strong>différents types de contrats de travail</strong> (à distance, hybride, temps plein ou au projet), en m'adaptant aux besoins spécifiques de votre organisation.",
    coverP3: "Mon objectif est de continuer à évoluer professionnellement au sein d'équipes ambitieuses, en apportant une vision stratégique, une rigueur technique et un leadership positif. Je serais ravi de vous rencontrer lors d'un entretien pour échanger sur la manière dont mon expérience peut contribuer au succès de vos futurs projets.",
    coverValediction: "Veuillez agréer mes salutations distinguées,\nAlberto Ledesma Ollega",
    copyText: "Copier le texte",
    copiedText: "Copié !",
    printPdf: "Imprimer le PDF",
    stackBadge: "Stack Technique (+12 Ans)",
    stackTitle: "Stack Technique & Outils de Carrière",
    stackSubtitle: "Bilan exhaustif des technologies et méthodologies maîtrisées sur +12 ans",
    stackSearchPlaceholder: "Rechercher un outil (ex: React, Python, SQL...)",
    stackClear: "Effacer",
    contactBadge: "Canaux Directs",
    contactTitle: "Contact & Prise de Contact",
    contactSubtitle: "Canaux directs pour initier des collaborations freelance ou des recrutements",
    emailLabel: "Adresse E-mail",
    phoneLabel: "Téléphone Direct",
    linkedinLabel: "Profil LinkedIn",
    portfolioLabel: "Portfolio Web",
    bookMeetingSub: "Choisissez une date et une heure sur Google Calendar",
    bookMeeting: "Réserver un RDV",
    copyEmail: "Copier l'Email",
    callPhone: "Appeler",
    openProfile: "Ouvrir le Profil",
    footerBuiltWith: "Développé avec",
    experiences: [
      {
        company: "Wilting Components • Aéroport d'Eindhoven",
        role: "Développeur Full-Stack / Frontend (Outils d'Automation Industrielle)",
        date: "juin 2025 - Présent",
        desc: "Développement d'applications web internes et de tableaux de bord opérationnels avec TypeScript, React et Node.js pour surveiller la métrologie CNC et visualiser la télémétrie de production en temps réel.",
        bullets: [
          "Développement d'applications web internes et de dashboards opérationnels avec TypeScript, React et Node.js pour surveiller les statistiques d'usinage CNC et afficher la télémétrie en temps réel.",
          "Création d'interfaces interactives pour calculer et enregistrer les offsets d'usure d'outils, standardisant la saisie manuelle pour les centres d'usinage verticaux 3 et 5 axes.",
          "Conception d'APIs REST légères et de flux WebSockets pour traiter la télémétrie des contrôleurs et les métadonnées G-code, réduisant le temps de configuration des opérateurs.",
          "Intégration de technologies web modernes avec les systèmes de production d'usine, améliorant la traçabilité sur les lignes de fabrication haute précision."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Développeur Front-end Vue 3 – Secteur Assurance",
        date: "avr. 2023 - juin 2025 (2 ans 2 mois)",
        desc: "Pour Zurich Insurance Group (via Accenture), travail en tant qu'ingénieur frontend sur des interfaces utilisateur complexes et la logique sous-jacente avec Vue 3 et TypeScript.",
        bullets: [
          "Traitement et intégration de grands volumes de données bancaires et d'assurance héritées (Cobol), garantissant une conversion stricte aux normes européennes.",
          "Travail 100% à distance avec responsabilité directe de l'environnement technique, résolution autonome des erreurs de compilation et optimisation des tsconfig.",
          "Participation aux sprints Agile avec des Code Reviews strictes sur GitLab et le respect des critères de qualité SonarQube Cloud.",
          "Maintien d'une couverture de tests unitaires supérieure à 94% sans aucun blocage ouvert."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Développeur Frontend & Lead Technique",
        date: "juin 2018 - avr. 2023 (4 ans 10 mois)",
        desc: "Leadership technique, conception d'architecture et ingénierie frontend pour des projets critiques, de la banque aux avatars d'intelligence artificielle.",
        bullets: [
          "Plateforme GenAI (Fluidra) : Architecture Greenfield complète pour plateforme interactive d'avatars IA lors de salons internationaux avec React, Next.js et Tailwind CSS.",
          "Ingénierie à faible latence : Intégration de services IA avancés (HeyGen & PIPECAT) avec flux de données asynchrones et webhooks pour une expérience en temps réel.",
          "Tests unitaires rigoureux et pipelines CI/CD automatisés assurant une stabilité maximale lors des démonstrations en direct.",
          "Micro-Frontends (La Caixa) : Contribution active à la migration et à l'architecture évolutive de micro-frontends bancaires."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Ingénieur Logiciel Full Stack (Jubilame)",
        date: "janv. 2014 - 2018 (4 ans)",
        desc: "Pendant plusieurs années, j'ai été pleinement responsable de la stratégie technologique et de l'ingénierie frontend chez Jubilame, une plateforme d'épargne retraite et d'assurance.",
        bullets: [
          "Leadership technique & croissance de l'équipe : Équipe initiale réduite de 3 personnes agrandie jusqu'à 12 développeurs au fur et à mesure de l'expansion de la plateforme cloud.",
          "Migration continue de l'écosystème Angular : Gestion et mise à niveau rigoureuse de chaque version majeure de 2016 à 2022 pour maintenir une application moderne et très performante.",
          "Calculateur financier complexe : Développement du cœur de l'application, un calculateur financier de scénarios de retraite exigeant une précision de calcul et une gestion d'état parfaites.",
          "Infrastructure Cloud, Docker & SEO Technique : Configuration intégrale sur GCP et Firebase avec conteneurisation Docker, et intégration directe du SEO technique pour une visibilité Google maximale."
        ],
        stack: { f: "Angular, TypeScript", l: "Calculateur Financier, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "CONSULTING TECHNIQUE SENIOR @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Grands Comptes",
        date: "janv. 2014 - déc. 2018",
        desc: "Solutions évolutives, développement FullStack et conseil technique pour des défis complexes chez des entreprises et institutions majeures.",
        bullets: [
          "Upfield : Dashboard logistique mondial avec synchronisation automatique des stocks (Cron Jobs).",
          "Amovens : Optimisation du cœur React et stabilisation via des suites de tests Jest.",
          "Junta de Andalucía & Real Betis Balompié : Tâches FullStack, développement web sur mesure et solutions techniques à haut impact."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Licence en Ingénierie Logicielle", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master en Développement Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Diplôme Supérieur DAM (Développement d'Apps Multiplateformes)", school: "IES Nervión (Séville)", date: "2008 - 2010", type: "degree" },
      { title: "Certification Officielle React & Architecture Frontend", school: "Formation Réglementée", date: "2017", type: "certification" },
      { title: "Certification Réglementée SQL & Gestion de Bases de Données", school: "Diplôme Officiel Avancé", date: "2016", type: "certification" },
      { title: "Spécialisation Officielle Data Science & IA (Python / ML)", school: "Formation Réglementée Pro", date: "2017", type: "certification" },
      { title: "Certification Officielle Infrastructure Cloud & DevOps (AWS/Docker)", school: "Diplôme Réglementé", date: "2017", type: "certification" }
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
          { name: "WebSockets & Flux Temps Réel", level: "Expert (+4 ans)", badge: "Wilting IoT" },
          { name: "Dashboards Opérationnels Temps Réel", level: "Expert", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Endpoints Légers", level: "Expert (+12 ans)", badge: "Architecture" },
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
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Stack Completo",
      contact: "Contato",
      downloadPdf: "📥 Baixar PDF",
      bookMeeting: "Agendar Reunião"
    },
    timelapseBadge: "Ramificação Cronológica 2008 - 2026",
    timelapseTitle: "Timelapse Interativo de Vida e Carreira",
    timelapseSubtitle: "Visualização unificada e interativa de toda a minha trajetória acadêmica e profissional",
    timelapseFilterAll: "Todos os Marcos",
    timelapseFilterWork: "💼 Experiência Profissional",
    timelapseFilterEdu: "🎓 Estudos & Qualificações",
    timelapseFilterHighlight: "⭐ Destaques",
    timelapsePlayBtn: "▶ Reproduzir Timelapse",
    timelapsePauseBtn: "⏸ Pausar",
    timelapseResetBtn: "↺ Reiniciar",
    timelapseSearchPlaceholder: "Pesquisar por marco ou tecnologia...",
    hero: {
      subtitle: "Senior Full Stack Lead & Arquiteto Frontend",
      title: "Alberto Ledesma Ollega",
      bio: "+12 anos de experiência liderando equipes técnicas, projetando arquiteturas digitais escaláveis e transformando desafios complexos em software de alto impacto.",
      status: "🟢 Disponível para projetos Freelance & Contratação",
      contactBtn: "💬 Entrar em Contato",
      viewCoverBtn: "✉️ Ver Cover Letter",
      bookMeetingBtn: "📅 Agendar Reunião",
      metricYears: "Anos de Experiência",
      metricConsulting: "Consultoria & Empresa",
      metricStack: "Frontend & Backend",
      metricLanguages: "Suporte Multilingue"
    },
    expBadge: "Trajetória Profissional",
    expTitle: "Experiência Profissional",
    expSubtitle: "Trajetória de liderança e desenvolvimento técnico em projetos de grande porte",
    expHighlight: "Consultoria Freelance",
    expStackTitle: "Arquitetura Frontend & Stack",
    expStackFeatured: "Stack em Destaque:",
    eduBadge: "Académico & Certificações",
    eduTitle: "Histórico Académico & Certificações",
    eduSubtitle: "Formação universitária, mestrados e qualificações oficiais regulamentadas",
    eduDegreeLabel: "Grau Universitário",
    eduMasterLabel: "Mestrado de Especialização",
    eduCertLabel: "Certificação Regulada / Oficial",
    eduVerified: "Qualificação Verificada e Homologada",
    coverBadge: "Carta Profissional",
    coverTitle: "Carta de Apresentação",
    coverSubtitle: "Proposta de valor, vocação e flexibilidade de colaboração",
    coverTagline: "💡 Paixão pela Tecnologia & Versatilidade Profissional",
    coverGreeting: "Prezado(a) responsável de recrutamento / equipe técnica,",
    coverP1: "Escrevo com o entusiasmo de quem tem a sorte de exercer diariamente sua profissão favorita: a engenharia de software e a arquitetura de sistemas Full Stack. Com mais de 12 anos de experiência liderando e desenvolvendo soluções digitais de alto impacto, minha motivação principal continua sendo a mesma desde o primeiro dia: escrever código limpo, escalável e transformar desafios complexos em produtos de excelência.",
    coverP2: "Ao longo da minha trajetória, projetei sistemas frontend e backend (React, Next.js, Vue.js, Angular, Node.js) e gerenciei ambientes em nuvem (GCloud, AWS, Docker). Entando a colaboração técnica a partir da máxima flexibilidade: por isso, ofereço meus serviços tanto em modalidade de <strong>consultoria freelance (contrato B2B)</strong> quanto por meio de <strong>diferentes tipos de contratação de trabalho</strong> (remoto, híbrido, tempo integral ou por projetos), adaptando-me às necessidades reais da sua organização.",
    coverP3: "Meu objetivo é continuar evoluindo profissionalmente ao lado de equipes ambiciosas, trazendo visão técnica estratégica, solidez e uma liderança positiva. Terei todo o prazer em agendar uma conversa para aprofundar como minha experiência pode contribuir para o sucesso dos seus próximos projetos.",
    coverValediction: "Atenciosamente,\nAlberto Ledesma Ollega",
    copyText: "Copiar Texto",
    copiedText: "Copiado!",
    printPdf: "Imprimir PDF",
    stackBadge: "Stack Tecnológico (+12 Anos)",
    stackTitle: "Stack Técnico & Ferramentas de Carreira",
    stackSubtitle: "Detalhamento exaustivo de tecnologias e metodologias dominadas ao longo de +12 anos",
    stackSearchPlaceholder: "Buscar ferramenta (ex: React, Python, SQL...)",
    stackClear: "Limpar",
    contactBadge: "Canais Diretos",
    contactTitle: "Contato & Parcerias",
    contactSubtitle: "Canais diretos para iniciar colaborações freelance ou contratações",
    emailLabel: "E-mail de Contato",
    phoneLabel: "Telefone Direto",
    linkedinLabel: "Perfil Profissional LinkedIn",
    portfolioLabel: "Portfolio Web",
    bookMeetingLabel: "Agendar Reunião 1-para-1",
    bookMeetingSub: "Selecione o dia e horário no meu Google Calendar",
    bookMeeting: "Agendar Reunião",
    copyEmail: "Copiar Email",
    callPhone: "Ligar",
    openProfile: "Abrir Perfil",
    footerBuiltWith: "Desenvolvido com",
    experiences: [
      {
        company: "Wilting Components • Aeroporto de Eindhoven",
        role: "Desenvolvedor Full-Stack / Frontend (Ferramentas de Automação Industrial)",
        date: "jun. 2025 - Presente",
        desc: "Desenvolvimento de aplicações web internas e painéis operacionais utilizando TypeScript, React e Node.js para monitorar estatísticas de usinagem CNC e visualizar parâmetros de produção em tempo real.",
        bullets: [
          "Desenvolvimento de aplicações web internas e painéis operacionais com TypeScript, React e Node.js para monitorar métricas CNC e exibir telemetria em tempo real.",
          "Criação de interfaces interativas para calcular e registrar offsets de desgaste de ferramentas, padronizando a entrada manual para processos verticais de 3 e 5 eixos.",
          "Design de APIs REST leves e datafeeds WebSockets para processar telemetria de controladores e metadados de G-code, reduzindo o tempo de preparação de operadores.",
          "Integração de tecnologias web modernas com sistemas de produção fabril, aumentando a rastreabilidade em linhas de fabricação de alta precisão."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Desenvolvedor Front-end Vue 3 – Setor de Seguros",
        date: "abr. 2023 - jun. 2025 (2 anos 2 meses)",
        desc: "Para o Zurich Insurance Group (via Accenture), atuei como engenheiro frontend em interfaces de usuário complexas e lógica subjacente com Vue 3 e TypeScript.",
        bullets: [
          "Processamento e integração de dados legados de sistemas bancários e seguradores (Cobol), garantindo conversão estrita aos padrões europeus de UI.",
          "Trabalho 100% remoto assumindo responsabilidade direta pelo ambiente técnico, resolução autônoma de erros de compilação e otimização de tsconfig.",
          "Participação em sprints Agile com Code Reviews rigorosas no GitLab e conformidade com os critérios de qualidade do SonarQube Cloud.",
          "Manutenção contínua de cobertura de testes unitários superior a 94% sem nenhum bloqueio em aberto."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Desenvolvedor Frontend & Lead Técnico",
        date: "jun. 2018 - abr. 2023 (4 anos 10 meses)",
        desc: "Liderança técnica, arquitetura de sistemas e engenharia frontend para projetos críticos, desde soluções bancárias a avatares interativos de inteligência artificial.",
        bullets: [
          "Plataforma GenAI (Fluidra): Construção de arquitetura Greenfield do zero para avatares IA interativos em eventos internacionais com React, Next.js e Tailwind CSS.",
          "Engenharia de baixa latência: Integração de serviços avançados de IA (HeyGen & PIPECAT) com fluxos de dados assíncronos e webhooks para resposta em tempo real.",
          "Testes unitários rigorosos e pipelines CI/CD automatizados garantindo estabilidade máxima em demonstrações ao vivo.",
          "Micro-Frontends (La Caixa): Contribuição ativa para migração e arquitetura escalável de micro-frontends bancários."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Engenheiro de Software Full Stack (Jubilame)",
        date: "jan. 2014 - 2018 (4 anos)",
        desc: "Durante anos, fui o responsável absoluto pela estratégia tecnológica e engenharia de interface na Jubilame, uma plataforma abrangente de economia para aposentadoria e seguros.",
        bullets: [
          "Liderança técnica e expansão da equipe: Começamos como uma equipe reduzida de apenas 3 pessoas e ajudei a expandir o time de engenharia até atingir 12 desenvolvedores conforme a plataforma crescia em complexidade na nuvem.",
          "Migração contínua do ecossistema Angular: Liderança na migração contínua de nosso ecossistema Angular, gerenciando e implementando com rigor cada atualização de versão principal de 2016 a 2022 para manter a aplicação moderna e com alta performance.",
          "Calculadora financeira complexa: Desenvolvimento do núcleo da aplicação, uma calculadora financeira avançada para modelar cenários de aposentadoria onde desempenho, gerenciamento de estado e precisão eram essenciais.",
          "Infraestrutura Cloud, Docker & SEO Técnico: Gestão de configuração integral no Google Cloud (GCP) e Firebase utilizando Docker para conteinerizar ambientes e manter processos de implantação fluidos, além de SEO técnico integrado à arquitetura para máxima visibilidade no Google."
        ],
        stack: { f: "Angular, TypeScript", l: "Calculadora Financeira, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "CONSULTORIA TÉCNICA SENIOR @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Clientes Enterprise",
        date: "jan. 2014 - dez. 2018",
        desc: "Soluções escaláveis, desenvolvimento FullStack e consultoria técnica para desafios complexos em empresas líderes e instituições públicas.",
        bullets: [
          "Upfield: Dashboard logístico global com sincronização massiva de estoque (Cron Jobs).",
          "Amovens: Otimização do core do React e estabilização via suítes de testes Jest.",
          "Junta de Andalucía & Real Betis Balompié: Tarefas FullStack, desenvolvimento de plataformas web e engenharia de software de alto impacto."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Graduação em Engenharia de Software", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Mestrado em Desenvolvimento Web Full Stack", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Técnico Superior DAM (Dev. de Aplicações Multiplataforma)", school: "IES Nervión (Sevilha)", date: "2008 - 2010", type: "degree" },
      { title: "Certificação Oficial em React & Arquitetura Frontend", school: "Curso Regulamentado", date: "2017", type: "certification" },
      { title: "Certificação Regulamentada em SQL & Gestão de Bancos de Dados", school: "Titulação Oficial Avançada", date: "2016", type: "certification" },
      { title: "Especialização Oficial em Data Science & IA (Python / ML)", school: "Curso Regulamentado Pro", date: "2017", type: "certification" },
      { title: "Certificação Oficial Cloud Infrastructure & DevOps (AWS/Docker)", school: "Titulação Regulamentada", date: "2017", type: "certification" }
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
          { name: "WebSockets & Fluxos em Tempo Real", level: "Especialista (+4 anos)", badge: "Wilting IoT" },
          { name: "Dashboards Operacionais em Tempo Real", level: "Especialista", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Endpoints Leves", level: "Especialista (+12 anos)", badge: "Arquitetura" },
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
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Contact",
      downloadPdf: "📥 PDF downloaden",
      bookMeeting: "Afspraak Inplannen"
    },
    timelapseBadge: "Chronologische Tak 2008 - 2026",
    timelapseTitle: "Interactieve Levens- en Carrière-Timelapse",
    timelapseSubtitle: "Visueel interactieve tijdlijn van mijn academische en professionele traject",
    timelapseFilterAll: "Alle Mijlpalen",
    timelapseFilterWork: "💼 Werkervaring",
    timelapseFilterEdu: "🎓 Opleidingen & Diploma's",
    timelapseFilterHighlight: "⭐ Hoogtepunten",
    timelapsePlayBtn: "▶ Speel Timelapse Af",
    timelapsePauseBtn: "⏸ Pauze",
    timelapseResetBtn: "↺ Reset",
    timelapseSearchPlaceholder: "Zoek op mijlpaal of technologie...",
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend Architect",
      title: "Alberto Ledesma Ollega",
      bio: "+12 jaar ervaring in het leiden van technische teams, het ontwerpen van schaalbare digitale oplossingen en het omzetten van complexe uitdagingen.",
      status: "🟢 Beschikbaar voor Freelance & Contractopdrachten",
      contactBtn: "💬 Contact Opnemen",
      viewCoverBtn: "✉️ Bekijk Cover Letter",
      bookMeetingBtn: "📅 Afspraak Inplannen",
      metricYears: "Jaren Ervaring",
      metricConsulting: "Consultancy & Bedrijf",
      metricStack: "Frontend & Backend",
      metricLanguages: "Meertalige Ondersteuning"
    },
    expBadge: "Carrière Overzicht",
    expTitle: "Werkervaring",
    expSubtitle: "Staat van dienst in technisch leiderschap en ontwikkeling in grootschalige projecten",
    expHighlight: "Freelance Consultancy",
    expStackTitle: "Frontend Architectuur & Stack",
    expStackFeatured: "Uitgelichte Stack:",
    eduBadge: "Academisch & Certificaten",
    eduTitle: "Opleiding & Certificeringen",
    eduSubtitle: "Universitaire opleiding, masters en officiële gereguleerde kwalificaties",
    eduDegreeLabel: "Universitair Diploma",
    eduMasterLabel: "Specialisatie Master",
    eduCertLabel: "Officieel Gecertificeerd",
    eduVerified: "Geverifieerd en Erkend Diploma",
    coverBadge: "Professionele Brief",
    coverTitle: "Sollicitatiebrief",
    coverSubtitle: "Waardepropositie, roeping en flexibele samenwerkingsopties",
    coverTagline: "💡 Passie voor Technologie & Professionele Veelzijdigheid",
    coverGreeting: "Beste recruitment manager / talent team,",
    coverP1: "Ik schrijf u met het enthousiasme van iemand die het geluk heeft elke dag te werken in zijn favoriete beroep: software engineering en Full Stack systeemarchitectuur. Met meer dan 12 jaar ervaring in het leiden en bouwen van hoogwaardige digitale oplossingen, blijft mijn drijfveer ongewijzigd: het schrijven van schone, schaalbare code en het omzetten van complexe uitdagingen in uitstekende producten.",
    coverP2: "Gedurende mijn carrière heb ik frontend- en backend-systemen ontworpen (React, Next.js, Vue.js, Angular, Node.js) en cloudinfrastructuur beheerd (GCloud, AWS, Docker). Ik benader technische samenwerking met maximale flexibiliteit: daarom bied ik mijn diensten aan via <strong>freelance consultancy (B2B-contract)</strong> evenals via <strong>verschillende dienstverbanden</strong> (op afstand, hybride, voltijd of op projectbasis), afgestemd op de specifieke behoeften van uw organisatie.",
    coverP3: "Mijn doel is om professioneel te blijven groeien samen met ambitieuze teams, door strategische visie, technische uitmuntendheid en positief leiderschap bij te dragen. Ik ga graag met u in gesprek om te bespreken hoe mijn ervaring waarde kan toevoegen aan uw toekomstige projecten.",
    coverValediction: "Met vriendelijke groet,\nAlberto Ledesma Ollega",
    copyText: "Tekst Kopiëren",
    copiedText: "Gekopieerd!",
    printPdf: "PDF Afdrukken",
    stackBadge: "Technologische Stack (+12 Jaar)",
    stackTitle: "Technische Stack & Carrière-tools",
    stackSubtitle: "Uitgebreid overzicht van technologieën en methodologieën beheerst in +12 jaar",
    stackSearchPlaceholder: "Zoek tool (bijv. React, Python, SQL...)",
    stackClear: "Wis",
    contactBadge: "Directe Kanalen",
    contactTitle: "Contact & Samenwerking",
    contactSubtitle: "Directe kanalen om freelance samenwerkingen of sollicitaties te starten",
    emailLabel: "E-mailadres",
    phoneLabel: "Direct Telefoonnummer",
    linkedinLabel: "LinkedIn Profiel",
    portfolioLabel: "Web Portfolio",
    bookMeetingLabel: "Plan een 1-op-1 Afspraak",
    bookMeetingSub: "Kies een datum en tijd op mijn Google Calendar",
    bookMeeting: "Afspraak Inplannen",
    copyEmail: "E-mail Kopiëren",
    callPhone: "Bellen",
    openProfile: "Profiel Openen",
    footerBuiltWith: "Gebouwd met",
    experiences: [
      {
        company: "Wilting Components • Eindhoven Airport",
        role: "Full-Stack / Frontend Developer (Industrial Automation Tools)",
        date: "juni 2025 tot nu",
        desc: "Ontwikkelde interne webapplicaties en operationele dashboards met TypeScript, React en Node.js om CNC-bewerkingsstatistieken te monitoren en realtime productieparameters te visualisere.",
        bullets: [
          "Ontwikkelde interne webapplicaties en operationele dashboards met TypeScript, React en Node.js om CNC-bewerkingsstatistieken te monitoren en realtime productieparameters te visualisere.",
          "Bouwde interactieve interfaces voor het berekenen en registreren van gereedschapsslijtage-offsets, waarmee handmatige invoer voor 3-assige en 5-assige verticale bewerkingsprocessen werd gestandaardiseerd.",
          "Ontwierp lichte REST API's en WebSocket-datafeeds om besturingstelemetrie en G-code metadata te verwerken, wat de insteltijd voor operators aanzienlijk verkortte.",
          "Sloeg een brug tussen moderne webtechnologieën en productiesystemen op de werkvloer, wat leidde tot een verbeterde traceerbaarheid binnen hoogwaardige precisie-productielijnen."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Vue 3 Front-end Developer – Verzekeringssector",
        date: "apr. 2023 - juni 2025 (2 jaar 2 mnd)",
        desc: "Voor Zurich Insurance Group (via Accenture), gewerkt als frontend-engineer aan complexe UI-interfaces en kernlogica met Vue 3 en TypeScript.",
        bullets: [
          "Verwerken en integreren van legacy bank- en verzekeringsgegevens (Cobol), strikt genormaliseerd naar Europese UI-standaarden.",
          "100% werken op afstand met volledige verantwoordelijkheid voor de lokale technische inrichting, zelfstandig oplossen van compilatie-fouten en optimaliseren van tsconfig.",
          "Actieve deelname aan Agile sprints met strikte GitLab Code Reviews en SonarQube Cloud kwaliteitsborging.",
          "Handhaven van een unit-testdekking van consistent boven de 94% zonder openstaande blokkades."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Frontend Developer & Technical Lead",
        date: "juni 2018 - apr. 2023 (4 jaar 10 mnd)",
        desc: "Technisch leiderschap, architectuurontwerp en hands-on frontend-engineering voor kritieke projecten van banken tot AI-avatars.",
        bullets: [
          "GenAI-platform (Fluidra): Greenfield-architectuur gebouwd voor interactieve AI-avatars op internationale beurzen met React, Next.js en Tailwind CSS.",
          "Lage-latentie engineering: Integratie van geavanceerde AI-diensten (HeyGen & PIPECAT) met async datastromen en webhooks voor real-time interactie.",
          "Geautomatiseerde CI/CD-pipelines en strenge unit-tests voor maximale stabiliteit tijdens live demonstraties.",
          "Micro-Frontends (La Caixa): Actieve bijdrage aan de migratie en schaalbare architectuur van bancaire micro-frontends."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Full Stack Software Engineer (Jubilame)",
        date: "jan. 2014 - 2018 (4 jaar)",
        desc: "Jarenlang was ik volledig verantwoordelijk voor de technologische strategie en frontend-engineering bij Jubilame, een platform voor pensioensparen en verzekeringen.",
        bullets: [
          "Technisch leiderschap & teamschaling: Begonnen als een klein team van slechts 3 personen en geholpen bij de uitbreiding van het engineering-team naar 12 ontwikkelaars naarmate het platform en de cloudinfrastructuur groeiden.",
          "Continue Angular-migratie: Geleidende rol bij de continue migratie van ons Angular-ecosysteem, met het rigoureus uitvoeren en beheren van elke grote versie-upgrade van 2016 tot 2022 om de applicatie modern en optimaal presterend te houden.",
          "Complexe financiële rekenmachine: Ontwikkeling van de kern van de applicatie, een geavanceerde pensioenrekenmachine waarbij nauwkeurigheid, state management en renderprestaties essentieel waren.",
          "Cloudinfrastructuur, Docker & Technische SEO: Beheer van de volledige GCP- en Firebase-omgeving met Docker voor gecontaineriseerde omgevingen, en directe integratie van technische SEO in de architectuur voor maximale zichtbaarheid in Google."
        ],
        stack: { f: "Angular, TypeScript", l: "Financiële Rekenmachine, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "SENIOR TECHNISCHE CONSULTANCY @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Grote Klanten",
        date: "jan. 2014 - dec. 2018",
        desc: "Schaalbare oplossingen, FullStack-ontwikkeling en technisch advies voor complexe uitdagingen bij toonaangevende bedrijven en instellingen.",
        bullets: [
          "Upfield: Wereldwijd logistiek dashboard met automatische voorraadsynchronisatie (Cron Jobs).",
          "Amovens: React core-optimalisatie en stabilisatie via Jest-test-suites.",
          "Junta de Andalucía & Real Betis Balompié: FullStack-taken, maatwerk webontwikkeling en hoogwaardige digitale platformoplossingen."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Bachelor in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master in Full Stack Web Development", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Hoger Technicus Multiplatform Dev (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Officiële Certificering in React & Frontend Architectuur", school: "Gereguleerde Cursus", date: "2017", type: "certification" },
      { title: "Gereguleerde Certificering in SQL & Databasemanagement", school: "Geavanceerde Officiële Kwalificatie", date: "2016", type: "certification" },
      { title: "Officiële Specialisatie in Data Science & AI (Python / ML)", school: "Gereguleerde Professionele Cursus", date: "2017", type: "certification" },
      { title: "Officiële Certificering Cloud Infrastructuur & DevOps (AWS/Docker)", school: "Gereguleerde Kwalificatie", date: "2017", type: "certification" }
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
          { name: "WebSockets & Real-Time Datafeeds", level: "Expert (+4 jaar)", badge: "Wilting IoT" },
          { name: "Real-Time Operationele Dashboards", level: "Expert", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Lichte Endpoints", level: "Expert (+12 jaar)", badge: "Architectuur" },
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
      timelapse: "Timelapse",
      coverLetter: "Cover Letter",
      stack: "Full Stack",
      contact: "Kontakt",
      downloadPdf: "📥 PDF herunterladen",
      bookMeeting: "Termin Vereinbaren"
    },
    timelapseBadge: "Chronologischer Zweig 2008 - 2026",
    timelapseTitle: "Interaktiver Lebens- und Karriere-Timelapse",
    timelapseSubtitle: "Eine interaktive, vereinheitlichte Zeitleiste meiner akademischen und beruflichen Laufbahn",
    timelapseFilterAll: "Alle Meilensteine",
    timelapseFilterWork: "💼 Berufserfahrung",
    timelapseFilterEdu: "🎓 Studium & Zertifikate",
    timelapseFilterHighlight: "⭐ Highlights",
    timelapsePlayBtn: "▶ Timelapse Abspielen",
    timelapsePauseBtn: "⏸ Pause",
    timelapseResetBtn: "↺ Zurücksetzen",
    timelapseSearchPlaceholder: "Nach Meilenstein oder Technologie suchen...",
    hero: {
      subtitle: "Senior Full Stack Lead & Frontend-Architekt",
      title: "Alberto Ledesma Ollega",
      bio: "+12 Jahre Erfahrung in der Leitung technischer Teams, der Entwicklung skalierbarer digitaler Architekturen und der Transformation komplexer Herausforderungen.",
      status: "🟢 Verfügbar für Freelance-Projekte & Festanstellungen",
      contactBtn: "💬 Kontakt Aufnehmen",
      viewCoverBtn: "✉️ Cover Letter Anzeigen",
      bookMeetingBtn: "📅 Termin Vereinbaren",
      metricYears: "Jahre Erfahrung",
      metricConsulting: "Beratung & Unternehmen",
      metricStack: "Frontend & Backend",
      metricLanguages: "Mehrsprachige Unterstützung"
    },
    expBadge: "Beruflicher Werdegang",
    expTitle: "Berufserfahrung",
    expSubtitle: "Technische Führung und Entwicklung in hochrangigen Unternehmen",
    expHighlight: "Freelance Beratung",
    expStackTitle: "Frontend-Architektur & Stack",
    expStackFeatured: "Hervorgehobener Stack:",
    eduBadge: "Akademisch & Zertifikate",
    eduTitle: "Ausbildung & Zertifizierungen",
    eduSubtitle: "Universitätsabschluss, Master-Abschlüsse und offizielle geregelte Qualifikationen",
    eduDegreeLabel: "Universitätsabschluss",
    eduMasterLabel: "Spezialisierungs-Master",
    eduCertLabel: "Offizielle Zertifizierung",
    eduVerified: "Geprüfter & Anerkannter Abschluss",
    coverBadge: "Professioneller Brief",
    coverTitle: "Anschreiben",
    coverSubtitle: "Wertversprechen, Berufung und flexible Zusammenarbeit",
    coverTagline: "💡 Leidenschaft für Technologie & Professionelle Vielseitigkeit",
    coverGreeting: "Sehr geehrte(r) Personalverantwortliche(r) / Talent Team,",
    coverP1: "Ich schreibe Ihnen mit der Begeisterung eines Entwicklers, der das Privileg hat, täglich in seinem Wunschberuf zu arbeiten: Software-Engineering und Full-Stack-Systemarchitektur. Mit über 12 Jahren Erfahrung in der Leitung und Entwicklung hochwirksamer digitaler Lösungen bleibt meine Hauptmotivation unverändert: das Schreiben von sauberem, skalierbarem Code und die Umwandlung komplexer Herausforderungen in herausragende Produkte.",
    coverP2: "Im Laufe meiner Karriere habe ich Frontend- und Backend-Systeme entwickelt (React, Next.js, Vue.js, Angular, Node.js) und Cloud-Infrastrukturen verwaltet (GCloud, AWS, Docker). Ich verstehe technische Zusammenarbeit mit höchster Flexibilität: Daher biete ich meine Leistungen sowohl im Rahmen von <strong>Freelance-Consulting (B2B-Vertrag)</strong> als auch über <strong>verschiedene Anstellungsverhältnisse</strong> (Remote, Hybrid, Vollzeit oder Projektbasis) an, genau angepasst an die Bedürfnisse Ihrer Organisation.",
    coverP3: "Mein Ziel ist es, mich gemeinsam mit ehrgeizigen Teams weiterzuentwickeln und strategische Vision, technische Exzellenz und positive Führung einzubringen. Ich freue mich auf ein Gespräch, um zu erörtern, wie meine Erfahrung zum Erfolg Ihrer nächsten Initiativen beitragen kann.",
    coverValediction: "Mit freundlichen Grüßen,\nAlberto Ledesma Ollega",
    copyText: "Text Kopieren",
    copiedText: "Kopiert!",
    printPdf: "PDF Drucken",
    stackBadge: "Technologie-Stack (+12 Jahre)",
    stackTitle: "Technischer Stack & Karriere-Tools",
    stackSubtitle: "Umfassende Aufschlüsselung aller in +12 Jahren beherrschten Technologien",
    stackSearchPlaceholder: "Tool suchen (z. B. React, Python, SQL...)",
    stackClear: "Löschen",
    contactBadge: "Direkte Kanäle",
    contactTitle: "Kontakt & Anfragen",
    contactSubtitle: "Direkte Kanäle zur Einleitung von Freelance-Projekten oder Anstellungen",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Direkttelefon",
    linkedinLabel: "LinkedIn-Profil",
    portfolioLabel: "Web-Portfolio",
    bookMeetingLabel: "1-zu-1 Termin Vereinbaren",
    bookMeetingSub: "Wählen Sie Datum und Uhrzeit im Google Calendar",
    bookMeeting: "Termin Vereinbaren",
    copyEmail: "E-Mail Kopieren",
    callPhone: "Anrufen",
    openProfile: "Profil Öffnen",
    footerBuiltWith: "Entwickelt mit",
    experiences: [
      {
        company: "Wilting Components • Flughafen Eindhoven",
        role: "Full-Stack / Frontend Entwickler (Industrielle Automatisierungstools)",
        date: "Juni 2025 – Heute",
        desc: "Entwicklung interner Webanwendungen und operativer Dashboards mit TypeScript, React und Node.js zur Überwachung von CNC-Bearbeitungsstatistiken und Echtzeitvisualisierung von Produktionsparametern.",
        bullets: [
          "Entwicklung interner Webanwendungen und operativer Dashboards mit TypeScript, React und Node.js zur Überwachung von CNC-Statistiken und Echtzeittelemetrie.",
          "Erstellung interaktiver Benutzeroberflächen zur Berechnung und Erfassung von Werkzeugverschleiß-Offsets zur Standardisierung manueller Eingaben für 3- und 5-Achs-Vertikalbearbeitungszentren.",
          "Entwurf leichtgewichtiger REST-APIs und WebSocket-Datenfeeds zur Verarbeitung von Steuerungstelemetrie und G-Code-Metadaten zur deutlichen Verkürzung der Rüstzeiten.",
          "Verbindung moderner Webtechnologien mit Fertigungssystemen auf der Halle zur Verbesserung der Rückverfolgbarkeit in Hochpräzisionsproduktionslinien."
        ],
        stack: { f: "TypeScript, React, Node.js", l: "WebSockets, REST APIs, Tailwind CSS", d: "Industrial IoT / Telemetry, Real-Time Dashboards" },
        highlight: true
      },
      {
        company: "Accenture",
        role: "Vue 3 Front-end Entwickler – Versicherungssektor",
        date: "Apr. 2023 – Juni 2025 (2 J. 2 Mon.)",
        desc: "Für die Zurich Insurance Group (über Accenture) als Frontend-Ingenieur für komplexe Benutzeroberflächen und Kernlogik mit Vue 3 und TypeScript tätig.",
        bullets: [
          "Verarbeitung und Integration von Altdaten aus Bank- und Versicherungssystemen (Cobol) mit strikter Normalisierung auf europäische UI-Standards.",
          "100% Remote-Arbeit mit direkter Verantwortung für die technische Entwicklungsumgebung, Behebung von Kompilierungsfehlern und Optimierung von tsconfig-Dateien.",
          "Teilnahme an Agile-Sprints mit strengen Code-Reviews auf GitLab und Einhaltung der Qualitätskriterien von SonarQube Cloud.",
          "Kontinuierliche Aufrechterhaltung einer Unittest-Abdeckung von über 94% ohne offene Blockaden."
        ],
        stack: { f: "Vue 3, TypeScript", l: "Cobol Data Normalization, Export Modules", d: "SonarQube, GitLab CI/CD, Testing (+94%)" },
        highlight: true
      },
      {
        company: "GFT",
        role: "Frontend Developer & Technical Lead",
        date: "Juni 2018 – Apr. 2023 (4 J. 10 Mon.)",
        desc: "Technische Leitung, Architekturdesign und Frontend-Engineering für kritische Projekte von Banken-Micro-Frontends bis hin zu interaktiven KI-Avataren.",
        bullets: [
          "GenAI-Plattform (Fluidra): Greenfield-Architektur von Grund auf für interaktive KI-Avatare auf internationalen Messen mit React, Next.js und Tailwind CSS.",
          "Low-Latency-Engineering: Integration fortschrittlicher KI-Dienste (HeyGen & PIPECAT) mit asynchronen Datenströmen und Webhooks für Echtzeit-Interaktion.",
          "Automatische CI/CD-Pipelines und strenge Unittests für maximale Stabilität bei Live-Demonstrationen.",
          "Micro-Frontends (La Caixa): Aktiver Beitrag zur Migration und skalierbaren Architektur hochfrequentierter Banken-Micro-Frontends."
        ],
        stack: { f: "React, Next.js, Tailwind CSS", l: "HeyGen, PIPECAT, Webhooks", d: "Micro-Frontends, CI/CD, Unit Testing" },
        highlight: true
      },
      {
        company: "Omibú",
        role: "Full Stack Software Engineer (Jubilame)",
        date: "Jan. 2014 – 2018 (4 Jahre)",
        desc: "Jahre lang war ich vollverantwortlich für die technologische Strategie und das Frontend-Engineering bei Jubilame, einer umfassenden Plattform für Altersvorsorge und Versicherungen.",
        bullets: [
          "Technische Leitung & Teamskalierung: Begonnen in einem kleinen Team von nur 3 Personen und Ausbau des Entwicklerteams auf 12 Entwickler mit wachsender Plattformkomplexität und Cloud-Infrastruktur.",
          "Kontinuierliche Angular-Migration: Leitung der ständigen Migration unseres Angular-Ökosystems und Durchführung aller Hauptversions-Upgrades von 2016 bis 2022 für höchste Anwendungsgeschwindigkeit.",
          "Komplexer Finanzrechner: Entwicklung des Anwendungskerns, eines komplexen Finanzrechners für Rentenszenarien mit höchsten Ansprüchen an Performance, State Management und mathematische Genauigkeit.",
          "Cloud-Infrastruktur, Docker & Technisches SEO: Konfigurationsverwaltung auf GCP und Firebase mit Docker-Containerisierung für reibungslose Deployments und direkt integrierter technischer SEO für maximale Google-Sichtbarkeit."
        ],
        stack: { f: "Angular, TypeScript", l: "Finanzrechner, State Management", d: "Google Cloud, Firebase, Docker, SEO" }
      },
      {
        company: "SENIOR TECHNISCHE BERATUNG @ OMIBU",
        role: "Upfield, Amovens, Junta de Andalucía, Real Betis Balompié & Großkunden",
        date: "Jan. 2014 – Dez. 2018",
        desc: "Skalierbare Lösungen, FullStack-Entwicklung und technische Beratung für komplexe Herausforderungen bei führenden Unternehmen und öffentlichen Institutionen.",
        bullets: [
          "Upfield: Globales Logistik-Dashboard mit automatischer Inventarsynchronisierung (Cron-Jobs).",
          "Amovens: React-Core-Optimierung und Stabilisierung durch Jest-Test-Suites.",
          "Junta de Andalucía & Real Betis Balompié: FullStack-Aufgaben, maßgeschneiderte Webentwicklung und hochwirksame digitale Plattformen."
        ],
        stack: { f: "React, Node.js, TypeScript", l: "FullStack Tasks, Cron Jobs, REST APIs", d: "Docker, Jest, WebSockets, Performance" }
      }
    ],
    education: [
      { title: "Bachelor in Software Engineering", school: "MasterD", date: "2008 - 2011", type: "degree" },
      { title: "Master in Full Stack Webentwicklung", school: "MasterD", date: "2011 - 2013", type: "master" },
      { title: "Staatlich geprüfter Informatiker Anwendungsentwicklung (DAM)", school: "IES Nervión (Sevilla)", date: "2008 - 2010", type: "degree" },
      { title: "Offizielle Zertifizierung in React & Frontend-Architektur", school: "Geregelter Kurs", date: "2017", type: "certification" },
      { title: "Geregelte Zertifizierung in SQL & Datenbankverwaltung", school: "Offizielle Fortgeschrittene Qualifikation", date: "2016", type: "certification" },
      { title: "Offizielle Spezialisierung in Data Science & KI (Python / ML)", school: "Geregelter Professioneller Kurs", date: "2017", type: "certification" },
      { title: "Offizielle Zertifizierung Cloud-Infrastruktur & DevOps (AWS/Docker)", school: "Geregelte Qualifikation", date: "2017", type: "certification" }
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
          { name: "WebSockets & Echtzeit-Datenfeeds", level: "Experte (+4 J.)", badge: "Wilting IoT" },
          { name: "Echtzeit-Operative Dashboards", level: "Experte", badge: "Industrial IoT" },
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
          { name: "RESTful APIs & Leichtgewichtige Endpunkte", level: "Experte (+12 J.)", badge: "Architektur" },
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
