
import type { ReactNode } from "react";

const services = [
  {
    number: "01",
    title: "Websites that convert",
    description:
      "Fast, responsive websites with clear messaging, strong calls to action and SEO-ready foundations.",
    category: "Design & development",
  },
  {
    number: "02",
    title: "AI & automation",
    description:
      "Automate repetitive work, respond to enquiries faster and connect everyday business workflows.",
    category: "AI solutions",
  },
  {
    number: "03",
    title: "Web applications",
    description:
      "Custom portals, dashboards, booking journeys and digital tools designed around your operations.",
    category: "Custom software",
  },
  {
    number: "04",
    title: "CRM & integrations",
    description:
      "Connect forms, customer records, calendars and sales pipelines so important details stay in sync.",
    category: "Connected systems",
  },
  {
    number: "05",
    title: "SEO & digital growth",
    description:
      "Improve your technical foundations, local visibility and ability to turn online discovery into enquiries.",
    category: "Search & growth",
  },
  {
    number: "06",
    title: "Ongoing support",
    description:
      "Keep your digital systems updated, monitored and ready to evolve as your business grows.",
    category: "Care & maintenance",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, customers, challenges and goals before recommending a solution.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, user journey, priorities and a practical delivery plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design, develop and test a responsive experience with performance and usability in mind.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After launch, we help you maintain, measure and improve your digital setup.",
  },
];

const concepts = [
  {
    name: "Commerce, made simpler",
    type: "E-commerce concept",
    initials: "C/",
    className: "bg-[#F2DAD7]",
    accent: "text-[#A6232D]",
  },
  {
    name: "A smarter customer journey",
    type: "Automation concept",
    initials: "↗",
    className: "bg-[#E9E5DF]",
    accent: "text-[#292929]",
  },
  {
    name: "Digital, by design",
    type: "Business website concept",
    initials: "D.",
    className: "bg-[#DCE4E0]",
    accent: "text-[#30483F]",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        light ? "text-white/60" : "text-stone-500"
      }`}
    >
      <span
        className={`h-px w-7 ${light ? "bg-white/50" : "bg-[#B4232E]"}`}
      />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF9F7] text-[#202020]">
      {/* Navigation */}
      <header className="border-b border-black/10 bg-[#FAF9F7]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12"
        >
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B4232E] text-xl font-bold text-white">
              e.
            </span>
            <span className="text-xl font-bold tracking-[-0.06em]">
              ethixweb<span className="text-[#B4232E]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-stone-600 md:flex lg:gap-8">
            <a className="hover:text-[#B4232E]" href="#services">Services</a>
            <a className="hover:text-[#B4232E]" href="#work">Our work</a>
            <a className="hover:text-[#B4232E]" href="#about">About</a>
            <a className="hover:text-[#B4232E]" href="#process">Our process</a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B4232E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#8F1923] sm:px-5"
          >
            Let&apos;s talk <Arrow diagonal />
          </a>
        </nav>

        <div className="flex gap-5 overflow-x-auto border-t border-black/5 px-5 py-3 text-xs text-stone-600 md:hidden">
          <a className="shrink-0" href="#services">Services</a>
          <a className="shrink-0" href="#work">Our work</a>
          <a className="shrink-0" href="#about">About</a>
          <a className="shrink-0" href="#process">Our process</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#F3DEDC] opacity-60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24">
          <div>
            <Eyebrow>Digital operations · India</Eyebrow>

            <h1 className="max-w-3xl text-[2.8rem] font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              We run the tech.
              <br />
              <span className="text-[#B4232E]">You run</span> the business.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              From high-performing websites to AI-powered workflows, we help
              ambitious Indian businesses simplify operations, strengthen their
              digital presence and move forward with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#B4232E] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8F1923]"
              >
                Discuss your project <Arrow />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold transition hover:border-[#B4232E] hover:text-[#B4232E]"
              >
                Explore services <Arrow diagonal />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-stone-200 pt-6 text-xs text-stone-500">
              <span>Strategy-led</span>
              <span>Built for people</span>
              <span>Focused on outcomes</span>
            </div>
          </div>

          {/* Abstract digital operations visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#EAD8D5]/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#222222] p-5 text-white shadow-2xl shadow-black/10 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Your digital ecosystem
                  </p>
                  <p className="mt-1 text-sm font-medium">Connected. Clear. Capable.</p>
                </div>
                <span className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] text-white/70">
                  ETHIXWEB / IN
                </span>
              </div>

              <div className="relative my-8 flex min-h-[260px] items-center justify-center">
                <div className="absolute h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute h-40 w-40 rounded-full border border-white/15" />
                <div className="absolute h-24 w-24 rounded-full border border-[#D64A52]/60" />

                <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-2xl bg-[#B4232E] shadow-xl shadow-red-950/30">
                  <span className="text-3xl font-bold">e.</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/80">
                    Core
                  </span>
                </div>

                <div className="absolute left-0 top-5 rounded-xl border border-white/10 bg-[#303030] p-3 sm:left-3">
                  <p className="text-xs font-medium">AI & automation</p>
                  <p className="mt-1 text-[10px] text-white/50">Workflows</p>
                </div>
                <div className="absolute right-0 top-9 rounded-xl border border-white/10 bg-[#303030] p-3 sm:right-3">
                  <p className="text-xs font-medium">Web & apps</p>
                  <p className="mt-1 text-[10px] text-white/50">Experiences</p>
                </div>
                <div className="absolute bottom-5 left-0 rounded-xl border border-white/10 bg-[#303030] p-3 sm:left-3">
                  <p className="text-xs font-medium">CRM & data</p>
                  <p className="mt-1 text-[10px] text-white/50">Integrations</p>
                </div>
                <div className="absolute bottom-1 right-0 rounded-xl border border-white/10 bg-[#303030] p-3 sm:right-3">
                  <p className="text-xs font-medium">SEO & growth</p>
                  <p className="mt-1 text-[10px] text-white/50">Visibility</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-5">
                <p className="max-w-xs text-xs leading-5 text-white/60">
                  One thoughtful digital foundation for your next stage of growth.
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#B4232E]">
                  <Arrow diagonal />
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 left-5 rounded-full border border-stone-200 bg-white px-4 py-2.5 text-xs font-medium shadow-lg sm:left-10">
              Technology with purpose
            </div>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:items-center lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B4232E]">
            Your digital operations partner
          </p>
          <p className="max-w-3xl text-lg leading-8 tracking-tight text-stone-700 sm:text-xl">
            Less time wrestling with technology. More time building the
            business you set out to create.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-8 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                The right technology.
                <br />
                <span className="text-[#B4232E]">Without the complexity.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-600 sm:text-base">
              Bring your website, automation, customer journeys and digital
              support together with one practical approach.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex min-h-[260px] flex-col rounded-2xl border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D9A0A3] hover:shadow-xl hover:shadow-black/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-stone-400">
                    {service.number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 transition group-hover:border-[#B4232E] group-hover:bg-[#B4232E] group-hover:text-white">
                    <Arrow diagonal />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                  {service.description}
                </p>
                <p className="mt-6 border-t border-stone-100 pt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B4232E]">
                  {service.category}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-8 bg-[#F0EFEC] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Eyebrow>Selected directions</Eyebrow>
              <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Ideas built around outcomes.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-stone-600">
              Example design directions showing how we could approach different
              digital challenges. These are concepts, not completed client case studies.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {concepts.map((project, index) => (
              <article key={project.name} className="group">
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl ${project.className}`}
                >
                  <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-black/10 transition duration-500 group-hover:scale-110" />
                  <div className="absolute -right-4 -top-8 h-40 w-40 rounded-full border border-black/10" />
                  <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-black/10" />
                  <div className="relative flex h-[65%] w-[72%] flex-col justify-between rounded-xl border border-black/10 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur-sm transition duration-500 group-hover:-translate-y-2 sm:p-6">
                    <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-stone-500">
                      <span>Concept 0{index + 1}</span>
                      <span>Ethixweb</span>
                    </div>
                    <p className={`text-5xl font-bold tracking-[-0.08em] ${project.accent}`}>
                      {project.initials}
                    </p>
                    <div className="h-1 w-12 rounded-full bg-[#B4232E]" />
                  </div>
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-stone-600">
                    Concept
                  </span>
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#B4232E]">
                  {project.type}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-8 bg-[#222222] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <Eyebrow light>Why Ethixweb</Eyebrow>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
              Technology should move your business forward—not slow it down.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/65">
              Growing businesses often end up managing disconnected tools,
              inconsistent online experiences and repetitive manual tasks. We
              help bring those pieces together through considered design,
              useful automation and reliable development.
            </p>

            <div className="mt-9 divide-y divide-white/15 border-t border-white/15">
              {[
                ["Clarity first", "Understand the problem before choosing the technology."],
                ["Built for real use", "Responsive, accessible experiences for everyday customers."],
                ["Connected thinking", "Bring websites, leads and workflows into a clearer system."],
                ["Support beyond launch", "Create a foundation that can be maintained and improved."],
              ].map(([title, description]) => (
                <div key={title} className="grid gap-2 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-white/60">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-8 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Eyebrow>How we work</Eyebrow>
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                A clear process.
                <br />
                <span className="text-[#B4232E]">No guesswork.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-stone-600 sm:text-base">
                From the first conversation to launch and improvement, each
                stage has a purpose and a clear next step.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#B4232E] hover:gap-3"
              >
                Start a conversation <Arrow />
              </a>
            </div>

            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {steps.map((step) => (
                <div key={step.number} className="grid gap-3 py-6 sm:grid-cols-[60px_1fr] sm:gap-5">
                  <span className="text-sm text-[#B4232E]">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-stone-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-8 px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#B4232E] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Your next move starts here
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Let&apos;s make technology work for you.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Tell us what you&apos;re trying to build, improve or simplify.
                Let&apos;s find the right way forward.
              </p>
            </div>
            <a
              href="mailto:info@ethixweb.com?subject=Ethixweb%20India%20project%20enquiry"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#B4232E] transition hover:-translate-y-0.5 hover:bg-[#F7EDEB]"
            >
              Get in touch <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <a href="#home" className="flex w-fit items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B4232E] text-lg font-bold text-white">
                e.
              </span>
              <span className="text-lg font-bold tracking-[-0.06em]">
                ethixweb<span className="text-[#B4232E]">.</span>
              </span>
            </a>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-600">
              <a href="#services" className="hover:text-[#B4232E]">Services</a>
              <a href="#work" className="hover:text-[#B4232E]">Our work</a>
              <a href="#about" className="hover:text-[#B4232E]">About</a>
              <a href="#contact" className="hover:text-[#B4232E]">Contact</a>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-stone-200 pt-5 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Ethixweb. All rights reserved.</p>
            <p>Digital operations for ambitious businesses.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

