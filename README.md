# Muhammad Imran | Portfolio

A personal portfolio website built with React and Vite to present software engineering experience, technical skills, projects, and professional background in a polished and accessible format.

This repository is structured as a public, profile-oriented portfolio and is intended for deployment via GitHub Pages using GitHub Actions. It serves as a professional landing page for showcasing work, technical capabilities, and contact information.

## Overview

This portfolio emphasizes a modern, clean, and responsive design with a strong emphasis on readability and professional presentation. It includes sections for the introduction, experience, technical focus, project work, and direct ways to connect.

## Stack

- React
- Vite
- JavaScript / JSX
- Tailwind CSS
- GitHub Pages
- GitHub Actions

## Highlights

- Responsive single-page portfolio experience
- Professional overview and personal introduction
- Experience timeline reflecting software and digital work history
- Skills and service-focused sections
- Project showcase area
- Contact section linking to email and GitHub
- Optimized for static hosting and GitHub Pages deployment

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment with GitHub Actions

This project is set up to work with a GitHub Actions deployment flow for GitHub Pages. The recommended approach is to automate the build and publish process from the repository itself, rather than manually uploading static files.

### Typical GitHub Actions flow

1. Push the project to the GitHub repository.
2. Ensure the repository has Pages enabled in the GitHub settings.
3. Configure GitHub Pages to use GitHub Actions as the source.
4. The workflow builds the Vite app and publishes the generated static output to the Pages site.

A standard workflow for this project uses the following pattern:

- install dependencies
- run the production build
- upload the contents of the dist folder
- publish to GitHub Pages

This keeps the deployment process repeatable, clean, and aligned with modern GitHub hosting practices.

## Repository Purpose

This repository is designed as a professional introduction and public portfolio for GitHub profile use. It reflects a software-focused identity and provides a clean, deployable home for personal work, skills, and professional contact details.

## Contact

- Email: imran.tech.se@gmail.com
- GitHub: https://github.com/imran-dev-se

## Notes

This project is intended as a personal portfolio and can be adapted further with additional work samples, certifications, case studies, or a custom domain over time.

## License

This project is intended for personal portfolio use and can be customized for individual branding or professional presentation requirements.
