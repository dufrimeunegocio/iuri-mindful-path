import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Scheduler } from "@/components/site/Scheduler";
import heroImg from "@/assets/hero.png.asset.json";
import sobreImg from "@/assets/sobre.png.asset.json";
import logoMenu from "@/assets/logo-menu.png.asset.json";
import logoRodape from "@/assets/logo-rodape.png.asset.json";
import {
  Brain,
  CloudRain,
  HeartCrack,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Users,
  Video,
  Wind,
} from "lucide-react";

const WA = "https://wa.me/5551996398755?text=" + encodeURIComponent("Olá, Iuri! Gostaria de saber mais sobre os atendimentos.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iuri Dall Olmo | Psicanálise, Psicologia Esportiva e Organizacional" },
      {
        name: "description",
        content:
          "Quase 30 anos de clínica. Atendimento psicoterapêutico presencial em Porto Alegre e online para adolescentes, adultos, idosos e atletas.",
      },
      {
        property: "og:title",
        content: "Iuri Dall Olmo | Psicanálise, Psicologia Esportiva e Organizacional",
      },
      {
        property: "og:description",
        content: "Escuta que acolhe. Experiência que transforma. Agende sua sessão.",
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

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <img src={logoMenu.url} alt="Iuri Dall Olmo Psicologia" className="h-12 w-auto" />
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contato">Agendar</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">
              Psicanálise · Esporte · Organizações
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-primary md:text-6xl">
              Escuta que acolhe.
              <br />
              Experiência que transforma.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite/80">
              Sou Iuri Dall Olmo, psicanalista clínico com quase 30 anos de experiência.
              Atendo adolescentes, adultos, idosos e atletas em Porto Alegre e online,
              em um espaço seguro para elaborar ansiedade, depressão, angústia e as
              estagnações da vida profissional e amorosa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contato">Agendar minha sessão</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#sobre">Conhecer o trabalho</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-6">
              <div>
                <p className="font-display text-3xl text-primary">30</p>
                <p className="text-xs text-muted-foreground">anos de clínica</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">CRP 07/08900</p>
                <p className="text-xs text-muted-foreground">registro profissional</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">Online</p>
                <p className="text-xs text-muted-foreground">e presencial</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-x-6 bottom-6 top-16 rounded-[2.5rem] bg-secondary" />
            <img
              src={heroImg.url}
              alt="Iuri Dall Olmo sentado em sua poltrona de atendimento"
              className="relative w-full"
            />
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section id="problemas" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl text-3xl text-primary md:text-4xl">
          O que costuma chegar ao consultório
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Se você se reconhece em alguma dessas situações, há um caminho possível.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemas.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <p.icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
              <h3 className="mt-4 text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl text-primary md:text-4xl">Serviços</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {servicos.map((s) => (
              <article
                key={s.title}
                className="flex gap-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="text-xl text-primary">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-x-10 bottom-4 top-10 rounded-[2.5rem] bg-secondary" />
            <img
              src={sobreImg.url}
              alt="Retrato de Iuri Dall Olmo"
              className="relative w-full"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">
              Sobre mim
            </p>
            <h2 className="mt-4 text-3xl text-primary md:text-4xl">Iuri Dall Olmo</h2>
            <div className="mt-5 space-y-4 text-graphite/80">
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
            <p className="mt-6 text-sm text-muted-foreground">CRP 07/08900</p>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl">Como funciona o atendimento</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <div key={e.n} className="border-t border-primary-foreground/25 pt-5">
                <p className="font-display text-4xl text-primary-foreground/60">{e.n}</p>
                <h3 className="mt-3 text-xl">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO + AGENDA */}
      <section id="contato" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl text-primary md:text-4xl">Contato e redes</h2>
            <p className="mt-3 text-muted-foreground">
              Estou à disposição para tirar dúvidas antes da primeira sessão.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <span>
                    <span className="block text-sm font-medium">WhatsApp</span>
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
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <Instagram className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <span>
                    <span className="block text-sm font-medium">Instagram</span>
                    <span className="block text-sm text-muted-foreground">
                      @clinica.iuridallolmo
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:iuridallolmo@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <span>
                    <span className="block text-sm font-medium">E-mail</span>
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
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <span>
                    <span className="block text-sm font-medium">Consultório</span>
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
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl text-primary md:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-graphite text-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <img
              src={logoRodape.url}
              alt="Iuri Dall Olmo Psicologia"
              className="h-24 w-auto"
              loading="lazy"
            />
          </div>
          <div className="text-sm">
            <h3 className="text-lg text-secondary">Navegação</h3>
            <ul className="mt-3 space-y-2 text-secondary/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-secondary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-secondary/70">
            <h3 className="text-lg text-secondary">Contato</h3>
            <p className="mt-3">Rua Mariante 288/905, Porto Alegre - RS</p>
            <p className="mt-2">(51) 99639-8755</p>
            <p className="mt-2">iuridallolmo@gmail.com</p>
            <p className="mt-2">CRP 07/08900</p>
          </div>
        </div>
        <div className="border-t border-secondary/15">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-secondary/60 sm:flex-row">
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
