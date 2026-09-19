import { portfolioData } from '../data/portfolioData';

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I can help with</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {portfolioData.services.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(14,165,233,0.12)]">
              <div className="h-48 overflow-hidden border-b border-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-lg text-sky-600">
                  ✦
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
