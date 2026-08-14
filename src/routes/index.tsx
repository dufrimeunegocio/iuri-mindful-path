import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Scheduler } from "@/components/site/Scheduler";
import { Reveal, ScrollProgress } from "@/components/site/Reveal";
import { AuthorityMarquee } from "@/components/site/AuthorityMarquee";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import heroImg from "@/assets/hero-v4.png.asset.json";
import sobreImg from "@/assets/sobre-v2.jpg.asset.json";
import logoMenu from "@/assets/logo-menu.png.asset.json";
import logoRodape from "@/assets/logo-rodape.png.asset.json";
import {
  Brain,
  ArrowRight,
  CalendarDays,
  CloudRain,
  HeartCrack,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Video,
  Wind,
} from "lucide-react";

const WA =
  "https://wa.me/5551996398755?text=" +
  encodeURIComponent("Olá, Iuri! Gostaria de saber mais sobre os atendimentos.");

const SITE = "https://iuri-mindful-path.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Psychologist", "LocalBusiness"],
      "@id": `${SITE}/#clinica`,
      name: "Iuri Dall’Olmo | Psicologia e Psicanálise",
      url: SITE,
      telephone: "+55-51-99639-8755",
      email: "iuridallolmo@gmail.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Mariante, 288/905",
        addressLocality: "Porto Alegre",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      areaServed: [
        { "@type": "City", name: "Porto Alegre" },
        { "@type": "Country", name: "Brasil" },
      ],
      sameAs: ["https://instagram.com/clinica.iuridallolmo"],
      founder: { "@id": `${SITE}/#iuri` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#iuri`,
      name: "Iuri Dall’Olmo",
      jobTitle: "Psicólogo e Psicanalista",
      identifier: "CRP 07/08900",
      url: SITE,
      email: "iuridallolmo@gmail.com",
      telephone: "+55-51-99639-8755",
      knowsAbout: [
        "Psicanálise clínica",
        "Psicologia do Esporte",
        "Psicologia Organizacional",
        "Ansiedade",
        "Depressão",
        "Angústia",
      ],
      workLocation: {
        "@type": "Place",
        name: "Consultório em Porto Alegre",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Mariante, 288/905",
          addressLocality: "Porto Alegre",
          addressRegion: "RS",
          addressCountry: "BR",
        },
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicanalista em Porto Alegre | Iuri Dall’Olmo — CRP 07/08900" },
      {
        name: "description",
        content:
          "Psicanálise, psicologia do esporte e organizacional com Iuri Dall’Olmo. Quase 30 anos de clínica, atendimento presencial em Porto Alegre e online. Agende sua sessão.",
      },
      {
        property: "og:title",
        content: "Psicanalista em Porto Alegre | Iuri Dall’Olmo — CRP 07/08900",
      },
      {
        property: "og:description",
        content: "Escuta que acolhe. Experiência que transforma. Agende sua sessão.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Psicanalista em Porto Alegre | Iuri Dall’Olmo" },
      {
        name: "twitter:description",
        content: "Escuta que acolhe. Experiência que transforma. Agende sua sessão.",
      },
      { name: "geo.region", content: "BR-RS" },
      { name: "geo.placename", content: "Porto Alegre" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#problemas", label: "Problemas" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "FAQ" },
];

const problemas = [
  {
    icon: Wind,
    title: "Ansiedade",
    text: "Pensamento acelerado, insônia e a sensação constante de que algo ruim está prestes a acontecer.",
  },
  {
    icon: CloudRain,
    title: "Depressão",
    text: "Desânimo, perda de prazer e cansaço que não passa com descanso.",
  },
  {
    icon: Brain,
    title: "Angústia",
    text: "Um mal-estar difícil de nomear, que aperta o peito e insiste em voltar.",
  },
  {
    icon: HeartCrack,
    title: "Estagnação profissional e amorosa",
    text: "A sensação de repetir os mesmos ciclos na carreira e nos relacionamentos.",
  },
];

const servicos = [
  {
    icon: Users,
    title: "Psicoterapia e Psicanálise",
    text: "Atendimento individual para adolescentes, adultos e idosos, com escuta clínica aprofundada.",
  },
  {
    icon: Trophy,
    title: "Psicologia do Esporte",
    text: "Preparação mental para atletas: foco, controle da pressão, lesões e retomada da performance.",
  },
  {
    icon: Brain,
    title: "Psicologia Organizacional",
    text: "Formação e criação de RH, avaliação, desenvolvimento de lideranças e clima organizacional.",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    text: "Mesma profundidade do consultório, de onde você estiver, com horários flexíveis.",
  },
];

const etapas = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Você escolhe data e horário no calendário e confirma pelo WhatsApp em poucos cliques.",
  },
  {
    n: "02",
    title: "Sessão inicial",
    text: "Um encontro de escuta, sem julgamentos, para entender sua demanda e o que te trouxe até aqui.",
  },
  {
    n: "03",
    title: "Plano de acompanhamento",
    text: "Definimos frequência e objetivos: presencial em Porto Alegre ou online, conforme sua rotina.",
  },
  {
    n: "04",
    title: "Processo contínuo",
    text: "Sessões regulares de 50 minutos, com revisões periódicas do percurso e dos avanços.",
  },
];

const faq = [
  {
    q: "Como funciona o atendimento online?",
    a: "As sessões acontecem por videochamada, com a mesma duração e sigilo do atendimento presencial. Você só precisa de um lugar reservado e boa conexão.",
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "As sessões têm cerca de 50 minutos. A frequência é definida em conjunto, geralmente semanal.",
  },
  {
    q: "Atende convênios ou emite recibo?",
    a: "O atendimento é particular, com emissão de recibo para reembolso junto ao seu plano ou declaração de imposto de renda.",
  },
  {
    q: "A partir de que idade é feito o atendimento?",
    a: "Atendo adolescentes, adultos e idosos, além de atletas de diferentes modalidades e níveis.",
  },
  {
    q: "O que é sigilo profissional?",
    a: "Tudo o que é falado em sessão é protegido pelo Código de Ética do Psicólogo. Nada é compartilhado sem o seu consentimento.",
  },
  {
    q: "Como funciona o trabalho com empresas?",
    a: "Realizo formação e estruturação de RH, processos seletivos, desenvolvimento de lideranças e programas de saúde mental no trabalho. Fale comigo para um diagnóstico inicial.",
  },
];

const MAPA =
  "https://www.google.com/maps?q=Rua+Mariante+288,+Porto+Alegre+-+RS&output=embed";

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <header className="sticky top-0 z-50 border-b border-border/70 bg-card/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <img
            src={logoMenu.url}
            alt="Iuri Dall’Olmo Psicologia e Psicanálise"
            className="h-16 w-auto md:h-20"
            width={220}
            height={80}
            fetchPriority="high"
          />
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="story-link text-base font-medium text-graphite/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="lg"
            className="shine rounded-full px-7 text-base font-semibold transition-transform hover:scale-[1.04]"
          >
            <a href="#contato">Agendar</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-card">
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:py-32 lg:grid-cols-2">
          <Reveal className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-graphite/70">
              <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
              Psicanálise · Esporte · Organizações
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-graphite md:text-6xl">
              Escuta que acolhe.
              <br />
              <span className="text-primary">Experiência que transforma.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-graphite/75">
              Sou Iuri Dall’Olmo, psicanalista clínico com quase 30 anos de experiência.
              Atendo adolescentes, adultos, idosos e atletas em Porto Alegre e online,
              em um espaço seguro para elaborar ansiedade, depressão, angústia e as
              estagnações da vida profissional e amorosa.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="shine h-14 rounded-full px-10 text-lg font-semibold transition-transform hover:scale-[1.03]"
              >
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Agendar minha sessão
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="absolute inset-x-8 bottom-8 top-16 rounded-[2.5rem] bg-secondary/70" />
            <div className="absolute inset-x-16 bottom-16 top-24 rounded-[2.5rem] border border-primary/15" />
            <img
              src={heroImg.url}
              alt="Iuri Dall’Olmo, psicanalista em Porto Alegre, sentado na poltrona do consultório"
              className="relative w-full float-soft drop-shadow-[0_30px_45px_rgba(0,0,0,0.15)]"
              width={1512}
              height={1024}
              fetchPriority="high"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <AuthorityMarquee />

      {/* PROBLEMAS */}
      <section id="problemas" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <h2 className="max-w-2xl text-3xl text-graphite md:text-4xl">
            O que costuma chegar ao consultório
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Se você se reconhece em alguma dessas situações, há um caminho possível.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {problemas.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="hover-lift group h-full rounded-2xl border border-border bg-card p-8 hover:border-primary/40">
                  <p.icon
                    className="h-8 w-8 text-graphite transition-colors group-hover:text-primary"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 text-xl text-graphite">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <h2 className="text-3xl text-graphite md:text-4xl">Serviços</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {servicos.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="hover-lift group flex h-full gap-5 rounded-2xl border border-border bg-background p-8 hover:border-primary/40">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-xl text-graphite">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-x-10 bottom-4 top-10 rounded-[2.5rem] bg-secondary/70" />
              <img
                src={sobreImg.url}
                alt="Retrato de Iuri Dall’Olmo, psicólogo e psicanalista (CRP 07/08900)"
                className="relative w-full rounded-[2rem] object-cover"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.3em] text-graphite/60">
                Sobre mim
              </p>
              <h2 className="mt-5 text-3xl text-graphite md:text-4xl">Iuri Dall’Olmo</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-graphite/75">
                <p>
                  Psicólogo e psicanalista com quase 30 anos dedicados à clínica. Ao longo
                  desse percurso, acompanhei adolescentes em construção, adultos diante de
                  escolhas difíceis, idosos revisitando a própria história e atletas
                  lidando com a pressão do alto rendimento.
                </p>
                <p>
                  Também atuo na psicologia organizacional, com formação e criação de
                  estruturas de RH — porque saúde mental também se constrói no trabalho e
                  nas relações que ele produz.
                </p>
                <p>
                  Meu compromisso é oferecer uma escuta sem pressa e sem julgamentos, onde
                  aquilo que parecia sem saída possa ganhar palavra, sentido e movimento.
                </p>
              </div>
              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                CRP 07/08900
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento" className="bg-graphite text-secondary">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <h2 className="text-3xl text-secondary md:text-4xl">Como funciona o atendimento</h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e, i) => (
              <Reveal key={e.n} delay={i * 100}>
                <div className="group border-t border-secondary/25 pt-6 transition-colors hover:border-secondary/70">
                  <p className="font-display text-4xl text-secondary/50 transition-colors group-hover:text-secondary">
                    {e.n}
                  </p>
                  <h3 className="mt-4 text-xl text-secondary">{e.title}</h3>
                  <p className="mt-3 leading-relaxed text-secondary/70">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO + AGENDA */}
      <section id="contato" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-28">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl text-graphite md:text-4xl">Contato e redes</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Estou à disposição para tirar dúvidas antes da primeira sessão.
              </p>
              <ul className="mt-10 space-y-5">
                <li>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50"
                  >
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span>
                      <span className="block font-medium text-graphite">WhatsApp</span>
                      <span className="block text-sm text-muted-foreground">
                        (51) 99639-8755
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/clinica.iuridallolmo"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50"
                  >
                    <Instagram className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span>
                      <span className="block font-medium text-graphite">Instagram</span>
                      <span className="block text-sm text-muted-foreground">
                        @clinica.iuridallolmo
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:iuridallolmo@gmail.com"
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50"
                  >
                    <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span>
                      <span className="block font-medium text-graphite">E-mail</span>
                      <span className="block text-sm text-muted-foreground">
                        iuridallolmo@gmail.com
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Rua+Mariante+288+Porto+Alegre+RS"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50"
                  >
                    <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    <span>
                      <span className="block font-medium text-graphite">Consultório</span>
                      <span className="block text-sm text-muted-foreground">
                        Rua Mariante 288/905, Porto Alegre - RS
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <Scheduler />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-graphite text-secondary">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/5 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-secondary/80">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Vagas abertas para novos pacientes
            </span>
            <h2 className="mt-8 text-3xl leading-tight text-secondary md:text-5xl">
              Dar o primeiro passo
              <br />
              <span className="italic text-secondary/70">já é parte do tratamento</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary/75">
              Uma conversa inicial é suficiente para entender o que te trouxe até aqui e
              definir o melhor caminho — presencial em Porto Alegre ou online.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="shine group h-14 rounded-full px-10 text-lg font-semibold transition-transform hover:scale-[1.03]"
              >
                <a href={WA} target="_blank" rel="noreferrer">
                  Quero conversar agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-secondary/35 bg-transparent px-10 text-lg font-semibold text-secondary hover:bg-secondary hover:text-graphite"
              >
                <a href="#contato">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Ver horários
                </a>
              </Button>
            </div>
            <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              {[
                { icon: ShieldCheck, t: "Sigilo garantido", d: "Código de Ética do Psicólogo." },
                { icon: Video, t: "Online ou presencial", d: "Você escolhe o formato." },
                { icon: Users, t: "Quase 30 anos", d: "De experiência clínica." },
              ].map((b) => (
                <li
                  key={b.t}
                  className="hover-lift flex items-start gap-3 rounded-2xl border border-secondary/15 bg-secondary/5 p-5"
                >
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" strokeWidth={1.5} />
                  <span>
                    <span className="block font-medium text-secondary">{b.t}</span>
                    <span className="block text-sm text-secondary/65">{b.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-28">
          <h2 className="text-center text-3xl text-graphite md:text-4xl">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="py-6 text-left text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-graphite text-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <img
              src={logoRodape.url}
              alt="Iuri Dall Olmo Psicologia"
              className="h-28 w-auto"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-secondary/70">
              Psicanálise, psicologia do esporte e organizacional. Presencial em Porto
              Alegre e online.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-secondary">Navegação</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-secondary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-secondary">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary/70">
              <li>Rua Mariante 288/905, Porto Alegre - RS</li>
              <li>
                <a href={WA} target="_blank" rel="noreferrer" className="hover:text-secondary">
                  (51) 99639-8755
                </a>
              </li>
              <li>
                <a href="mailto:iuridallolmo@gmail.com" className="hover:text-secondary">
                  iuridallolmo@gmail.com
                </a>
              </li>
              <li>CRP 07/08900</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-secondary">Localização</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-secondary/20">
              <iframe
                title="Mapa do consultório"
                src={MAPA}
                loading="lazy"
                className="h-48 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/15">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-secondary/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Iuri Dall Olmo Psicologia.</p>
            <a
              href="https://www.instagram.com/dufrimeunegocio?igsh=bDd3N2tyb21qN2Zu&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-secondary"
            >
              Desenvolvido com ❤️ por @dufrimeunegocio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
