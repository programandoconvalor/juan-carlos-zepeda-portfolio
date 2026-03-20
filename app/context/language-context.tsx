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
    blogs: string;
    projects: string;
    assistant: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    contact: string;
    resume: string;
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
      about: "ACERCA",
      experience: "EXPERIENCIA",
      skills: "HABILIDADES",
      education: "EDUCACIÓN",
      blogs: "BLOGS",
      projects: "PROYECTOS",
      assistant: "IA",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Juan Carlos Zepeda IA",
      role: "Senior Front-End Engineer",
      tagline: "especializado en experiencias web modernas con IA.",
      contact: "Contáctame",
      resume: "Ver CV",
    },
    about: {
      title: "¿Quién soy?",
      label: "SOBRE MÍ",
      badge: "Senior Front-End + IA",
      description:
        "Amplia experiencia en la creación de aplicaciones web responsivas, escalables y orientadas al negocio, utilizando React, Next.js y los ecosistemas modernos de JavaScript.\n\nMe especializo en diseño de interfaces y componentes de alto impacto, integración de API, mejora de la experiencia del usuario y el aprovechamiento de herramientas de IA para fortalecer performance, escalabilidad y calidad del producto.",
      cardTitle1: "UI/UX con impacto",
      cardText1: "Interfaces limpias, modernas y pensadas para conversión y experiencia real de usuario.",
      cardTitle2: "Arquitectura escalable",
      cardText2: "Componentes reutilizables, buenas prácticas y enfoque sólido en mantenibilidad.",
      cardTitle3: "IA aplicada",
      cardText3: "Uso herramientas de IA para fortalecer performance, escalabilidad y calidad del producto.",
    },
    assistant: {
      title: "Asistente IA",
      subtitle: "Haz preguntas sobre experiencia, stack o proyectos.",
      placeholder: "Escribe tu pregunta...",
      send: "Enviar",
      thinking: "Pensando...",
      error: "No pude responder en este momento.",
      welcome: "Hola, soy el asistente de Juan Carlos Zepeda IA. ¿Qué te gustaría saber?",
    },
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      experience: "EXPERIENCE",
      skills: "SKILLS",
      education: "EDUCATION",
      blogs: "BLOGS",
      projects: "PROJECTS",
      assistant: "AI",
    },
    hero: {
      greeting: "Hello, I’m",
      name: "Juan Carlos Zepeda IA",
      role: "Senior Front-End Engineer",
      tagline: "specialized in modern web experiences with AI.",
      contact: "Contact me",
      resume: "View Resume",
    },
    about: {
      title: "Who am I?",
      label: "ABOUT ME",
      badge: "Senior Front-End + AI",
      description:
        "Extensive experience building responsive, scalable, business-oriented web applications using React, Next.js, and modern JavaScript ecosystems.\n\nI specialize in designing high-impact interfaces and components, API integration, improving user experience, and leveraging AI tools to strengthen performance, scalability, and product quality.",
      cardTitle1: "Impactful UI/UX",
      cardText1: "Clean, modern interfaces designed for conversion and real user experience.",
      cardTitle2: "Scalable architecture",
      cardText2: "Reusable components, solid practices, and a strong maintainability mindset.",
      cardTitle3: "Applied AI",
      cardText3: "I use AI tools to strengthen performance, scalability, and product quality.",
    },
    assistant: {
      title: "AI Assistant",
      subtitle: "Ask about experience, stack, or projects.",
      placeholder: "Type your question...",
      send: "Send",
      thinking: "Thinking...",
      error: "I could not answer right now.",
      welcome: "Hi, I am Juan Carlos Zepeda IA assistant. What would you like to know?",
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
    [language, mounted]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}