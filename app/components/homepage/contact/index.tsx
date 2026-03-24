"use client";

import ContactForm from "./contact-form";
import { useLanguage } from "@/app/context/language-context";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  const { language } = useLanguage();
  const lang = language === "en" ? "en" : "es";

  return (
    <section id="contact" className="my-20 relative text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "es" ? "Contacto" : "Contact"}
        </h2>
        <p className="text-gray-400 mt-2">
          {lang === "es"
            ? "Disponible para oportunidades y proyectos 100% remotos"
            : "Available for opportunities and projects 100% remote"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* FORM */}
        <ContactForm />

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center gap-8">
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-lg font-medium">ingenierozepeda@gmail.com</p>
            <p className="text-gray-400">Toluca, México</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href={personalData.linkedIn}
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#20f0c7]/50 hover:text-[#20f0c7] hover:shadow-[0_0_22px_rgba(32,240,199,0.18)]"
            >
              <BsLinkedin size={22} />
            </Link>

            <Link
              href={personalData.phone}
              target="_blank"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#22c55e]/40 bg-[rgba(34,197,94,0.12)] text-[#22c55e] shadow-[0_0_18px_rgba(34,197,94,0.10)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#22c55e] hover:bg-[rgba(34,197,94,0.18)] hover:text-[#4ade80] hover:shadow-[0_0_24px_rgba(34,197,94,0.22)]"
            >
              <BsWhatsapp size={22} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
