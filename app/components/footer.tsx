import { personalData } from "@/utils/data/personal-data";

export default function Footer() {
  const language = "en";

  return (
    <div className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-sm text-[var(--color-text-soft)]">
          © Developer Portfolio by{" "}
          <span className="font-semibold text-[var(--color-title)]">
            {personalData.name}
          </span>
        </p>

        <div className="text-sm text-[var(--color-accent)]">
          React · Next.js · TypeScript · AI · {language.toUpperCase()}
        </div>
      </div>
    </div>
  );
}