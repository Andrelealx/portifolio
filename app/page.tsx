import TechParticlesBackground from "@/components/TechParticlesBackground";

export default function Home() {
  const projects = [
    {
      title: "Sistema de Gestão Interna",
      desc: "Plataforma web para chamados, estoque, metas e relatórios.",
      tags: ["PHP", "MySQL", "JS"],
      link: "https://suporteunica.com",
    },
    {
      title: "Dashboard de Processos",
      desc: "Painel em tempo real com alertas e indicadores por setor.",
      tags: ["API", "Web", "Automação"],
      link: "#",
    },
    {
      title: "PWA de Rastreamento",
      desc: "Interface web responsiva com foco em performance e UX.",
      tags: ["PWA", "Node", "UI/UX"],
      link: "#",
    },
  ];

  const certs = [
    {
      title: "HTML Essentials",
      org: "Cisco Networking Academy",
      year: "2026",
      badge: "CISCO • HTML",
      link: "https://www.credly.com/badges/41f8d156-9f2c-4634-b5a7-fa168dd39afe/linked_in_profile",
      logo: "/badges/cisco-html.png",
    },
    {
      title: "CSS Essentials",
      org: "Cisco Networking Academy",
      year: "2026",
      badge: "CISCO • CSS",
      link: "https://www.credly.com/badges/0377f889-9026-4856-9fa5-6242b523666b/linked_in_profile",
      logo: "/badges/cisco-css.png",
    },

      // Bradesco (NOVOS)
    {
      title: "Projetos de Sistemas de TI",
      org: "Fundação Bradesco • Escola Virtual",
      year: "2026",
      badge: "BRADESCO • 15h",
      link: "/certs/CertificadoProjetosDeSistemaDeTI.pdf",
      logo: "/badges/bradesco.png", // opcional (se não tiver, pode remover essa linha)
    },
    {
      title: "Lei Geral de Proteção de Dados (LGPD)",
      org: "Fundação Bradesco • Escola Virtual",
      year: "2026",
      badge: "BRADESCO • 2h",
      link: "/certs/CertificadoLGPD.pdf",
      logo: "/badges/bradesco.png", // opcional
    },
  ];

  const skills = [
    "PHP",
    "JavaScript",
    "Node.js",
    "MySQL",
    "MongoDB",
    "HTML/CSS",
    "Git/GitHub",
    "APIs",
    "Linux/Windows Server",
  ];

  return (
    <main className="relative min-h-screen bg-black text-zinc-100">
      {/* ===== FUNDO (high-tech sutil) ===== */}
      <TechParticlesBackground />

      {/* grid + scanlines (bem leve) */}
      <div className="pointer-events-none fixed inset-0 z-[1] tech-grid-animated" />
      <div className="pointer-events-none fixed inset-0 z-[2] tech-scanlines" />
      <div className="pointer-events-none fixed inset-0 z-[4] tron-scan" />

      {/* Glow blobs tron (bem discreto) */}
      <div className="pointer-events-none fixed inset-0 z-[3]">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-3xl tron-pulse" />
        <div className="absolute right-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-blue-500/14 blur-3xl tron-pulse" />
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-14">
        {/* Header */}
        <header className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm tracking-wide text-zinc-400">
              Portfólio • Desenvolvedor Full Stack
            </p>

            <h1 className="tech-glow text-4xl font-semibold leading-tight sm:text-5xl">
              André Leal
              <span className="block text-cyan-200/90">
                Construo sistemas que viram operação de verdade.
              </span>
            </h1>

            <p className="max-w-2xl text-zinc-300/90">
              Desenvolvedor com foco em sistemas web, automações e dashboards.
              Curto transformar bagunça operacional em software limpo, rápido e
              rastreável.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="rounded-xl bg-cyan-200 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-cyan-100"
              >
                Ver projetos
              </a>

              <a
                href="#certificados"
                className="rounded-xl border border-cyan-500/30 bg-zinc-950/30 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-cyan-400/70"
              >
                Certificados
              </a>

              <a
                href="#contato"
                className="rounded-xl border border-cyan-500/40 bg-zinc-950/30 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-cyan-400/70"
              >
                Contato
              </a>

              <a
                href="https://github.com/andrelealx"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-500/30 bg-zinc-950/30 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-cyan-400/70"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/andrelealx/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-500/30 bg-zinc-950/30 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-cyan-400/70"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Foco", v: "Web + Automação" },
              { k: "Stack", v: "PHP / JS / Node" },
              { k: "Entrega", v: "Do zero ao deploy" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-cyan-500/20 bg-zinc-950/35 p-5 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-wider text-zinc-400">
                  {item.k}
                </p>
                <p className="mt-2 text-lg font-medium text-zinc-100">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* Projects */}
        <section id="projetos" className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Projetos</h2>
            <p className="text-sm text-zinc-400">
              Seleção do que eu curto construir
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-cyan-500/20 bg-zinc-950/35 p-6 backdrop-blur hover:border-cyan-400/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-cyan-200/60 group-hover:text-cyan-200">
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-300/90">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-500/20 bg-black/30 px-3 py-1 text-xs text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certificados */}
        <section className="mt-16" id="certificados">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Certificados & Selos</h2>
            <p className="text-sm text-zinc-400">Credly / Cisco</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certs.map((c) => (
              <a
                key={c.link}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-cyan-500/20 bg-zinc-950/35 p-6 backdrop-blur hover:border-cyan-400/70"
              >
                <img
                  src={c.logo}
                  alt={`Selo ${c.title}`}
                  className="mb-3 h-14 w-auto opacity-95 tech-glow"
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {c.org} • {c.year}
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-500/25 bg-black/40 px-3 py-1 text-xs tracking-wider text-cyan-200">
                    {c.badge}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-cyan-200/70 group-hover:text-cyan-200">
                  <span>Ver credencial</span>
                  <span>↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-400">
            Ferramentas e áreas que eu uso no dia a dia pra entregar software
            utilizável.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-cyan-500/20 bg-zinc-950/35 px-4 py-2 text-sm text-zinc-200 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="mt-16">
          <div className="rounded-2xl border border-cyan-500/20 bg-zinc-950/35 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">Contato</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Quer trocar ideia sobre um projeto, vaga, freelas ou parceria? Manda
              mensagem.
            </p>

          <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:a.peterson.leal@outlook.com"
                className="rounded-xl bg-cyan-200 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-cyan-100"
              >
                Email
              </a>

              <a
                href="https://wa.me/5521988798777?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-cyan-500/30 bg-zinc-950/30 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-cyan-400/70"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Dica: depois a gente troca os links “#” pelos links reais dos
              projetos.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pb-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} • Feito com Next.js + Vercel
        </footer>
      </div>
    </main>
  );
}
