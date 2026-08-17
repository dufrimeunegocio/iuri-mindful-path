const ITENS = [
  "30 anos de experiência clínica",
  "CRP 07/08900",
  "Psicanálise clínica",
  "Psicologia do Esporte",
  "Psicologia Organizacional",
  "Atendimento online e presencial",
  "Consultório em Porto Alegre",
  "Adolescentes · Adultos · Idosos · Atletas",
];

export function AuthorityMarquee() {
  return (
    <section aria-label="Credenciais e experiência profissional" className="bg-graphite">
      <div className="marquee py-5">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-10 pr-10"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {ITENS.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-secondary/85 md:text-base"
                >
                  {t}
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
