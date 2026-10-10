# INFINI Coaching Institute Website

## Overview
The INFINI Coaching Institute website is a modern, fully responsive frontend project designed to showcase the academic programs, hands-on laboratory facilities, and core philosophies of INFINI. Catering to students from grades 1 through 12 across all major boards (CBSE, ICSE, WBBSE, WBCHSE), the website provides a seamless user experience across all devices.

The project is built entirely with core web technologies, ensuring lightweight performance, maintainability, and clean code architecture without reliance on heavy frameworks or external libraries.

## Key Features
* **Dark and Light Theme Toggle:** Implemented using CSS variables and Vanilla JavaScript, allowing users to switch themes seamlessly. The user's preference is saved in the browser's `localStorage` for persistent state across pages and sessions.
* **Fully Responsive Design:** Utilizes CSS Flexbox and CSS Grid alongside media queries to ensure a flawless layout on mobile phones, tablets, and desktop monitors.
* **Modular Codebase:** Features a highly organized file structure with global stylesheets and scripts alongside page-specific CSS and JavaScript files.
* **SVG Iconography:** Uses inline scalable vector graphics (SVGs) for all icons, ensuring crisp resolution on high-DPI displays and reducing external HTTP requests.
* **Interactive Gallery:** Includes a fully functional Vanilla JavaScript filtering system to sort gallery images by categories such as Classrooms, Lab Sessions, and Events.
* **Scroll Animations:** Implements the native Intersection Observer API to trigger smooth, lightweight reveal animations as elements enter the viewport on the Course, Lab, and About pages.
* **Semantic HTML5:** Built with accessibility and SEO in mind, using proper structural tags and semantic document outlines.

## Tech Stack
* **HTML5:** Semantic structure and layout.
* **CSS3:** Custom styling, CSS variables (Custom Properties) for theming, Flexbox, Grid, and CSS transitions.
* **Vanilla JavaScript (ES6+):** DOM manipulation, event handling, theme state management, and scroll observation.

## Project Structure
```text
infini/
│
├── index.html          # Home page
├── course.html         # Details of subjects and boards
├── lab.html            # Virtual tour of the educational lab facilities
├── gallery.html        # Image gallery with category filtering
├── about.html          # Institute mission, vision, and story
├── contact.html        # Contact details and inquiry form
│
├── css/
│   ├── style.css       # Global root styling and CSS variables
│   ├── index.css       # Home page specific styling
│   ├── course.css      # Course page specific styling
│   ├── lab.css         # Lab page specific styling
│   ├── gallery.css     # Gallery page specific styling
│   ├── about.css       # About page specific styling
│   └── contact.css     # Contact page specific styling
│
├── js/
│   ├── script.js       # Global scripts (theme toggle, mobile menu)
│   ├── index.js        # Home page specific logic
│   ├── course.js       # Course page scroll animations
│   ├── lab.js          # Lab page scroll animations
│   ├── gallery.js      # Gallery category filtering logic
│   ├── about.js        # About page scroll animations
│   └── contact.js      # Contact form submission simulation
│
└── img/
    └── logo.png        # Brand logo
