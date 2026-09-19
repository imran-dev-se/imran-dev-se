import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, role, hero } = portfolioData;

  return (
    <section className="relative pt-6 pb-12" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-medium text-sky-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
            <span>{hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            {hero.titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-600">
              {hero.titleHighlight}
            </span>{' '}
            {hero.titleSuffix}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            I am <span className="text-slate-900 font-semibold">{name}</span>, a dedicated <span className="text-slate-900 font-semibold">{role}</span> with professional experience specializing in <span className="text-sky-600 font-semibold">React.js</span> and <span className="text-sky-600 font-semibold">React Native</span>. I transform complex requirements into fast, intuitive, and production-ready applications.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:shadow-light-glow transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-sky-600/20" href="#projects">
              <span>{hero.primaryButton}</span>
              <svg className="w-4 h-4 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </a>
            <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-sky-500 hover:text-sky-600 transition-all duration-200 shadow-sm" href="#contact">
              <span>{hero.secondaryButton}</span>
              <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute w-72 sm:w-88 h-72 sm:h-88 bg-sky-300/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="relative group">
            <div className="w-72 sm:w-80 md:w-88 aspect-[3/4] rounded-3xl p-2 bg-white border border-slate-200 shadow-xl overflow-hidden">
              <img alt={`${name} - ${role}`} className="w-full h-full object-cover object-top rounded-2xl transition duration-500 group-hover:scale-105" src={hero.profileImage} />
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200 flex items-center gap-3 shadow-lg shadow-slate-900/5">
              <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 leading-tight">{hero.metricValue}</div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">{hero.metricLabel}</div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 bg-white/95 backdrop-blur-xl py-3 px-4 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-lg shadow-slate-900/5">
              <div className="font-mono text-sky-600 font-extrabold text-base bg-sky-50 p-2 rounded-xl border border-sky-200">
                &lt;/&gt;
              </div>
              <div className="flex-1 text-xs">
                <span className="text-slate-900 font-semibold block">{hero.focusLabel}</span>
                <span className="text-slate-500 font-mono text-[11px]">{hero.focusMeta}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}