import { portfolioData } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>{portfolioData.footer.copyrightText}</p>
        <div className="flex gap-5">
          <a href="#home" className="hover:text-cyan-300">Home</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
