"use client";

import React, { useMemo, useState } from "react";
import {
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaFigma,
  FaRobot,
  FaCodeBranch,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiOpenai,
  SiFirebase,
  SiGithub,
  SiVercel,
  SiJest,
  SiCypress,
  SiStorybook,
  SiRedux,
  SiJquery,
  SiSass,
  SiBootstrap,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiGithubactions,
  SiAxios,
  SiDrupal,
  SiShopify,
} from "react-icons/si";

import { useLanguage } from "../../../context/language-context";

type Lang = "es" | "en";

type Category =
  | "all"
  | "frontend"
  | "backend"
  | "cloudDevops"
  | "databases"
  | "aiAutomation"
  | "architecture"
  | "tools";

type Skill = {
  key: string;
  name: {
    es: string;
    en: string;
  };
  icon: React.ReactNode;
  category: Exclude<Category, "all">;
};

const content = {
  es: {
    badge: "Habilidades",
    title: "Stack Tecnológico",
    subtitle: "Tecnologías, herramientas y metodologías profesionales.",
    categoryLabel: "Categoría",
    filters: {
      all: "Todos",
      frontend: "Frontend",
      backend: "Backend",
      cloudDevops: "Cloud & DevOps",
      databases: "Bases de Datos",
      aiAutomation: "IA y Automatización",
      architecture: "Arquitectura y Metodologías",
      tools: "Herramientas",
    },
    categoryNames: {
      frontend: "Frontend",
      backend: "Backend",
      cloudDevops: "Cloud & DevOps",
      databases: "Bases de Datos",
      aiAutomation: "IA y Automatización",
      architecture: "Arquitectura y Metodologías",
      tools: "Herramientas",
    },
  },
  en: {
    badge: "Skills",
    title: "Technology Stack",
    subtitle: "Professional technologies, tools, and methodologies.",
    categoryLabel: "Category",
    filters: {
      all: "All",
      frontend: "Frontend",
      backend: "Backend",
      cloudDevops: "Cloud & DevOps",
      databases: "Databases",
      aiAutomation: "AI & Automation",
      architecture: "Architecture & Methodologies",
      tools: "Tools",
    },
    categoryNames: {
      frontend: "Frontend",
      backend: "Backend",
      cloudDevops: "Cloud & DevOps",
      databases: "Databases",
      aiAutomation: "AI & Automation",
      architecture: "Architecture & Methodologies",
      tools: "Tools",
    },
  },
} as const;

const skills: Skill[] = [
  { key: "reactjs", name: { es: "React.js", en: "React.js" }, icon: <FaReact />, category: "frontend" },
  { key: "nextjs", name: { es: "Next.js", en: "Next.js" }, icon: <SiNextdotjs />, category: "frontend" },
  { key: "typescript", name: { es: "TypeScript", en: "TypeScript" }, icon: <SiTypescript />, category: "frontend" },
  { key: "javascript", name: { es: "JavaScript (ES6+)", en: "JavaScript (ES6+)" }, icon: <SiJavascript />, category: "frontend" },
  { key: "angular", name: { es: "Angular", en: "Angular" }, icon: <FaAngular />, category: "frontend" },
  { key: "rxjs", name: { es: "RxJS", en: "RxJS" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "react-router", name: { es: "React Router", en: "React Router" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "redux-toolkit", name: { es: "Redux Toolkit", en: "Redux Toolkit" }, icon: <SiRedux />, category: "frontend" },
  { key: "context-api", name: { es: "Context API", en: "Context API" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "react-hook-form", name: { es: "React Hook Form", en: "React Hook Form" }, icon: <FaReact />, category: "frontend" },
  { key: "html5", name: { es: "HTML5", en: "HTML5" }, icon: <FaHtml5 />, category: "frontend" },
  { key: "css3", name: { es: "CSS3", en: "CSS3" }, icon: <FaCss3Alt />, category: "frontend" },
  { key: "sass", name: { es: "Sass (SCSS)", en: "Sass (SCSS)" }, icon: <SiSass />, category: "frontend" },
  { key: "vanilla-extract", name: { es: "Vanilla Extract", en: "Vanilla Extract" }, icon: <FaTools />, category: "frontend" },
  { key: "tailwind", name: { es: "Tailwind CSS", en: "Tailwind CSS" }, icon: <SiTailwindcss />, category: "frontend" },
  { key: "mui", name: { es: "Material UI (MUI)", en: "Material UI (MUI)" }, icon: <FaFigma />, category: "frontend" },
  { key: "bootstrap", name: { es: "Bootstrap", en: "Bootstrap" }, icon: <SiBootstrap />, category: "frontend" },
  { key: "storybook", name: { es: "Storybook", en: "Storybook" }, icon: <SiStorybook />, category: "frontend" },
  { key: "i18next", name: { es: "i18next", en: "i18next" }, icon: <FaTools />, category: "frontend" },
  { key: "responsive-web-design", name: { es: "Diseño Web Responsivo", en: "Responsive Web Design" }, icon: <FaFigma />, category: "frontend" },
  { key: "wcag", name: { es: "WCAG 2.1", en: "WCAG 2.1" }, icon: <FaTools />, category: "frontend" },
  { key: "aria", name: { es: "ARIA", en: "ARIA" }, icon: <FaTools />, category: "frontend" },
  { key: "core-web-vitals", name: { es: "Core Web Vitals", en: "Core Web Vitals" }, icon: <FaTools />, category: "frontend" },
  { key: "seo", name: { es: "SEO", en: "SEO" }, icon: <FaTools />, category: "frontend" },
  { key: "spas", name: { es: "SPAs", en: "SPAs" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "jest", name: { es: "Jest", en: "Jest" }, icon: <SiJest />, category: "frontend" },
  { key: "react-testing-library", name: { es: "React Testing Library", en: "React Testing Library" }, icon: <FaReact />, category: "frontend" },
  { key: "cypress", name: { es: "Cypress", en: "Cypress" }, icon: <SiCypress />, category: "frontend" },
  { key: "lazy-loading", name: { es: "Carga Diferida (Lazy Loading)", en: "Lazy Loading" }, icon: <FaTools />, category: "frontend" },
  { key: "code-splitting", name: { es: "Code Splitting", en: "Code Splitting" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "module-federation", name: { es: "Module Federation", en: "Module Federation" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "drupal-headless-cms", name: { es: "Drupal Headless CMS", en: "Drupal Headless CMS" }, icon: <SiDrupal />, category: "frontend" },
  { key: "webpack", name: { es: "Webpack", en: "Webpack" }, icon: <SiWebpack />, category: "frontend" },
  { key: "vite", name: { es: "Vite", en: "Vite" }, icon: <SiVite />, category: "frontend" },
  { key: "fetch-api", name: { es: "Fetch API", en: "Fetch API" }, icon: <FaCodeBranch />, category: "frontend" },
  { key: "axios", name: { es: "Axios", en: "Axios" }, icon: <SiAxios />, category: "frontend" },
  { key: "jquery", name: { es: "jQuery", en: "jQuery" }, icon: <SiJquery />, category: "frontend" },

  { key: "nodejs", name: { es: "Node.js", en: "Node.js" }, icon: <FaNodeJs />, category: "backend" },
  { key: "expressjs", name: { es: "Express.js", en: "Express.js" }, icon: <SiExpress />, category: "backend" },
  { key: "rest-apis", name: { es: "REST APIs", en: "REST APIs" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "graphql", name: { es: "GraphQL", en: "GraphQL" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "shopify-storefront-api", name: { es: "Shopify Storefront API", en: "Shopify Storefront API" }, icon: <SiShopify />, category: "backend" },
  { key: "openapi", name: { es: "OpenAPI", en: "OpenAPI" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "json-api", name: { es: "JSON:API", en: "JSON:API" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "api-consumption", name: { es: "Consumo de APIs", en: "API Consumption" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "third-party-integrations", name: { es: "Integraciones de Terceros", en: "Third-Party Integrations" }, icon: <FaCodeBranch />, category: "backend" },
  { key: "jwt-authentication", name: { es: "Autenticación JWT", en: "JWT Authentication" }, icon: <FaTools />, category: "backend" },
  { key: "oauth2", name: { es: "OAuth 2.0", en: "OAuth 2.0" }, icon: <FaTools />, category: "backend" },
  { key: "dotnet", name: { es: ".NET", en: ".NET" }, icon: <FaTools />, category: "backend" },
  { key: "csharp", name: { es: "C#", en: "C#" }, icon: <FaTools />, category: "backend" },

  { key: "azure-devops", name: { es: "Azure DevOps", en: "Azure DevOps" }, icon: <FaCodeBranch />, category: "cloudDevops" },
  { key: "azure-cloud", name: { es: "Azure Cloud", en: "Azure Cloud" }, icon: <FaCodeBranch />, category: "cloudDevops" },
  { key: "aws-s3", name: { es: "AWS (S3)", en: "AWS (S3)" }, icon: <FaAws />, category: "cloudDevops" },
  { key: "docker", name: { es: "Docker", en: "Docker" }, icon: <FaDocker />, category: "cloudDevops" },
  { key: "ci-cd-pipelines", name: { es: "CI/CD Pipelines", en: "CI/CD Pipelines" }, icon: <FaCodeBranch />, category: "cloudDevops" },
  { key: "github-actions", name: { es: "GitHub Actions", en: "GitHub Actions" }, icon: <SiGithubactions />, category: "cloudDevops" },
  { key: "git-cloud", name: { es: "Git", en: "Git" }, icon: <FaGitAlt />, category: "cloudDevops" },
  { key: "version-control", name: { es: "Control de Versiones", en: "Version Control" }, icon: <FaGitAlt />, category: "cloudDevops" },
  { key: "vercel", name: { es: "Vercel", en: "Vercel" }, icon: <SiVercel />, category: "cloudDevops" },

  { key: "postgresql", name: { es: "PostgreSQL", en: "PostgreSQL" }, icon: <SiPostgresql />, category: "databases" },
  { key: "sql-server", name: { es: "SQL Server", en: "SQL Server" }, icon: <SiMicrosoftsqlserver />, category: "databases" },
  { key: "mongodb", name: { es: "MongoDB", en: "MongoDB" }, icon: <SiMongodb />, category: "databases" },
  { key: "mysql", name: { es: "MySQL", en: "MySQL" }, icon: <SiMysql />, category: "databases" },
  { key: "firebase", name: { es: "Firebase", en: "Firebase" }, icon: <SiFirebase />, category: "databases" },

  { key: "ai-assisted-development", name: { es: "Desarrollo Asistido por IA", en: "AI-Assisted Development" }, icon: <FaRobot />, category: "aiAutomation" },
  { key: "github-copilot-ai", name: { es: "GitHub Copilot", en: "GitHub Copilot" }, icon: <SiGithub />, category: "aiAutomation" },
  { key: "claude-code", name: { es: "Claude Code", en: "Claude Code" }, icon: <FaRobot />, category: "aiAutomation" },
  { key: "opencode", name: { es: "OpenCode", en: "OpenCode" }, icon: <FaRobot />, category: "aiAutomation" },
  { key: "openai-integrations", name: { es: "Integraciones de OpenAI", en: "OpenAI Integrations" }, icon: <SiOpenai />, category: "aiAutomation" },
  { key: "openai-agents", name: { es: "Agentes de OpenAI", en: "OpenAI Agents" }, icon: <SiOpenai />, category: "aiAutomation" },

  { key: "frontend-architecture", name: { es: "Arquitectura Front-End", en: "Front-End Architecture" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "design-systems", name: { es: "Design Systems", en: "Design Systems" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "scalable-frontend-applications", name: { es: "Aplicaciones Front-End Escalables", en: "Scalable Front-End Applications" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "bff", name: { es: "Backend for Frontend (BFF)", en: "Backend for Frontend (BFF)" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "clean-architecture", name: { es: "Clean Architecture", en: "Clean Architecture" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "solid-principles", name: { es: "Principios SOLID", en: "SOLID Principles" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "modular-architecture", name: { es: "Arquitectura Modular", en: "Modular Architecture" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "state-management", name: { es: "Gestión de Estado", en: "State Management" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "performance-optimization", name: { es: "Optimización del Rendimiento", en: "Performance Optimization" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "lazy-loading-architecture", name: { es: "Carga Diferida (Lazy Loading)", en: "Lazy Loading" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "technical-leadership", name: { es: "Liderazgo Técnico", en: "Technical Leadership" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "code-reviews", name: { es: "Revisiones de Código", en: "Code Reviews" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "technical-documentation", name: { es: "Documentación Técnica", en: "Technical Documentation" }, icon: <FaProjectDiagram />, category: "architecture" },
  { key: "agile-scrum", name: { es: "Agile/Scrum", en: "Agile/Scrum" }, icon: <FaProjectDiagram />, category: "architecture" },

  { key: "visual-studio-code", name: { es: "Visual Studio Code", en: "Visual Studio Code" }, icon: <FaTools />, category: "tools" },
  { key: "git-tool", name: { es: "Git", en: "Git" }, icon: <FaGitAlt />, category: "tools" },
  { key: "github-tool", name: { es: "GitHub", en: "GitHub" }, icon: <SiGithub />, category: "tools" },
  { key: "azure-devops-tool", name: { es: "Azure DevOps", en: "Azure DevOps" }, icon: <FaTools />, category: "tools" },
  { key: "jira", name: { es: "Jira", en: "Jira" }, icon: <FaTools />, category: "tools" },
  { key: "figma", name: { es: "Figma", en: "Figma" }, icon: <FaFigma />, category: "tools" },
  { key: "postman", name: { es: "Postman", en: "Postman" }, icon: <FaTools />, category: "tools" },
  { key: "swagger-openapi", name: { es: "Swagger/OpenAPI", en: "Swagger/OpenAPI" }, icon: <FaCodeBranch />, category: "tools" },
  { key: "storybook-tool", name: { es: "Storybook", en: "Storybook" }, icon: <SiStorybook />, category: "tools" },
  { key: "chrome-devtools", name: { es: "Chrome DevTools", en: "Chrome DevTools" }, icon: <FaTools />, category: "tools" },
  { key: "docker-desktop", name: { es: "Docker Desktop", en: "Docker Desktop" }, icon: <FaDocker />, category: "tools" },
  { key: "github-copilot-tool", name: { es: "GitHub Copilot", en: "GitHub Copilot" }, icon: <SiGithub />, category: "tools" },
  { key: "claude-code-tool", name: { es: "Claude Code", en: "Claude Code" }, icon: <FaRobot />, category: "tools" },
  { key: "chatgpt", name: { es: "ChatGPT", en: "ChatGPT" }, icon: <SiOpenai />, category: "tools" },
  { key: "powershell", name: { es: "PowerShell", en: "PowerShell" }, icon: <FaTools />, category: "tools" },
  { key: "chrome-lighthouse", name: { es: "Chrome Lighthouse", en: "Chrome Lighthouse" }, icon: <FaTools />, category: "tools" },
  { key: "npm", name: { es: "NPM", en: "NPM" }, icon: <FaTools />, category: "tools" },
];

export default function SkillsSection() {
  const { language } = useLanguage();
  const lang: Lang = language === "en" ? "en" : "es";

  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const t = content[lang];

  const categoryTabs: Category[] = [
    "all",
    "frontend",
    "backend",
    "cloudDevops",
    "databases",
    "aiAutomation",
    "architecture",
    "tools",
  ];

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20 xl:px-12"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-10 top-1/3 h-36 w-36 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
          <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-lg font-semibold text-transparent md:text-xl">
              {t.badge}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl">
            {t.title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3 md:mb-10">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-fuchsia-400/40 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-white shadow-[0_0_25px_rgba(123,44,255,0.18)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/30 hover:text-white"
                }`}
              >
                {t.filters[tab]}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => (
            <article
              key={skill.key}
              className="group min-h-[220px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.92),rgba(5,11,29,0.98))] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(32,240,199,0.10)] md:p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:text-pink-400">
                {skill.icon}
              </div>

              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {skill.name[lang]}
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  {t.categoryLabel}:{" "}
                  <span className="text-cyan-300">
                    {t.categoryNames[skill.category]}
                  </span>
                </p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}