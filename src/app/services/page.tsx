
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Ethixweb India",
  description:
    "Explore Ethixweb's website development, AI automation, web applications, CRM integrations, SEO and digital support services for growing businesses.",
};

const services = [
  {
    number: "01",
    title: "Website design & development",
    intro: "A stronger first impression. A clearer path to action.",
    description:
      "We create responsive, user-focused websites that communicate your value, build trust and help visitors take the next step.",
    features: [
      "Business and corporate websites",
      "Responsive, mobile-first interfaces",
      "Landing pages and enquiry journeys",
      "Performance and technical SEO foundations",
    ],
  },
  {
    number: "02",
    title: "AI & workflow automation",
    intro: "Spend less time on repetitive work.",
    description:
      "Identify manual processes that can be streamlined with practical automation and carefully chosen AI capabilities.",
    features: [
      "Enquiry routing and follow-ups",
      "AI-assisted customer support workflows",
      "Repetitive task automation",
      "Workflow planning and integration",
    ],
  },
  {
    number: "03",
    title: "Web applications",
    intro: "Digital tools designed around your operations.",
    description:
      "Build useful web-based systems for customers, employees and business processes, with room to grow over time.",
    features: [
      "Customer and staff portals",
      "Booking and enquiry systems",
      "Dashboards and reporting interfaces",
      "Custom application development",
    ],
  },
  {
    number: "04",
    title: "CRM & system integrations",
    intro: "Help your tools work together.",
    description:
      "Connect customer information and everyday business tools to reduce manual data entry and improve visibility.",
    features: [
      "Lead capture and routing",
      "CRM and form integrations",
      "Calendar and notification workflows",
      "API integration and data flows",
    ],
  },
  {
    number: "05",
    title: "SEO & digital growth",
    intro: "Make it easier for the right people to find you.",
    description:
      "Strengthen your website's technical foundations and create a better experience for people discovering your business online.",
    features: [
      "Technical SEO foundations",
      "Page structure and metadata",
      "Local search readiness",
      "Performance and usability improvements",
    ],
  },
  {
    number: "06",
    title: "Maintenance & ongoing support",
    intro: "Keep your digital presence dependable.",
    description:
      "Support your website or application after launch with planned maintenance and continuous improvements.",
    features: [
      "Bug fixes and updates",
      "Performance checks",
      "Content and interface improvements",
      "Ongoing technical assistance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#202020]">
      <header className="border-b border-black/10">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12"
        >
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B4232E] text-xl font-bold text-white">
              e.
            </span>
            <span className="text-xl font-bold tracking-[-0.06em]">
              ethixweb<span className="text-[#B4232E]">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
            <a href="/services" className="font-semibold text-[#B4232E]">Services</a>
            <a href="/#work" className="hover:text-[#B4232E]">Our work</a>
            <a href="/about" className="hover:text-[#B4232E]">About</a>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B4232E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#8F1923] sm:px-5"
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#F1DAD8] blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
            <span className="h-px w-7 bg-[#B4232E]" />
            What we do
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Technology that works
            <span className="text-[#B4232E]"> for your business.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            From your first website to connected workflows, we help Indian
            businesses make practical digital improvements—with clarity at
            every stage.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[#B4232E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8F1923]"
            >
              Tell us what you need ↗
            </a>
            <a
              href="#all-services"
              className="rounded-full border border-stone-300 px-6 py-4 text-sm font-semibold hover:border-[#B4232E]"
            >
              Explore services ↓
            </a>
          </div>
        </div>
      </section>

      <section id="all-services" className="scroll-mt-8 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B4232E]">
              Our capabilities
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              The pieces that help your business move forward.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs tracking-widest text-[#B4232E]">
                    SERVICE / {service.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 text-[#B4232E]"
                  >
                    ↗
                  </span>
                </div>

                <h2 className="mt-7 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-3 font-medium text-stone-700">
                  {service.intro}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-3 border-t border-stone-100 pt-5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-stone-600"
                    >
                      <span className="mt-1 text-[#B4232E]" aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#222222] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Not sure where to begin?
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Start with the problem. We&apos;ll explore the right solution.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Share your goals and current challenges. The first step is
              understanding what your business actually needs.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#B4232E] px-6 py-4 text-sm font-semibold text-white hover:bg-[#D03640]"
          >
            Discuss a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <a href="/" className="font-bold tracking-tight">
            ethixweb<span className="text-[#B4232E]">.</span>
          </a>
          <div className="flex flex-wrap gap-5 text-stone-600">
            <a href="/" className="hover:text-[#B4232E]">Home</a>
            <a href="/about" className="hover:text-[#B4232E]">About</a>
            <a href="/contact" className="hover:text-[#B4232E]">Contact</a>
          </div>
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Ethixweb
          </p>
        </div>
      </footer>
    </main>
  );
}