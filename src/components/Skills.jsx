import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillGroups } = portfolioData;

  return (
    <section id="skills" className="bg-slate-100/80 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Core strengths that help me build reliable, user-focused products.</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-panel p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}