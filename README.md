# Kabankalan Catholic College, Inc.

A responsive, static landing page for Kabankalan Catholic College, Inc. The site uses plain HTML, CSS, and JavaScript; no package installation or build step is required.

## Preview locally

Open `index.html` in a browser, or start a local web server from the project directory:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

- `index.html` — page content and navigation
- `styles.css` — visual design and responsive layouts
- `script.js` — mobile navigation and current-year footer
- `assets/` — site identity artwork

The page uses externally hosted Google Fonts and Unsplash photographs.

## Publishing

GitHub Pages is configured through the workflow in `.github/workflows/pages.yml`. A push to `main` or the project branch validates the site and deploys the static files. The repository's Pages source must be set to **GitHub Actions**.
