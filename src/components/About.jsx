import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutSection } = portfolioData;

  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="section-label">About</span>
          <h2 className="section-title">{aboutSection.title}</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-panel p-7 sm:p-8">
            <p className="text-lg leading-8 text-slate-700">{aboutSection.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutSection.profileHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-slate-900">What I bring</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {aboutSection.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {aboutSection.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}