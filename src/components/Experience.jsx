import { portfolioData } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My journey so far</h2>
        </div>

        <div className="mt-10 space-y-6">
          {portfolioData.experience.map((item, index) => (
            <div key={item.company} className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:p-8">
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky-200 via-sky-400 to-transparent md:left-8" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4 md:gap-5">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700 md:h-11 md:w-11">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-600">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-900">{item.role}</h3>
                    <p className="mt-1 text-base text-slate-600">{item.company}</p>
                  </div>
                </div>

                <p className="max-w-xl text-base leading-7 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
