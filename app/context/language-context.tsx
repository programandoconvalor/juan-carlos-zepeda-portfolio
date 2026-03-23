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
      role: "Ingeniero Front-End Senior",
      roleComplement:
        "especializado en crear experiencias web modernas, rápidas y escalables + IA.",
      tagline:
        "Construyo soluciones web escalables centradas en la experiencia del usuario que generan impacto real y alto valor en producción.",
      contact: "Ver Proyectos",
      resume: "Descargar CV",
      highlights: [
        "✔ Aplicaciones con React, Next.js, TypeScript & IA",
        "✔ UI/UX modernas y responsivas",
        "✔ Componentes reutilizables y código limpio",
      ],
    },
    about: {
      title: "¿Quién soy?",
      label: "SOBRE MÍ",
      badge: "Senior Front-End + IA",
      description:
        "Ingeniero Front-End Senior con más de 8 años de experiencia desarrollando aplicaciones web escalables y de alto rendimiento. Especializado en el ecosistema de React y Next.js, enfocado en la creación de experiencias de usuario modernas, arquitecturas frontend robustas e integraciones eficientes con APIs. Genero impacto en el producto mediante la optimización del rendimiento, la mejora continua de la experiencia del usuario y la implementación de soluciones impulsadas por inteligencia artificial, construyendo aplicaciones escalables y listas para producción alineadas a objetivos de negocio.",
      cardTitle1: "UI/UX con impacto",
      cardText1:
        "Interfaces limpias, modernas y pensadas para conversión y experiencia real de usuario.",
      cardTitle2: "Arquitectura escalable",
      cardText2:
        "Componentes reutilizables, buenas prácticas y enfoque sólido en mantenibilidad.",
      cardTitle3: "IA aplicada",
      cardText3:
        "Uso herramientas de IA para fortalecer performance, escalabilidad y calidad del producto.",
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
        "specialized in building modern, fast, and scalable web experiences with AI.",
      tagline:
        "I build scalable web solutions focused on user experience that deliver real impact and high value in production.",
      contact: "View Projects",
      resume: "Download Resume",
      highlights: [
        "✔ Applications with React, Next.js, TypeScript & AI",
        "✔ Modern and responsive UI/UX experiences",
        "✔ Reusable components and clean code",
      ],
    },
    about: {
      title: "Who am I?",
      label: "ABOUT ME",
      badge: "Senior Front-End + AI",
      description:
        "Senior Front-End Engineer with over 8 years of experience developing scalable and high-performance web applications. Specialized in the React and Next.js ecosystem, focused on creating modern user experiences, robust frontend architectures, and efficient API integrations. I drive product impact through performance optimization, continuous user experience improvement, and the implementation of AI-powered solutions, building scalable applications ready for production aligned with business objectives.",
      cardTitle1: "Impactful UI/UX",
      cardText1:
        "Clean, modern interfaces designed for conversion and real user experience.",
      cardTitle2: "Scalable architecture",
      cardText2:
        "Reusable components, solid practices, and a strong maintainability mindset.",
      cardTitle3: "Applied AI",
      cardText3:
        "I use AI tools to strengthen performance, scalability, and product quality.",
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