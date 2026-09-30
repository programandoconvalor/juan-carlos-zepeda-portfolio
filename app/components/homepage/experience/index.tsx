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
    titleStart: "Experiencia profesional en",
    titleHighlight: "desarrollo Front-End",
    description:
      "Más de 8 años de experiencia en desarrollo Front-End, con React, Next.js, TypeScript y Angular. Experiencia en aplicaciones web empresariales, arquitectura escalable, componentes reutilizables, accesibilidad y colaboración en equipos Agile (Scrum).",
    stackLabel: "Tecnologías relevantes",
    projectsLabel: "Contribuciones profesionales",
    strengthsLabel: "Áreas de experiencia",
    metricsLabel: "Enfoque técnico",
    panel: {
      overline: "FRONT-END ENGINEERING",
      heading:
        "Arquitectura UI moderna, performance, calidad de código y experiencia real de producto",
      cards: [
        {
          title: "COMPONENTES REUTILIZABLES",
          value: "Reusable",
          caption: "Componentes reutilizables y bibliotecas de componentes",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "ARQUITECTURA FRONT-END",
          value: "Reliable",
          caption: "Aplicaciones escalables y mantenibles",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "COLABORACIÓN ÁGIL",
          value: "Agile",
          caption: "Colaboración con UX/UI, Backend, QA, DevOps y Product Owners",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "React, Next.js, TypeScript, Angular y RxJS",
        "Arquitectura Front-End, Design Systems y componentes reutilizables",
        "SSR / SSG / ISR, performance, accesibilidad y Responsive Design",
        "Testing con Jest, React Testing Library y Cypress",
      ],
    },
    metrics: [
      {
        label: "APIs",
        value: "REST / GraphQL",
        icon: "api",
        caption: "REST APIs, GraphQL y Shopify Storefront API.",
      },
      {
        label: "CI/CD",
        value: "Azure DevOps / GitHub Actions",
        icon: "delivery",
        caption: "CI/CD Pipelines, GitHub Actions y Docker.",
      },
      {
        label: "Testing",
        value: "Jest / RTL / Cypress",
        icon: "testing",
        caption: "Jest, React Testing Library y Cypress.",
      },
      {
        label: "Cloud & DevOps",
        value: "Azure / Vercel",
        icon: "cloud",
        caption: "Azure DevOps, CI/CD Pipelines y Vercel.",
      },
      {
        label: "Next.js",
        value: "SSR / SSG / ISR",
        icon: "performance",
        caption: "Server-side rendering, Static Site Generation e Incremental Static Regeneration.",
      },
      {
        label: "AI-Assisted Development",
        value: "OpenAI / Copilot",
        icon: "security",
        caption: "GitHub Copilot, Claude Code, OpenCode e integraciones con OpenAI.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Apr 2026",
        role: "Senior Front-End Engineer",
        company: "Afore Principal",
        type: "",
        summary:
          "Desarrollo de aplicaciones web empresariales del sector financiero con React, Next.js, TypeScript y Angular, contribuyendo a una arquitectura Front-End escalable, componentes reutilizables y estándares de desarrollo.",
        highlights: [
          "Desarrollo de una plataforma e-commerce para la venta y contratación de productos financieros, con catálogos reutilizables, flujos de cotización, formularios dinámicos, búsqueda, filtrado, ordenamiento y comparación; incluye carrito de compras para fondos de inversión y selección de pagos con Debit Card, Direct Debit y SPEI.",
          "Integración de REST APIs, Shopify Storefront API, GraphQL, servicios con OpenAI y servicios de terceros para verificación de identidad.",
          "Modernización de aplicaciones legacy con Angular, TypeScript, RxJS y Reactive Forms, además de soluciones con React, Next.js, jQuery, AJAX, HTML y CSS; uso de SSR, SSG, ISR y Lazy Loading.",
          "Construcción de arquitectura Front-End escalable, componentes reutilizables, Design Systems, Storybook, Design Tokens y Theming; uso de Redux Toolkit, Context API y React Hook Form.",
          "Integración con Drupal Headless CMS mediante JSON:API; uso de Dexie e IndexedDB, Microfrontends y Module Federation.",
          "Desarrollo de interfaces Responsive Design con HTML, CSS, Bootstrap, Sass (SCSS) y Vanilla Extract, aplicando Lazy Loading, Code Splitting, Core Web Vitals y SEO.",
          "Aplicación de WCAG 2.1, Semantic HTML y ARIA; uso de Cookies, Session Storage, Local Storage e IndexedDB para persistencia del lado del cliente.",
          "Pruebas con Jest, React Testing Library y Cypress; despliegues y flujos CI/CD con Azure DevOps, GitHub Actions, Docker, Vercel y Azure.",
          "Liderazgo de funcionalidades Front-End desde el análisis de requerimientos hasta producción; definición de estándares, Code Reviews y mentoring, con equipos de UX/UI, Backend, QA, DevOps y Product Owners en Agile / Scrum.",
          "Uso de AI-Assisted Development, GitHub Copilot, Claude Code, OpenCode y tecnologías de OpenAI.",
          "Desarrollo de integraciones con Node.js, Express.js y Next.js API Routes; contribución a servicios Backend for Frontend (BFF) para aplicaciones React / Next.js y REST APIs empresariales.",
        ],
        projects: [],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Angular",
          "RxJS",
          "Shopify Storefront API",
          "GraphQL",
          "REST APIs",
          "OpenAI",
          "Redux Toolkit",
          "Context API",
          "React Hook Form",
          "Drupal Headless CMS",
          "JSON:API",
          "Dexie",
          "IndexedDB",
          "Module Federation",
          "Jest",
          "React Testing Library",
          "Cypress",
          "Azure DevOps",
          "GitHub Actions",
          "Docker",
          "Vercel",
          "Azure",
          "GitHub Copilot",
          "Claude Code",
          "OpenCode",
          "Node.js",
          "Express.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Figma",
          "Storybook",
          "Bootstrap",
          "Sass (SCSS)",
          "Vanilla Extract",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Jan 2022",
        role: "Senior Front-End Developer",
        company: "AXA Assistance",
        type: "",
        summary:
          "Desarrollo Front-End con ASP.NET MVC y tecnologías web, además de aplicaciones con React, Next.js, TypeScript y Angular.",
        highlights: [
          "Modernización de plataformas empresariales legacy con ASP.NET MVC, HTML5, CSS3, JavaScript, jQuery y Bootstrap hacia arquitecturas Front-End con React, Next.js, TypeScript y JavaScript ES6+.",
          "Construcción de interfaces con HTML5, CSS3, jQuery, Bootstrap, Material UI, Sass (SCSS), Tailwind CSS y diseños de Figma.",
          "Implementación de formularios con React Hook Form y consumo de REST APIs mediante Axios y Fetch API.",
          "Configuración de React Router, Dynamic Routing, Protected Routes, Lazy Loading y Code Splitting; refactorización de componentes para el rendimiento y la mantenibilidad.",
          "Desarrollo con Angular, RxJS, NgRx, Angular Router, Angular Services y Reactive Forms.",
          "Pruebas con React Testing Library y Cypress; aplicación de WCAG 2.1.",
          "Uso de Git, Webpack, Azure DevOps, GitHub Actions, Azure, AWS y flujos CI/CD; gestión de estado con Zustand.",
        ],
        projects: [],
        stack: [
          "ASP.NET MVC",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript ES6+",
          "HTML5",
          "CSS3",
          "jQuery",
          "Bootstrap",
          "Material UI",
          "Sass (SCSS)",
          "Tailwind CSS",
          "React Hook Form",
          "Axios",
          "Fetch API",
          "React Router",
          "Angular",
          "RxJS",
          "NgRx",
          "Zustand",
          "REST APIs",
          "React Testing Library",
          "Cypress",
          "Webpack",
          "GitHub Actions",
          "Azure DevOps",
          "Azure",
          "AWS",
          "Git",
        ],
      },
      {
        id: 3,
        period: "Sep 2016 - Jun 2018",
        role: "Fron End",
        company: "Fron End",
        type: "Entornos educativos y administrativos",
        summary:
          "Desarrollo Front-End para entornos educativos y administrativos con tecnologías web, servicios Back-End y bases de datos.",
        highlights: [
          "Desarrollo de interfaces con HTML5, CSS3, Sass (SCSS), JavaScript, jQuery, AJAX y Bootstrap, con Responsive Web Design, compatibilidad cross-browser, componentes reutilizables, Semantic HTML y accesibilidad.",
          "Implementación de formularios dinámicos con validación del lado del cliente y del servidor.",
          "Integración de REST APIs y servicios Back-End; desarrollo de flujos de autenticación y gestión de sesiones, Cookies y caching.",
          "Trabajo con PHP, MySQL y Firebase.",
          "Uso de Jira, Git y Agile development durante el SDLC; pruebas funcionales, debugging, refactoring, continuous improvement y código mantenible.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass (SCSS)",
          "jQuery",
          "AJAX",
          "PHP",
          "MySQL",
          "Firebase",
          "Bootstrap",
          "REST APIs",
          "Jira",
          "Git",
        ],
      },
    ],
  },
  en: {
    badge: "PROFESSIONAL JOURNEY",
    titleStart: "Professional experience in",
    titleHighlight: "Front-End engineering",
    description:
      "Over 8 years of Front-End development experience with React, Next.js, TypeScript, and Angular. Experienced in enterprise web applications, scalable architecture, reusable components, accessibility, and collaboration in Agile (Scrum) teams.",
    stackLabel: "Relevant technologies",
    projectsLabel: "Professional contributions",
    strengthsLabel: "Areas of experience",
    metricsLabel: "Technical focus",
    panel: {
      overline: "FRONT-END ENGINEERING",
      heading:
        "Modern UI architecture, performance, code quality, and real product experience",
      cards: [
        {
          title: "REUSABLE COMPONENTS",
          value: "Reusable",
          caption: "Reusable components and component libraries",
          borderClass:
            "border-[rgba(32,240,199,0.58)] shadow-[0_0_0_1px_rgba(32,240,199,0.12)]",
          titleClass: "text-[#20f0c7]",
        },
        {
          title: "FRONT-END ARCHITECTURE",
          value: "Reliable",
          caption: "Scalable and maintainable applications",
          borderClass:
            "border-[rgba(123,44,255,0.58)] shadow-[0_0_0_1px_rgba(123,44,255,0.12)]",
          titleClass: "text-[#52c7ff]",
        },
        {
          title: "AGILE COLLABORATION",
          value: "Agile",
          caption: "Collaboration with UX/UI, Backend, QA, DevOps, and Product Owners",
          borderClass:
            "border-[rgba(255,60,172,0.58)] shadow-[0_0_0_1px_rgba(255,60,172,0.12)]",
          titleClass: "text-[#ffd84d]",
        },
      ],
      bullets: [
        "React, Next.js, TypeScript, Angular, and RxJS",
        "Front-End architecture, Design Systems, and reusable components",
        "SSR / SSG / ISR, performance, accessibility, and Responsive Design",
        "Testing with Jest, React Testing Library, and Cypress",
      ],
    },
    metrics: [
      {
        label: "APIs",
        value: "REST / GraphQL",
        icon: "api",
        caption: "REST APIs, GraphQL, and Shopify Storefront API.",
      },
      {
        label: "CI/CD",
        value: "Azure DevOps / GitHub Actions",
        icon: "delivery",
        caption: "CI/CD Pipelines, GitHub Actions, and Docker.",
      },
      {
        label: "Testing",
        value: "Jest / RTL / Cypress",
        icon: "testing",
        caption: "Jest, React Testing Library, and Cypress.",
      },
      {
        label: "Cloud & DevOps",
        value: "Azure / Vercel",
        icon: "cloud",
        caption: "Azure DevOps, CI/CD Pipelines, and Vercel.",
      },
      {
        label: "Next.js",
        value: "SSR / SSG / ISR",
        icon: "performance",
        caption: "Server-side rendering, Static Site Generation, and Incremental Static Regeneration.",
      },
      {
        label: "AI-Assisted Development",
        value: "OpenAI / Copilot",
        icon: "security",
        caption: "GitHub Copilot, Claude Code, OpenCode, and OpenAI integrations.",
      },
    ],
    roles: [
      {
        id: 1,
        period: "Feb 2022 - Apr 2026",
        role: "Senior Front-End Engineer",
        company: "Afore Principal",
        type: "",
        summary:
          "Developed enterprise financial-sector web applications with React, Next.js, TypeScript, and Angular, contributing to scalable Front-End architecture, reusable components, and development standards.",
        highlights: [
          "Developed an e-commerce platform for selling and contracting financial products, with reusable catalogs, quotation workflows, dynamic forms, search, filtering, sorting and comparison; includes a shopping cart for investment funds and payment selections for Debit Card, Direct Debit, and SPEI.",
          "Integrated REST APIs, Shopify Storefront API, GraphQL, OpenAI-powered services, and third-party identity verification services.",
          "Modernized legacy applications with Angular, TypeScript, RxJS, and Reactive Forms, alongside React, Next.js, jQuery, AJAX, HTML, and CSS solutions; used SSR, SSG, ISR, and Lazy Loading.",
          "Built scalable Front-End architecture, reusable components, Design Systems, Storybook, Design Tokens, and Theming; used Redux Toolkit, Context API, and React Hook Form.",
          "Integrated Drupal Headless CMS through JSON:API; used Dexie and IndexedDB, Microfrontends, and Module Federation.",
          "Developed Responsive Design interfaces with HTML, CSS, Bootstrap, Sass (SCSS), and Vanilla Extract, applying Lazy Loading, Code Splitting, Core Web Vitals, and SEO.",
          "Applied WCAG 2.1, Semantic HTML, and ARIA; used Cookies, Session Storage, Local Storage, and IndexedDB for client-side persistence.",
          "Tested with Jest, React Testing Library, and Cypress; worked with Azure DevOps, GitHub Actions, Docker, CI/CD, Vercel, and Azure.",
          "Led Front-End features from requirements analysis through production; defined development standards and participated in Code Reviews and mentoring with UX/UI, Backend, QA, DevOps, and Product Owner teams in Agile / Scrum.",
          "Used AI-Assisted Development, GitHub Copilot, Claude Code, OpenCode, and OpenAI technologies.",
          "Developed integrations with Node.js, Express.js, and Next.js API Routes; contributed to Backend for Frontend (BFF) services for React / Next.js applications and enterprise REST APIs.",
        ],
        projects: [],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Angular",
          "RxJS",
          "Shopify Storefront API",
          "GraphQL",
          "REST APIs",
          "OpenAI",
          "Redux Toolkit",
          "Context API",
          "React Hook Form",
          "Drupal Headless CMS",
          "JSON:API",
          "Dexie",
          "IndexedDB",
          "Module Federation",
          "Jest",
          "React Testing Library",
          "Cypress",
          "Azure DevOps",
          "GitHub Actions",
          "Docker",
          "Vercel",
          "Azure",
          "GitHub Copilot",
          "Claude Code",
          "OpenCode",
          "Node.js",
          "Express.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Figma",
          "Storybook",
          "Bootstrap",
          "Sass (SCSS)",
          "Vanilla Extract",
        ],
      },
      {
        id: 2,
        period: "Jul 2018 - Jan 2022",
        role: "Senior Front-End Developer",
        company: "AXA Assistance",
        type: "",
        summary:
          "Modernized enterprise applications by migrating legacy platforms built with ASP.NET MVC, HTML5, CSS3, JavaScript, jQuery, and Bootstrap to React, Next.js, TypeScript, and JavaScript ES6+ Front-End architectures.",
        highlights: [
          "Developed single-page applications with React, Next.js, TypeScript, and JavaScript ES6+, using component-based architecture and reusable components.",
          "Built interfaces with HTML5, CSS3, jQuery, Bootstrap, Material UI, Sass (SCSS), Tailwind CSS, and Figma designs.",
          "Implemented forms with React Hook Form and consumed REST APIs using Axios and Fetch API.",
          "Configured React Router, Dynamic Routing, Protected Routes, Lazy Loading, and Code Splitting.",
          "Developed with Angular, RxJS, NgRx, Angular Router, Angular Services, and Reactive Forms.",
          "Optimized application performance through Code Splitting, Lazy Loading, and component refactoring; tested with React Testing Library and Cypress, applied WCAG 2.1, and collaborated with UX/UI, Backend, and QA on accessible, responsive interfaces and technical reviews.",
          "Used Git, Webpack, Azure DevOps, GitHub Actions, Azure, AWS, CI/CD, and Zustand for state management.",
        ],
        projects: [],
        stack: [
          "ASP.NET MVC",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript ES6+",
          "HTML5",
          "CSS3",
          "jQuery",
          "Bootstrap",
          "Material UI",
          "Sass (SCSS)",
          "Tailwind CSS",
          "React Hook Form",
          "Axios",
          "Fetch API",
          "React Router",
          "Angular",
          "RxJS",
          "NgRx",
          "Zustand",
          "REST APIs",
          "React Testing Library",
          "Cypress",
          "Webpack",
          "GitHub Actions",
          "Azure DevOps",
          "Azure",
          "AWS",
          "Git",
        ],
      },
      {
        id: 3,
        period: "Sep 2016 - Jun 2018",
        role: "Fron End",
        company: "Fron End",
        type: "Educational and administrative environments",
        summary:
          "Front-End development for educational and administrative environments using web technologies, Back-End services, and databases.",
        highlights: [
          "Built interfaces with HTML5, CSS3, Sass (SCSS), JavaScript, jQuery, AJAX, and Bootstrap, using Responsive Web Design, cross-browser compatibility, reusable UI components, Semantic HTML, and accessibility.",
          "Implemented dynamic forms with client-side and server-side validation.",
          "Integrated REST APIs and Back-End services; worked on authentication workflows, session management, Cookies, and caching.",
          "Worked with PHP, MySQL, and Firebase.",
          "Used Jira and Git in Agile development across the SDLC, including functional testing, debugging, refactoring, continuous improvement, and maintainable code.",
        ],
        projects: [],
        stack: [
          "JavaScript",
          "HTML5",
          "CSS3",
          "Sass (SCSS)",
          "jQuery",
          "AJAX",
          "PHP",
          "MySQL",
          "Firebase",
          "Bootstrap",
          "REST APIs",
          "Jira",
          "Git",
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
    case "Azure":
      return <SiAzuredevops className={iconClass} />;
    case "AWS":
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

              <p className="mt-6 text-justify text-[1rem] leading-[1.95] text-[rgba(235,240,255,0.82)] sm:text-[1.03rem] lg:text-[1.04rem]">
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
                              <p className={`mt-2 text-[0.82rem] leading-6 text-white/62 ${metric.caption.length >= 80 ? "text-justify" : ""}`}>
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
                        {item.type && (
                          <p className="mt-1 text-[0.82rem] uppercase tracking-[0.14em] text-white/40">
                            {item.type}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[#20f0c7]/18 bg-[#20f0c7]/[0.06] px-3 py-1.5 text-[0.78rem] font-medium text-[#20f0c7] sm:text-[0.84rem]">
                      <BsCalendar3 size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-justify text-[0.92rem] leading-8 text-[rgba(235,240,255,0.78)] sm:text-[0.97rem]">
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
                        <p className="text-justify text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
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
                              <p className="text-justify text-[0.88rem] leading-7 text-white/72 sm:text-[0.94rem]">
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