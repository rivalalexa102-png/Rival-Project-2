# Kabankalan Catholic College, Inc.

A responsive, static landing page for Kabankalan Catholic College, Inc. The site uses plain HTML, CSS, and JavaScript; no package installation or build step is required.

The layout is adapted from the provided Mentor Bootstrap education template. Its BootstrapMade attribution is retained in the page footer.

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
- `assets/vendor/` — Bootstrap and Bootstrap Icons from the supplied template
- `assets/css/main.css` — the supplied Mentor theme, customized by `styles.css`

The page uses externally hosted Google Fonts and Unsplash photographs.

## Publishing

GitHub Pages is configured through the workflow in `.github/workflows/pages.yml`. A push to `main` or the project branch validates the site and deploys the static files. The repository's Pages source must be set to **GitHub Actions**.
