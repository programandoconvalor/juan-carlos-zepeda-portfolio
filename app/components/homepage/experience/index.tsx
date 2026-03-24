"use client";

import Image from "next/image";
import {
  BsArrowUpRight,
  BsCalendar3,
  BsCheckCircle,
  BsCloudArrowUp,
  BsCodeSlash,
  BsDatabaseGear,
  BsGraphUpArrow,
  BsLightningCharge,
  BsPersonWorkspace,
  BsShieldCheck,
  BsWindowStack,
} from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";
import {
  SiAuth0,
  SiAwslambda,
  SiAzuredevops,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiDrupal,
  SiFirebase,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { VscSymbolMethod } from "react-icons/vsc";

import { useLanguage } from "@/app/context/language-context";

const experienceContent = {
  es: {
    badge: "TRAYECTORIA PROFESIONAL",
    titleStart: "Experiencia enfocada en",
    titleHighlight: "Front-End de alto impacto",
    description:
      "Más de 8 años desarrollando aplicaciones web con React.js, Next.js y TypeScript para productos enterprise. Mi enfoque está en arquitectura front-end, UX/UI, performance, testing, autenticación segura, integración con APIs modernas y despliegues automatizados en cloud.",
    stackLabel: "Stack relevante",
    projectsLabel: "Proyectos destacados",
    strengthsLabel: "Fortalezas clave",
    metricsLabel: "Métricas y enfoque técnico",
    panel: {
      overline: "FRONT-END ENGINEERING",
      heading:
        "Arquitectura UI moderna, performance, calidad de código y experiencia real de producto",
      cards: [
        {
          title: "UI/UX CON IMPACTO",
          value: "Reusable",
          caption: "Interfaces limpias, responsivas y reutilizables",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "ARQUITECTURA ESCALABLE",
          value: "Reliable",
          caption: "Código mantenible, testing y buenas prácticas",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "DELIVERY ÁGIL",
          value: "Agile",
          caption: "Scrum, CI/CD y colaboración con producto",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "React.js avanzado, Hooks, Context API y componentes funcionales",
        "Next.js con SSR / SSG / ISR, Server Actions y arquitectura escalable",
        "HTML5, CSS3, Flexbox, Grid, Material UI y responsive design",
        "Testing, autenticación segura, integración REST / GraphQL y cloud delivery",
      ],
    },
    metrics: [
      {
        label: "Realtime APIs",
        value: "REST / GraphQL",
        icon: "api",
        caption: "Integraciones en tiempo real y flujos conectados con proveedores externos.",
      },
      {
        label: "CI/CD",
        value: "GitHub / Azure",
        icon: "delivery",
        caption: "Pipelines, YAML workflows, ambientes QA, Staging y Main con despliegues automáticos.",
      },
      {
        label: "Testing",
        value: "Jest + RTL",
        icon: "testing",
        caption: "Cobertura funcional, estabilidad de componentes y validación continua.",
      },
      {
        label: "Cloud Migration",
        value: "Azure / AWS",
        icon: "cloud",
        caption: "Modernización de sistemas legacy y despliegue en infraestructura cloud.",
      },
      {
        label: "Next.js",
        value: "SSR / SSG / ISR",
        icon: "performance",
        caption: "Optimización de renderizado, performance y estrategias híbridas de entrega.",
      },
      {
        label: "Auth",
        value: "JWT / OAuth2",
        icon: "security",
        caption: "Autenticación profesional, sesiones seguras y protección de flujos enterprise.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Ene 2025",
        role: "Senior Front-End Engineer",
        company: "Afore Principal",
        type: "Remote Freelancer · Fintech / Enterprise",
        summary:
          "Desarrollo de widgets y librerías front-end reutilizables con React.js, Next.js, TypeScript y Material UI para integrarse en sistemas internos enterprise. Conversión de requerimientos funcionales y diseños en Figma a componentes responsivos, escalables y mantenibles, colaborando con UX/UI, backend y producto bajo metodologías ágiles.",
        highlights: [
          "Desarrollo y mantenimiento de aplicaciones y widgets con React.js avanzado, Next.js, Hooks, Context API, TypeScript y componentes funcionales.",
          "Construcción de widgets reutilizables consumidos como librerías dentro de sistemas internos, siguiendo un enfoque modular similar a integraciones por import/CDN.",
          "Implementación de interfaces responsivas con HTML5, CSS3, Flexbox, Grid y Material UI, cuidando accesibilidad, consistencia visual y experiencia de usuario.",
          "Conversión de requerimientos y maquetado en Figma a componentes reutilizables documentados, escalables y alineados con buenas prácticas front-end.",
          "Integración y consumo de APIs REST y GraphQL para mostrar información de negocio en tiempo real dentro de portales internos.",
          "Trabajo con arquitectura moderna en Next.js contemplando SSR, SSG, ISR y patrones de escalabilidad del lado del front.",
          "Implementación de pruebas unitarias e integración con Jest, Cypress y React Testing Library para asegurar estabilidad funcional.",
          "Aplicación de seguridad front-end mediante JWT y OAuth2, además de integraciones con AWS Lambda y servicios backend conectados.",
          "Participación en code reviews, documentación de componentes, procesos técnicos y definición de estándares de desarrollo.",
          "Trabajo diario con Scrum, Jira, refinamientos, dailys y colaboración con equipos multidisciplinarios, incluyendo comunicación técnica en inglés cuando fue requerido.",
          "Configuración de CI/CD con GitHub Actions, archivos YAML, deploys automáticos y manejo de ambientes QA, Staging y Main.",
          "Colaboración con Docker, Drupal y flujos de despliegue cloud en entornos enterprise.",
        ],
        projects: [
          "Widget inteligente de simulación y recomendación asistida con OpenAI para orientar opciones y escenarios financieros dentro del portal.",
          "Módulo de ayuda contextual con IA para formularios y flujos internos, generando asistencia dinámica y respuestas guiadas para usuarios y asesores.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Material UI",
          "Redux",
          "Figma",
          "Jest",
          "Cypress",
          "Testing Library",
          "JWT",
          "OAuth2",
          "AWS Lambda",
          "GitHub Actions",
          "Git",
          "GitHub",
          "Docker",
          "Drupal",
          "REST APIs",
          "GraphQL",
          "AWS",
          "Vercel",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Ene 2022",
        role: "Senior Front-End Engineer",
        company: "AXA Assistance México",
        type: "Enterprise · Remote / Hybrid",
        summary:
          "Desarrollo y modernización de soluciones front-end enterprise con React.js, Next.js y TypeScript para productos del sector asegurador. Participación en integración de APIs externas, refactorización de sistemas legacy, migración hacia Azure y construcción de interfaces reutilizables orientadas a performance, mantenibilidad y experiencia de usuario.",
        highlights: [
          "Desarrollo y mantenimiento de aplicaciones web con React.js, Next.js, TypeScript y JavaScript ES6+ para productos de asistencia y pólizas.",
          "Implementación de interfaces de usuario responsivas y reutilizables, colaborando con áreas de UX/UI, backend y producto para construir nuevas funcionalidades.",
          "Integración de múltiples APIs REST de proveedores externos de grúas y asistencia para mostrar información operativa en tiempo real desde el front-end.",
          "Consumo de servicios REST y GraphQL con enfoque en performance, calidad de código, tipado fuerte y experiencia consistente para el usuario final.",
          "Refactorización de sistemas front-end legacy hacia tecnología moderna con Next.js, TypeScript e interfaces escalables.",
          "Participación en estrategias de renderizado y arquitectura moderna con Next.js para mejorar performance y mantenibilidad del producto.",
          "Migración de módulos y aplicaciones hacia Azure mediante pipelines, flujos controlados de despliegue y modernización progresiva de la plataforma.",
          "Trabajo con Scrum, Azure Boards, Azure Repos, Git, control de versiones, code reviews y seguimiento continuo de tareas.",
          "Aplicación de principios SOLID, clean code, documentación técnica y buenas prácticas de desarrollo en componentes, interfaces y flujos de negocio.",
          "Implementación de autenticación profesional y manejo seguro de sesiones en flujos enterprise conectados.",
          "Colaboración con equipos internos y comunicación transversal para validar requerimientos, prioridades y entregables técnicos.",
        ],
        projects: [
          "Integración front-end con proveedores externos de asistencia vial y grúas para visualizar disponibilidad, estatus y datos operativos en tiempo real para usuarios finales.",
          "Refactorización y migración de módulos legacy hacia Next.js + TypeScript, desplegados en Azure mediante pipelines automatizados y ambientes controlados.",
          "Chatbot de apoyo para usuarios de pólizas de auto, orientado a respuestas rápidas, guía de flujos y consulta contextual dentro del portal.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
          "Redux",
          "REST APIs",
          "GraphQL",
          "Auth0",
          "Azure",
          "Git",
          "GitHub",
          "Vercel",
        ],
      },
      {
        id: 3,
        period: "Jul 2016 - Jun 2018",
        role: "Developer Front-End",
        company: "SEP",
        type: "Government Projects",
        summary:
          "Desarrollo y mantenimiento de sistemas administrativos y sitios web, fortaleciendo una base sólida en integración backend, maquetación responsiva y desarrollo web empresarial.",
        highlights: [
          "Mantenimiento y evolución de múltiples sistemas administrativos web.",
          "Desarrollo de Web APIs y soluciones para procesamiento de datos.",
          "Construcción de interfaces responsivas con HTML5, CSS3 y Bootstrap.",
          "Trabajo en equipos ágiles orientados a entregas estables y continuas.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "C#",
          ".NET",
          "REST APIs",
          "SQL Server",
          "Azure",
          "Git",
        ],
      },
      {
        id: 4,
        period: "Mar 2012 - May 2016",
        role: "Front-End Developer JR",
        company: "Metrix Networks",
        type: "Healthcare Systems",
        summary:
          "Diseño y desarrollo de interfaces web responsivas para sistemas de salud, con foco en compatibilidad cross-browser, experiencia de usuario y construcción de componentes visuales reutilizables.",
        highlights: [
          "Desarrollo de interfaces adaptables para múltiples dispositivos y resoluciones.",
          "Construcción de componentes visuales orientados a UX y consistencia de diseño.",
          "Maquetación con HTML, CSS, JavaScript y soporte cross-browser.",
          "Validación y compatibilidad en Chrome, Firefox, Safari y Edge.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Sass",
          "Bootstrap",
          "Material UI",
          "ECMAScript",
          "Ajax",
          "Jquery",
          "REST APIs",
        ],
      },
    ],
  },
  en: {
    badge: "PROFESSIONAL JOURNEY",
    titleStart: "Experience focused on",
    titleHighlight: "high-impact Front-End engineering",
    description:
      "8+ years building web applications with React.js, Next.js, and TypeScript for enterprise products. My focus is front-end architecture, UX/UI, performance, testing, secure authentication, modern API integration, and automated cloud delivery.",
    stackLabel: "Relevant stack",
    projectsLabel: "Highlighted projects",
    strengthsLabel: "Core strengths",
    metricsLabel: "Metrics & technical focus",
    panel: {
      overline: "FRONT-END ENGINEERING",
      heading:
        "Modern UI architecture, performance, code quality, and real product experience",
      cards: [
        {
          title: "UI/UX IMPACT",
          value: "Reusable",
          caption: "Clean, responsive and reusable interfaces",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "SCALABLE ARCHITECTURE",
          value: "Reliable",
          caption: "Maintainable code, testing and best practices",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "AGILE DELIVERY",
          value: "Agile",
          caption: "Scrum, CI/CD and product collaboration",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "Advanced React.js, Hooks, Context API, and functional components",
        "Next.js with SSR / SSG / ISR, Server Actions, and scalable architecture",
        "HTML5, CSS3, Flexbox, Grid, Material UI, and responsive design",
        "Testing, secure auth, REST / GraphQL integration, and cloud delivery",
      ],
    },
    metrics: [
      {
        label: "Realtime APIs",
        value: "REST / GraphQL",
        icon: "api",
        caption: "Real-time integrations and connected flows with third-party providers.",
      },
      {
        label: "CI/CD",
        value: "GitHub / Azure",
        icon: "delivery",
        caption: "Pipelines, YAML workflows, QA, Staging, and Main environments with automated delivery.",
      },
      {
        label: "Testing",
        value: "Jest + RTL",
        icon: "testing",
        caption: "Functional coverage, component stability, and continuous validation.",
      },
      {
        label: "Cloud Migration",
        value: "Azure / AWS",
        icon: "cloud",
        caption: "Legacy modernization and cloud deployment strategy across enterprise systems.",
      },
      {
        label: "Next.js",
        value: "SSR / SSG / ISR",
        icon: "performance",
        caption: "Hybrid rendering strategies focused on performance and scalable delivery.",
      },
      {
        label: "Auth",
        value: "JWT / OAuth2",
        icon: "security",
        caption: "Professional authentication, secure session flows, and protected enterprise access.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Jan 2025",
        role: "Senior Front-End Engineer",
        company: "Afore Principal",
        type: "Remote Freelancer · Fintech / Enterprise",
        summary:
          "Developed reusable front-end widgets and libraries with React.js, Next.js, TypeScript, and Material UI for integration into internal enterprise systems. Translated functional requirements and Figma designs into responsive, scalable, and maintainable components while collaborating with UX/UI, backend, and product teams under agile workflows.",
        highlights: [
          "Developed and maintained applications and widgets using advanced React.js, Next.js, Hooks, Context API, TypeScript, and functional components.",
          "Built reusable widgets consumed as libraries inside internal systems, following a modular distribution approach similar to CDN/import-based integration.",
          "Implemented responsive interfaces with HTML5, CSS3, Flexbox, Grid, and Material UI, ensuring accessibility and UX consistency.",
          "Translated requirements and Figma layouts into documented, scalable, and reusable front-end components.",
          "Integrated and consumed REST APIs and GraphQL services to surface real-time business data inside internal portals.",
          "Worked with modern Next.js architecture patterns including SSR, SSG, ISR, and scalable front-end delivery strategies.",
          "Implemented unit and integration testing with Jest, Cypress, and React Testing Library to improve delivery confidence.",
          "Applied front-end security practices using JWT and OAuth2, along with AWS Lambda integrations and connected backend services.",
          "Participated in code reviews, technical documentation, component standards, and engineering best practices.",
          "Worked daily with Scrum, Jira, refinements, standups, and cross-functional collaboration, including technical English communication when required.",
          "Configured CI/CD with GitHub Actions, YAML workflows, automated deployments, and QA / Staging / Main environments.",
          "Collaborated with Docker, Drupal, and cloud-based deployment flows in enterprise ecosystems.",
        ],
        projects: [
          "OpenAI-powered simulation and recommendation widget to guide financial scenarios and decision-making flows inside the portal.",
          "AI-assisted contextual help module for forms and internal workflows, providing dynamic guidance for users and advisors.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Material UI",
          "Redux",
          "Figma",
          "Jest",
          "Cypress",
          "Testing Library",
          "JWT",
          "OAuth2",
          "AWS Lambda",
          "GitHub Actions",
          "Git",
          "GitHub",
          "Docker",
          "Drupal",
          "REST APIs",
          "GraphQL",
          "AWS",
          "Vercel",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Jan 2022",
        role: "Senior Front-End Engineer",
        company: "AXA Assistance México",
        type: "Enterprise · Remote / Hybrid",
        summary:
          "Built and modernized enterprise front-end solutions with React.js, Next.js, and TypeScript for insurance products. Contributed to third-party API integrations, legacy refactoring, Azure migration, and reusable UI development with strong focus on performance, maintainability, and user experience.",
        highlights: [
          "Developed and maintained web applications with React.js, Next.js, TypeScript, and JavaScript ES6+ for assistance and insurance products.",
          "Implemented responsive and reusable user interfaces while collaborating with UX/UI, backend, and product teams to build new features.",
          "Integrated multiple REST APIs from external roadside assistance and towing providers so users could see real-time operational information from the front end.",
          "Consumed REST and GraphQL services with strong focus on performance, code quality, strong typing, and consistent user experience.",
          "Refactored legacy front-end systems into modern solutions using Next.js, TypeScript, and scalable interface patterns.",
          "Contributed to modern rendering and architectural strategies in Next.js to improve performance and maintainability.",
          "Migrated modules and applications to Azure through pipelines, controlled deployment flows, and progressive platform modernization.",
          "Worked with Scrum, Azure Boards, Azure Repos, Git, version control, code reviews, and continuous delivery practices.",
          "Applied SOLID principles, clean code, technical documentation, and development best practices across components and business workflows.",
          "Implemented professional authentication and secure session handling across connected enterprise flows.",
          "Collaborated across teams to validate requirements, priorities, and technical deliverables.",
        ],
        projects: [
          "Front-end integration with external roadside assistance and towing providers to display real-time availability, status, and service data for end users.",
          "Legacy module refactor and migration to Next.js + TypeScript, deployed to Azure through automated pipelines and controlled environments.",
          "Support chatbot for auto policy users, focused on quick answers, guided flows, and contextual assistance inside the platform.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
          "Redux",
          "REST APIs",
          "GraphQL",
          "Auth0",
          "Azure",
          "Git",
          "GitHub",
          "Vercel",
        ],
      },
      {
        id: 3,
        period: "Jul 2016 - Jun 2018",
        role: "Front-End Developer",
        company: "SEP",
        type: "Government Projects",
        summary:
          "Developed and maintained administrative systems and websites, building a strong foundation in backend integration, responsive layout implementation, and enterprise web development.",
        highlights: [
          "Maintained and evolved multiple administrative web systems.",
          "Built Web APIs and data-processing solutions.",
          "Created responsive interfaces with HTML5, CSS3, and Bootstrap.",
          "Worked in agile teams focused on stable continuous delivery.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "C#",
          ".NET",
          "REST APIs",
          "SQL Server",
          "Azure",
          "Git",
        ],
      },
      {
        id: 4,
        period: "Mar 2012 - May 2016",
        role: "Junior Front-End Developer",
        company: "Metrix Networks",
        type: "Healthcare Systems",
        summary:
          "Designed and developed responsive web interfaces for healthcare systems, with strong focus on cross-browser compatibility, UX, and reusable visual components.",
        highlights: [
          "Built adaptive interfaces for multiple devices and screen sizes.",
          "Created visual components focused on UX and design consistency.",
          "Developed layouts with HTML, CSS, JavaScript, and cross-browser support.",
          "Validated and supported Chrome, Firefox, Safari, and Edge.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Sass",
          "Bootstrap",
          "Material UI",
          "Firebase",
          "REST APIs",
        ],
      },
    ],
  },
};

function getTechIcon(tech: string) {
  const iconClass = "h-[0.9rem] w-[0.9rem] shrink-0";

  switch (tech) {
    case "React":
      return <SiReact className={iconClass} />;
    case "Next.js":
      return <SiNextdotjs className={iconClass} />;
    case "TypeScript":
      return <SiTypescript className={iconClass} />;
    case "JavaScript":
      return <SiJavascript className={iconClass} />;
    case "Tailwind CSS":
      return <SiTailwindcss className={iconClass} />;
    case "Material UI":
      return <SiMui className={iconClass} />;
    case "Redux":
      return <SiRedux className={iconClass} />;
    case "REST APIs":
      return <TbApi className={iconClass} />;
    case "GraphQL":
      return <SiGraphql className={iconClass} />;
    case "Auth0":
      return <SiAuth0 className={iconClass} />;
    case "Azure":
      return <SiAzuredevops className={iconClass} />;
    case "AWS":
      return <SiAwslambda className={iconClass} />;
    case "AWS Lambda":
      return <SiAwslambda className={iconClass} />;
    case "HTML5":
      return <SiHtml5 className={iconClass} />;
    case "CSS3":
      return <SiCss3 className={iconClass} />;
    case "Bootstrap":
      return <SiBootstrap className={iconClass} />;
    case "C#":
      return <TbBrandCSharp className={iconClass} />;
    case ".NET":
      return <VscSymbolMethod className={iconClass} />;
    case "SQL Server":
      return <BsWindowStack className={iconClass} />;
    case "Git":
      return <SiGit className={iconClass} />;
    case "GitHub":
      return <SiGithub className={iconClass} />;
    case "GitHub Actions":
      return <SiGithub className={iconClass} />;
    case "Sass":
      return <SiSass className={iconClass} />;
    case "Firebase":
      return <SiFirebase className={iconClass} />;
    case "Figma":
      return <SiFigma className={iconClass} />;
    case "Jest":
      return <SiJest className={iconClass} />;
    case "Testing Library":
      return <HiOutlineSparkles className={iconClass} />;
    case "JWT":
      return <HiOutlineSparkles className={iconClass} />;
    case "OAuth2":
      return <SiAuth0 className={iconClass} />;
    case "Docker":
      return <SiDocker className={iconClass} />;
    case "Drupal":
      return <SiDrupal className={iconClass} />;
    case "OpenAI":
      return <SiOpenai className={iconClass} />;
    case "Vercel":
      return <SiVercel className={iconClass} />;
    default:
      return <BsWindowStack className={iconClass} />;
  }
}

function getMetricIcon(icon: string) {
  const className = "h-[1rem] w-[1rem]";

  switch (icon) {
    case "api":
      return <BsDatabaseGear className={className} />;
    case "delivery":
      return <BsLightningCharge className={className} />;
    case "testing":
      return <BsCheckCircle className={className} />;
    case "cloud":
      return <BsCloudArrowUp className={className} />;
    case "performance":
      return <BsCodeSlash className={className} />;
    case "security":
      return <BsShieldCheck className={className} />;
    default:
      return <BsGraphUpArrow className={className} />;
  }
}

function Experience() {
  const { language } = useLanguage();
  const content =
    language === "es" ? experienceContent.es : experienceContent.en;

  return (
    <section
      id="experience"
      className="relative z-50 my-16 overflow-hidden border-t border-[var(--color-border)] pt-14 lg:my-24 lg:pt-20"
    >
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 max-w-none -translate-x-1/2 opacity-70"
      />

      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[8%] top-[10%] h-44 w-44 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
        <div className="absolute right-[10%] top-[14%] h-64 w-64 rounded-full bg-[var(--color-brand)]/16 blur-3xl" />
        <div className="absolute bottom-[10%] left-[35%] h-56 w-56 rounded-full bg-[var(--color-brand-strong)]/10 blur-3xl" />
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <span className="hidden h-[2px] w-16 bg-[linear-gradient(90deg,transparent,#2a2252)] sm:block" />
          <span className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(26,20,67,0.88)_0%,rgba(13,17,46,0.92)_100%)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(15,10,40,0.28)] sm:text-base">
            {content.badge}
          </span>
          <span className="hidden h-[2px] w-16 bg-[linear-gradient(90deg,#2a2252,transparent)] sm:block" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
        <div className="order-2 lg:order-1">
          <div className="sticky top-24">
            <div className="max-w-xl">
              <h2 className="text-[2.1rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[2.7rem] lg:text-[3.2rem]">
                <span className="text-white">{content.titleStart} </span>
                <span className="bg-[linear-gradient(90deg,#ffffff_0%,#d8b4fe_20%,#60a5fa_48%,#67e8f9_72%,#f472b6_100%)] bg-clip-text text-transparent">
                  {content.titleHighlight}
                </span>
              </h2>

              <p className="mt-6 text-[1rem] leading-[1.95] text-[rgba(235,240,255,0.82)] sm:text-[1.03rem] lg:text-[1.04rem]">
                {content.description}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.74)_0%,rgba(7,14,38,0.96)_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="relative p-5 sm:p-6 lg:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,240,199,0.07),transparent_24%),radial-gradient(circle_at_85%_18%,rgba(123,44,255,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,60,172,0.10),transparent_26%)]" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#20f0c7]">
                    <BsGraphUpArrow size={12} />
                    <span>{content.panel.overline}</span>
                  </div>

                  <h3 className="mt-5 max-w-md text-[1.12rem] font-semibold leading-[1.45] text-white sm:text-[1.3rem]">
                    {content.panel.heading}
                  </h3>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {content.panel.cards.map((card) => (
                      <div
                        key={card.title}
                        className={`min-h-[220px] rounded-[1.45rem] border bg-[linear-gradient(180deg,rgba(10,18,48,0.88)_0%,rgba(8,14,36,0.96)_100%)] px-4 py-5 backdrop-blur-sm ${card.borderClass}`}
                      >
                        <p
                          className={`text-center text-[0.74rem] font-semibold uppercase tracking-[0.18em] sm:text-[0.8rem] ${card.titleClass}`}
                        >
                          {card.title}
                        </p>

                        <p className="mt-4 text-center text-[0.96rem] font-bold text-white sm:text-[1rem]">
                          {card.value}
                        </p>

                        <p className="mt-4 text-center text-[0.83rem] leading-7 text-white/68 sm:text-[0.88rem]">
                          {card.caption}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                      <HiOutlineSparkles size={14} />
                      <span>{content.strengthsLabel}</span>
                    </div>

                    <div className="grid gap-3">
                      {content.panel.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-[0.35rem] h-2 w-2 rounded-full bg-[#20f0c7]" />
                          <p className="text-[0.88rem] leading-7 text-white/75">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-4 flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/48">
                      <BsGraphUpArrow size={13} />
                      <span>{content.metricsLabel}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {content.metrics.map((metric, index) => (
                        <div
                          key={`${metric.label}-${index}`}
                          className="rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] p-4 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:bg-white/[0.04]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#7dd3fc]">
                              {getMetricIcon(metric.icon)}
                            </div>

                            <div>
                              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                                {metric.label}
                              </p>
                              <p className="mt-1 text-[0.98rem] font-semibold text-white">
                                {metric.value}
                              </p>
                              <p className="mt-2 text-[0.82rem] leading-6 text-white/62">
                                {metric.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#20f0c7] shadow-[0_0_14px_rgba(32,240,199,0.55)]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#b14cff] shadow-[0_0_14px_rgba(177,76,255,0.55)]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff3cac] shadow-[0_0_14px_rgba(255,60,172,0.55)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative ml-3 border-l border-white/10 pl-0 sm:ml-4">
            {content.roles.map((item, index) => (
              <article
                key={item.id}
                className={`relative mb-6 ml-6 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,48,0.88)_0%,rgba(8,14,36,0.96)_100%)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/30 hover:shadow-[0_22px_50px_rgba(123,44,255,0.12)] sm:p-6 ${
                  index !== content.roles.length - 1 ? "" : "mb-0"
                }`}
              >
                <span className="absolute -left-[2.35rem] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-brand)]/40 bg-[linear-gradient(180deg,rgba(123,44,255,0.95)_0%,rgba(255,60,172,0.88)_100%)] shadow-[0_0_0_6px_rgba(7,12,32,1)]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>

                <div className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-[radial-gradient(circle_at_top_right,rgba(123,44,255,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(32,240,199,0.05),transparent_24%)]" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#9b6dff] shadow-[0_8px_20px_rgba(123,44,255,0.12)]">
                        <BsPersonWorkspace size={24} />
                      </div>

                      <div>
                        <h3 className="text-[1.05rem] font-semibold uppercase tracking-[0.01em] text-white sm:text-[1.22rem]">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-[0.95rem] font-medium text-white/82 sm:text-[1rem]">
                          {item.company}
                        </p>
                        <p className="mt-1 text-[0.82rem] uppercase tracking-[0.14em] text-white/40">
                          {item.type}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#20f0c7]/18 bg-[#20f0c7]/[0.06] px-3 py-1.5 text-[0.78rem] font-medium text-[#20f0c7] sm:text-[0.84rem]">
                      <BsCalendar3 size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-[0.92rem] leading-8 text-[rgba(235,240,255,0.78)] sm:text-[0.97rem]">
                    {item.summary}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3"
                      >
                        <span className="mt-0.5 text-[#20f0c7]">
                          <HiOutlineSparkles size={16} />
                        </span>
                        <p className="text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  {item.projects.length > 0 && (
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                        <HiOutlineSparkles size={14} />
                        <span>{content.projectsLabel}</span>
                      </div>

                      <div className="grid gap-3">
                        {item.projects.map((project, projectIndex) => (
                          <div
                            key={project}
                            className="rounded-2xl border border-[#20f0c7]/10 bg-[linear-gradient(180deg,rgba(32,240,199,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-0.5 text-[#7dd3fc]">
                                {projectIndex < 2 &&
                                item.company.includes("Principal") ? (
                                  <SiOpenai size={16} />
                                ) : (
                                  <HiOutlineSparkles size={16} />
                                )}
                              </span>
                              <p className="text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
                                {project}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <div className="mb-3 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                      <BsArrowUpRight size={13} />
                      <span>{content.stackLabel}</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)] px-3 py-2 text-[0.77rem] font-medium tracking-[0.02em] text-white/80 transition-all duration-300 hover:border-[var(--color-brand)]/30 hover:text-white"
                        >
                          <span className="text-white/70">{getTechIcon(tech)}</span>
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;