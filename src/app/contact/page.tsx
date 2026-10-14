"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormMessage("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        service: String(formData.get("service") || "").trim(),
        budget: String(formData.get("budget") || "").trim(),
        message: String(formData.get("message") || "").trim(),
      };

      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setFormMessage(
          result.error || "Unable to submit your enquiry. Please try again.",
        );
        return;
      }

      setFormMessage(
        "Thank you! Your enquiry has been submitted successfully.",
      );

      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setFormMessage(
        "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Header */}
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
            <Link href="/" className="hover:text-[#B4232E]">
              Home
            </Link>
            <Link href="/services" className="hover:text-[#B4232E]">
              Services
            </Link>
            <Link href="/about" className="hover:text-[#B4232E]">
              About
            </Link>
          </nav>

          <Link
            href="/contact"
            aria-current="page"
            className="rounded-full bg-[#B4232E] px-5 py-3 text-sm font-semibold text-white"
          >
            Contact us
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#171717] px-5 py-16 text-white sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Get in touch
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Have an idea? Let&apos;s make it{" "}
            <span className="text-red-400">happen.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Tell us about your business and what you want to improve. We&apos;ll
            use the details to understand your project requirements.
          </p>
        </div>
      </section>

      {/* Contact form and details */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <aside>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B4232E]">
            Start a conversation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s understand your goals.
          </h2>
          <p className="mt-5 leading-7 text-neutral-600">
            Whether you need a new website, an AI-powered workflow, or a custom
            web application, share a few details to get started.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex gap-4 rounded-2xl border border-neutral-200 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-[#B4232E]">
                ↗
              </span>
              <div>
                <h3 className="font-semibold">Tell us your idea</h3>
                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  Describe the challenge, project, or process you want to
                  improve.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-neutral-200 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-[#B4232E]">
                ✓
              </span>
              <div>
                <h3 className="font-semibold">Explore the right solution</h3>
                <p className="mt-1 text-sm leading-6 text-neutral-600">
                  Identify the services and next steps that fit your
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-9">
          <h2 className="text-2xl font-semibold">Project enquiry</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-500">
            Fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Work email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium"
              >
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={150}
                placeholder="Your company (optional)"
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-medium"
              >
                What do you need help with? *
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Website Design & Development">
                  Website Design &amp; Development
                </option>
                <option value="AI & Workflow Automation">
                  AI &amp; Workflow Automation
                </option>
                <option value="Web Application">Web Application</option>
                <option value="CRM & Integrations">
                  CRM &amp; Integrations
                </option>
                <option value="SEO & Digital Growth">
                  SEO &amp; Digital Growth
                </option>
                <option value="Maintenance & Support">
                  Maintenance &amp; Support
                </option>
                <option value="Other">Other / Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="mb-2 block text-sm font-medium"
              >
                Estimated budget
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
              >
                <option value="">Select a range (optional)</option>
                <option value="Under ₹25,000">Under ₹25,000</option>
                <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                <option value="₹50,000–₹1,00,000">₹50,000–₹1,00,000</option>
                <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                <option value="Not decided">Not decided</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                placeholder="What are you looking to build or improve?"
                className="w-full resize-y rounded-xl border border-neutral-300 px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-[#B4232E] focus:ring-2 focus:ring-red-100"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#B4232E] px-6 py-4 font-semibold text-white transition hover:bg-[#8F1822] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              {!isSubmitting && <span aria-hidden="true">↗</span>}
            </button>

            {formMessage && (
              <p
                role="status"
                aria-live="polite"
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-800"
              >
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-neutral-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-bold text-neutral-900">
            ethixweb<span className="text-[#B4232E]">.</span>
          </Link>
          <p>We run the tech. You run the business.</p>
          <div className="flex gap-5">
            <Link href="/services" className="hover:text-[#B4232E]">
              Services
            </Link>
            <Link href="/about" className="hover:text-[#B4232E]">
              About
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
