# Katlego Dhlamini — Portfolio

A responsive, single-page portfolio built with React and Vite. It introduces Katlego's design and development services, experience, and contact options.

## Getting started

Run these commands from the `Portfolio` directory:

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Page structure

- `src/App.jsx` composes the site banner, page content, and expandable footer.
- `src/components/headerSection.jsx` renders the service banner, current-section label, reading-progress bar, and color-theme control.
- `src/pages/home.jsx` contains the introduction and homepage portrait, followed by the About and Services sections.
- `src/pages/about.jsx` presents the business-focused introduction, services, and working approach.
- `src/pages/skills.jsx` presents website creation, apps, software solutions, and the design/development toolkit.
- `src/components/footerSection.jsx` contains the expandable contact panel and profile links.
- `src/components/WhatsAppButton.jsx` provides a floating WhatsApp link for direct project inquiries.

The project gallery is intentionally not included in the current page flow.

## WhatsApp contact

The floating WhatsApp button opens a new chat to the portfolio owner's number using WhatsApp's international `wa.me` URL format. Update the country-code-prefixed number and optional prefilled message in `src/components/WhatsAppButton.jsx` if the contact details change.

## Light and dark mode

Use the **Dark mode** / **Light mode** button in the top banner to switch themes. The selection is saved in browser `localStorage` under `portfolio-theme-v2`, so it is kept after reloading the page. The default theme is light. Previous saved theme preferences are not carried over, so visitors see light mode on their first visit after this update.

The app applies the `dark-mode` class to the document root. Theme styles are in:

- `src/css/stylesheet.css` for shared layout, the banner, homepage, and footer.
- `src/css/AboutStylesheet_new.css` for the About section.
- `src/css/Skills.css` for the services and skills section.

When adding UI, use the existing `.dark-mode` styles or add matching dark-theme styles for new surfaces.
