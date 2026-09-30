"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "es" | "en";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    projects: string;
    assistant: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    roleComplement: string;
    contact: string;
    resume: string;
    highlights: string[];
  };
  about: {
    title: string;
    label: string;
    description: string;
    badge: string;
    cardTitle1: string;
    cardText1: string;
    cardTitle2: string;
    cardText2: string;
    cardTitle3: string;
    cardText3: string;
  };
  assistant: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    thinking: string;
    error: string;
    welcome: string;
  };
  footer: {
      madeWith: string;
      by: string;
    copyright: string;
  };
};

const dictionaries: Record<Language, Dictionary> = {
  es: {
    nav: {
      home: "INICIO",
      about: "SOBRE MÍ",
      experience: "EXPERIENCIA",
      skills: "HABILIDADES",
      education: "EDUCACIÓN",
      contact: "CONTACTO",
      projects: "PROYECTOS",
      assistant: "IA",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Juan Carlos Zepeda",
      role: "Senior Front-End Engineer",
      roleComplement:
        "especializado en construir aplicaciones web modernas, escalables y de alto rendimiento con React, Next.js, TypeScript y Angular.",
      tagline:
        "Más de 8 años de experiencia desarrollando y modernizando aplicaciones web empresariales, creando arquitecturas Front-End escalables, componentes reutilizables y experiencias digitales enfocadas en rendimiento, accesibilidad y experiencia de usuario.",
      contact: "Ver Proyectos",
      resume: "Descargar CV",
      highlights: [
        "React, Next.js, TypeScript y Angular",
        "Arquitectura Front-End y componentes reutilizables",
        "AI-Assisted Development para acelerar el desarrollo y mejorar la calidad del código",
      ],
    },
    about: {
      title: "¿Quién soy?",
      label: "SOBRE MÍ",
      badge: "Senior Front-End + IA",
      description:
        "Ingeniero Front-End Senior con más de 8 años de experiencia diseñando, desarrollando y modernizando aplicaciones web empresariales utilizando React, Next.js, TypeScript y Angular. Especializado en AI-Assisted Development para acelerar la entrega de software, mejorar la calidad del código e incrementar la productividad de los equipos.\n\nAmplia experiencia en la construcción de interfaces de usuario modernas, arquitecturas Front-End escalables y bibliotecas de componentes reutilizables, con un fuerte enfoque en rendimiento, accesibilidad, mantenibilidad y experiencia de usuario.\n\nHe contribuido en iniciativas técnicas mediante la definición de estándares de desarrollo, revisiones de código y colaboración con equipos de UX/UI, Backend, QA, DevOps y Product Owners en entornos Agile (Scrum). Mi experiencia incluye el ecosistema React, Next.js SSR/SSG/ISR, REST APIs, GraphQL, Headless CMS, Shopify Storefront API, Design Systems, Microfrontends, Module Federation, Core Web Vitals y accesibilidad WCAG.",
      cardTitle1: "FRONT-END ESCALABLE",
      cardText1:
        "Arquitecturas escalables, componentes reutilizables y aplicaciones Front-End fáciles de mantener.",
      cardTitle2: "DESARROLLO ASISTIDO POR IA",
      cardText2:
        "Uso de GitHub Copilot, Claude Code, OpenCode e integraciones con OpenAI para mejorar la productividad y la calidad del código.",
      cardTitle3: "RENDIMIENTO Y ACCESIBILIDAD",
      cardText3:
        "Enfoque en Core Web Vitals, optimización del rendimiento, accesibilidad, mantenibilidad y experiencia de usuario.",
    },
    assistant: {
      title: "Asistente IA",
      subtitle: "Haz preguntas sobre experiencia, stack o proyectos.",
      placeholder: "Escribe tu pregunta...",
      send: "Enviar",
      thinking: "Pensando...",
      error: "No pude responder en este momento.",
      welcome:
        "Hola, soy el asistente de Juan Carlos Zepeda IA. ¿Qué te gustaría saber?",
    },
    footer:{ 
      madeWith: "Hecho con", 
      by: "por",
      copyright: "Juan Carlos Zepeda © 2026."
    }
  },

  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      experience: "EXPERIENCE",
      skills: "SKILLS",
      education: "EDUCATION",
      contact: "CONTACT",
      projects: "PROJECTS",
      assistant: "AI",
    },
    hero: {
      greeting: "Hello, I’m",
      name: "Juan Carlos Zepeda",
      role: "Senior Front-End Engineer",
      roleComplement:
        "specialized in building modern, scalable, and high-performance web applications with React, Next.js, TypeScript, and Angular.",
      tagline:
        "8+ years of experience designing, developing, and modernizing enterprise web applications, building scalable Front-End architectures, reusable components, and digital experiences focused on performance, accessibility, and user experience.",
      contact: "View Projects",
      resume: "Download Resume",
      highlights: [
        "React, Next.js, TypeScript, and Angular",
        "Front-End architecture and reusable components",
        "AI-Assisted Development to accelerate delivery and improve code quality",
      ],
    },
    about: {
      title: "Who am I?",
      label: "ABOUT ME",
      badge: "Senior Front-End + AI",
      description:
        "Senior Front-End Engineer with over 8 years of experience designing, developing, and modernizing enterprise web applications using React, Next.js, TypeScript, and Angular. Specialized in AI-Assisted Development to accelerate software delivery, improve code quality, and increase team productivity.\n\nExperienced in building modern user interfaces, scalable Front-End architectures, and reusable component libraries, with a strong focus on performance, accessibility, maintainability, and user experience.\n\nI have contributed to technical initiatives through development standards, code reviews, and collaboration with UX/UI, Backend, QA, DevOps, and Product Owner teams in Agile (Scrum) environments. My experience includes the React ecosystem, Next.js SSR/SSG/ISR, REST APIs, GraphQL, Headless CMS, Shopify Storefront API, Design Systems, Microfrontends, Module Federation, Core Web Vitals, and WCAG accessibility.",
      cardTitle1: "SCALABLE FRONT-END",
      cardText1:
        "Scalable architectures, reusable components, and maintainable Front-End applications.",
      cardTitle2: "AI-ASSISTED DEVELOPMENT",
      cardText2:
        "Using GitHub Copilot, Claude Code, OpenCode, and OpenAI integrations to improve development productivity and code quality.",
      cardTitle3: "PERFORMANCE & ACCESSIBILITY",
      cardText3:
        "Focused on Core Web Vitals, performance optimization, accessibility, maintainability, and user experience.",
    },
    assistant: {
      title: "AI Assistant",
      subtitle: "Ask about experience, stack, or projects.",
      placeholder: "Type your question...",
      send: "Send",
      thinking: "Thinking...",
      error: "I could not answer right now.",
      welcome:
        "Hi, I am Juan Carlos Zepeda IA assistant. What would you like to know?",
    },
    footer:{
      madeWith: "Made with",
      by: "by",
      copyright: "Juan Carlos Zepeda © 2026."
    }
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (value: Language) => void;
  toggleLanguage: () => void;
  mounted: boolean;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("site-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleLanguage = (): void => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      mounted,
      t: dictionaries[language],
    }),
    [language, mounted],
  );

  return (
    <LanguageContext.Provider value={value}>
      {mounted ? children : null}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}