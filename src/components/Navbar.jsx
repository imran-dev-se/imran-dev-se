import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const { name, role, github, resumePath, resumeDownloadName } = portfolioData;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 border-b border-slate-200/80 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="#home">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-cyan-500 p-[1.5px] shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/35 transition">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-mono font-bold text-lg text-sky-600 group-hover:text-sky-700 transition">
              MI
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-base tracking-wide flex items-center gap-1.5">
              {name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
            </span>
            <span className="text-xs text-sky-600 font-mono font-medium tracking-wider">{role}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200 shadow-inner">
          <a className="px-4 py-1.5 rounded-full text-sm font-semibold text-sky-700 bg-white border border-slate-200/90 shadow-sm transition" href="#home">Home</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#about">About</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#skills">Skills</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#services">Services</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#experience">Experience</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#projects">Projects</a>
          <a className="px-4 py-1.5 rounded-full text-sm font-medium text-slate-600 hover:text-sky-600 transition" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 transition duration-200 shadow-sm shadow-sky-600/30"
            href={resumePath}
            download={resumeDownloadName}
            aria-label="Download CV"
          >
            <svg className="w-4 h-4 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            <span>Download CV</span>
          </a>
          <a
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-sky-500 hover:text-sky-600"
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.22-.02-2.2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.95 10.95 0 012.87-.39c.97 0 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.66.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.53 11.53 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <div className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-amber-500 shadow-sm" title="Light Theme Active">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}