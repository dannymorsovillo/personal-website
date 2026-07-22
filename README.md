# danny morsovillo — personal website

A single-page portfolio built with Vue 3 and Vite. Dark gradient background, monospace type,
a typewriter intro, scroll-reveal sections, and interactive project galleries that fan out on
hover or tap.

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html            page shell — fonts, favicon, <div id="app">, title
vite.config.js        Vite + @vitejs/plugin-vue, dev server on port 5173
src/
  main.js             creates the Vue app and mounts App.vue to #app
  components/
    App.vue           the entire site: template, script, and styles
public/               static assets served from / (images, icons, resume.pdf)
```

The site is deliberately one component. `App.vue` holds every section, so there is no router,
no store, and no prop passing — `main.js` is four lines and does nothing but mount it.

## Layout

The page is a fixed nav followed by four sections, each wrapped in a `.section-wrapper`
(max-width 900px, centered) whose inner `.section` is what actually animates.

| Section id             | Contents                                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `#about`               | Typewriter headline, circular headshot, second typewriter line, and a bio block with GitHub / LinkedIn / resume-download links |
| `#languages-and-tools` | Row of language and framework logos (Swift, C++, Java, Python, Vue, React)                                                     |
| `#projects`            | One `.project-wrapper` per project — fairwayd, make math count, and the raytracing engine                                      |
| `#contact`             | Email and phone icons plus the copyright line                                                                                  |

`nav` is `position: fixed` at the top with anchor links that jump to each section id, and lifts
each link slightly on hover.

## Components and behavior

Everything lives in [`src/components/App.vue`](src/components/App.vue), organized into three blocks.

### Template

Plain semantic markup. The only reactive bindings are the section headings held in `data()`
(`second_title`, `third_title`, `fourth_title`) — the rest is static content. Two `<span>`
elements carry `ref="typed1"` and `ref="typed2"` as targets for the typewriter effect.

### Script

Three pieces of behavior, all wired up in `mounted()`:

**Typewriter intro** — [typed.js](https://github.com/mattboldt/typed.js) drives the headline.
`typed1` types the greeting, and its `onComplete` callback starts `typed2` on the line under the
headshot. Both instances are destroyed in `beforeUnmount()`.

**Scroll reveal** — a single `IntersectionObserver` watches every `.section-wrapper` and
`.project-wrapper` at `threshold: 0` and toggles a `visible` class on the inner element.
It is direction-aware: when an element leaves the viewport the observer checks
`entry.boundingClientRect.top` and adds `from-above` if it exited through the top. That class
flips the hidden state to sit *above* the viewport instead of below, so content animates back in
from the direction you are scrolling from — whether you are going down or back up. The observer
is disconnected in `beforeUnmount()`.

**Gallery toggle** — the fairwayd and make-math-count galleries spread their stacked screenshots
on `:hover` for mouse users. For touch, a click listener toggles an `is-active` class that
produces the same spread, opening one gallery at a time; a document-level click listener closes
them again.

### Styles

Two blocks. The unscoped `<style>` sets the fixed background gradient on `html, body` and defines
the design tokens on `:root`:

| Token               | Purpose                                 |
| ------------------- | --------------------------------------- |
| `--font-mono`       | Monospace stack used site-wide          |
| `--color-text`      | Body and heading color                  |
| `--color-nav`       | Nav bar background                      |
| `--radius`          | Shared image corner radius              |
| `--reveal-distance` | How far a section travels as it reveals |
| `--reveal-scale`    | Starting scale of a revealing section   |
| `--reveal-duration` | Reveal transition length                |
| `--lift-duration`   | Hover-lift transition length            |

The scoped `<style>` is organized top to bottom as: base typography → navigation → section layout
→ scroll reveal → about → projects and galleries → hover lift → responsive.

The responsive block (`max-width: 768px`) makes the tools row a horizontally scrollable flex row,
tightens project spacing, shrinks the galleries and their fan-out distances, and softens the
reveal by overriding just `--reveal-distance` and `--reveal-scale`.

## Notes

- `jquery` and `tailwindcss` appear in `package.json` but are not currently used by the site —
  safe to remove if they stay unused.
- Assets in `public/` are referenced by absolute path (`/headshot.png`, `/resume.pdf`) and are
  copied as-is into the build.
