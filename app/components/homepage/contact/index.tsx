"use client";

import ContactForm from "./contact-form";
import { useLanguage } from "@/app/context/language-context";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  return (
    <section className="my-20 relative text-white">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Contacto" : "Contact"}
        </h2>
        <p className="text-gray-400 mt-2">
          {lang === "es"
            ? "Disponible para oportunidades y proyectos"
            : "Available for opportunities and projects"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* FORM */}
        <ContactForm />

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-8">

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-lg font-medium">
              ingenierozepeda@gmail.com
            </p>
            <p className="text-gray-400">
              Toluca, México
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6">

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-[#0A66C2] transition-all hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5217227914217"
              target="_blank"
              className="w-14 h-14 flex items-center justify-center rounded-full border border-green-400/30 bg-green-500/10 hover:bg-green-500 transition-all hover:scale-110"
            >
              <FaWhatsapp size={22} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;