
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Business first",
    description:
      "We start by understanding your goals, customers, and challenges before recommending a technology solution.",
  },
  {
    number: "02",
    title: "Built for people",
    description:
      "We focus on clear, intuitive digital experiences that make everyday tasks easier for your customers and team.",
  },
  {
    number: "03",
    title: "Practical innovation",
    description:
      "We use modern web technologies and AI where they solve real problems—not simply because they are trending.",
  },
  {
    number: "04",
    title: "Long-term thinking",
    description:
      "We aim to build maintainable digital foundations that can evolve as your business grows.",
  },
];

const capabilities = [
  "Website design and development",
  "AI and workflow automation",
  "Custom web applications",
  "CRM and business integrations",
  "SEO and digital growth",
  "Ongoing technical support",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B4232E] text-xl font-black text-white">
              e.
            </span>
            <span className="text-xl font-bold tracking-tight">
              ethixweb<span className="text-[#B4232E]">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link href="/" className="transition hover:text-[#B4232E]">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-[#B4232E]">
              Services
            </Link>
            <Link
              href="/about"
              className="font-semibold text-[#B4232E]"
              aria-current="page"
            >
              About
            </Link>
            <Link href="/#work" className="transition hover:text-[#B4232E]">
              Our Work
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-[#B4232E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8F1822]"
          >
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#171717] text-white">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#B4232E]/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#B4232E]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
              About Ethixweb India
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Technology should move your business{" "}
              <span className="text-red-400">forward.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              We believe digital solutions should do more than look good.
              They should solve real problems, simplify operations, and help
              businesses create better experiences for their customers.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-full bg-[#B4232E] px-6 py-3.5 font-semibold text-white transition hover:bg-[#8F1822]"
              >
                Explore our services <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-8">
            <p className="text-sm font-medium text-white/50">
              OUR APPROACH
            </p>
            <div className="mt-7 space-y-6">
              {[
                ["Understand", "Your goals, customers, and challenges"],
                ["Build", "The right solution for the problem"],
                ["Improve", "Through feedback, testing, and iteration"],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B4232E] font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h2 className="font-semibold">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 h-px bg-white/10" />
            <p className="mt-6 text-lg font-medium leading-7">
              We run the tech.{" "}
              <span className="text-red-400">You run the business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* India-focused story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B4232E]">
              Our perspective
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Digital solutions for the way Indian businesses grow.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-600">
            <p>
              India&apos;s business landscape is diverse, ambitious, and
              increasingly digital. From emerging startups to established
              businesses, organisations need technology that is useful,
              accessible, and designed around the people who use it.
            </p>
            <p>
              Our India-focused approach puts usability, mobile experiences,
              clear communication, and practical business outcomes at the
              centre of every solution. The goal is simple: make technology
              work harder for the people behind the business.
            </p>
            <p>
              Rather than treating every project the same, we believe in
              understanding each business first and choosing tools that fit
              its actual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#F7F5F3] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B4232E]">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Good technology starts with good thinking.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              Our principles help keep every decision focused on the people
              using the product and the business goals behind it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <span className="text-sm font-bold text-[#B4232E]">
                  {principle.number}
                </span>
                <h3 className="mt-7 text-xl font-semibold">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B4232E]">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              One digital partner. Multiple ways to grow.
            </h2>
            <p className="mt-5 leading-7 text-neutral-600">
              From your first website to smarter business workflows, explore
              the services that can support your next stage.
            </p>
            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#B4232E] hover:underline"
            >
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 font-bold text-[#B4232E]">
                  ✓
                </span>
                <span className="text-sm font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#B4232E] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Have a project in mind?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build something that works for you.
              </h2>
              <p className="mt-5 leading-7 text-white/80">
                Tell us what you want to improve. We&apos;ll help you explore
                the next steps.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-4 font-semibold text-[#B4232E] transition hover:bg-neutral-100 md:self-center"
            >
              Contact us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-neutral-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-bold text-neutral-900">
            ethixweb<span className="text-[#B4232E]">.</span>
          </Link>
          <p>Digital experiences built around your business.</p>
          <div className="flex gap-5">
            <Link href="/services" className="hover:text-[#B4232E]">
              Services
            </Link>
            <Link href="/contact" className="hover:text-[#B4232E]">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
