import { portfolioData } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="bg-slate-100/80 py-20">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(14,165,233,0.12)]">
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
