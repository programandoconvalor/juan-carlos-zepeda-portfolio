"use client";

import { useLanguage } from "@/app/context/language-context";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section
      id="about"
      className="relative z-50 my-16 overflow-hidden lg:my-24"
    >
      <div className="absolute inset-0 -z-10 opacity-100">
        <div className="absolute left-[-4rem] top-10 h-44 w-44 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
        <div className="absolute right-[8%] top-[6%] h-60 w-60 rounded-full bg-[var(--color-brand)]/18 blur-3xl" />
        <div className="absolute bottom-0 left-[20%] h-52 w-52 rounded-full bg-[var(--color-brand-strong)]/10 blur-3xl" />
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(90deg,rgba(5,11,29,0.94)_0%,rgba(7,15,42,0.96)_48%,rgba(8,17,51,0.98)_100%)] px-6 py-8 shadow-[0_20px_80px_rgba(3,8,24,0.45)] backdrop-blur-xl sm:px-8 lg:px-10 lg:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,240,199,0.05),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(123,44,255,0.14),transparent_22%),radial-gradient(circle_at_70%_85%,rgba(255,60,172,0.08),transparent_20%)]" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold tracking-tight text-[var(--color-title)] sm:text-5xl lg:text-6xl">
              {t.about.title}
            </h2>

            <div className="mb-7 mt-4">
              <span className="relative inline-block text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {t.about.badge}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[var(--color-accent)]/70" />
              </span>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-text)]/95 sm:text-lg sm:leading-9">
              {t.about.description}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <div className="rounded-[1.6rem] border border-[rgba(32,240,199,0.55)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(32,240,199,0.08),0_0_24px_rgba(32,240,199,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(32,240,199,0.12)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {t.about.cardTitle1}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText1}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[rgba(123,44,255,0.52)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(123,44,255,0.08),0_0_24px_rgba(123,44,255,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(123,44,255,0.14)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#52c7ff]">
                  {t.about.cardTitle2}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText2}
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-[rgba(255,60,172,0.50)] bg-[linear-gradient(180deg,rgba(8,19,48,0.82)_0%,rgba(6,14,36,0.88)_100%)] p-5 shadow-[0_0_0_1px_rgba(255,60,172,0.08),0_0_24px_rgba(255,60,172,0.10)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,60,172,0.14)]">
                <h3 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-hero-code-string)]">
                  {t.about.cardTitle3}
                </h3>
                <p className="text-center text-sm leading-7 text-[var(--color-text-soft)]">
                  {t.about.cardText3}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative pr-0 lg:pr-10">
              <div className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-[var(--color-accent)]/8 blur-3xl" />

              <div className="relative h-[340px] w-[270px] overflow-visible sm:h-[400px] sm:w-[315px] lg:h-[520px] lg:w-[390px]">
                <div className="relative h-full w-full overflow-hidden rounded-[45%_55%_60%_40%/50%_45%_55%_50%] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.80)_0%,rgba(13,23,56,0.88)_100%)] shadow-[0_25px_90px_rgba(0,0,0,0.38)] ring-1 ring-[var(--color-border)]">
                  <Image
                    src={personalData.profile}
                    alt={personalData.name}
                    fill
                    className="object-cover object-[center_top]"
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 315px, 390px"
                    priority
                  />
                </div>

                <div className="absolute right-[-18px] top-[42px] hidden lg:block">
                  <div className="relative">
                    <div className="absolute left-[-34px] top-[92px] h-7 w-7 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.96)_0%,rgba(13,23,56,0.96)_100%)] shadow-[0_8px_24px_rgba(2,8,24,0.35)]" />
                    <div className="absolute left-[-18px] top-[56px] h-4 w-4 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.96)_0%,rgba(13,23,56,0.96)_100%)] shadow-[0_8px_20px_rgba(2,8,24,0.35)]" />

                    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,17,51,0.96)_0%,rgba(13,23,56,0.96)_100%)] px-5 py-6 shadow-[0_18px_45px_rgba(8,28,58,0.42)] backdrop-blur-xl">
                      <span className="block text-sm font-semibold uppercase tracking-[0.30em] text-[var(--color-title)]">
                        {language === "es" ? "SOBRE MÍ" : "ABOUT ME"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}