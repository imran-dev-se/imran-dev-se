import { portfolioData } from '../data/portfolioData';

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 p-8 text-center text-white shadow-[0_30px_90px_rgba(14,165,233,0.28)] sm:p-12">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-50">
            Contact
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something amazing.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-50/90">{portfolioData.contact}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow-sm transition hover:bg-slate-100 active:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 visited:bg-white visited:text-sky-700"
            >
              Email Me
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-sky-700/20 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-white/15 active:bg-sky-900/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 visited:bg-sky-700/20 visited:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
