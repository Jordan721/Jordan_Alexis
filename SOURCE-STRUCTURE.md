# Portfolio source

Open index.html in a browser. No build is required.

The page links to main.css, which imports the active stylesheets. Add or reorder CSS imports in main.css.

Active styles:
- assets/css/journey.css: side-by-side experience chapters and achievement cards, filters, responsive stat cards, and expandable role details.
- assets/css/credentials.css: searchable credential gallery and responsive PDF detail viewer.
- assets/css/motion-toolkit.css: theme reveal, animated navigation, and searchable skill workbench.
- assets/css/creative.css: sketchbook and collage presentation, project illustrations, and responsive creative treatments. Loads after studio.css.
- assets/css/studio.css: design tokens, sticky header, introduction, work rows, About, experience, toolkit, education, activity, contact, responsive layouts, and light/dark themes.
- assets/css/modals.css: resume and certification dialog layouts.

Active JavaScript:
- credentials.js: certificate data, category/search filters, detail view, PDF links, and related learning tracks.
- motion-toolkit.js: navigation highlight and the toolkit filters, search, pinned skill mix.
- main.js: initializes sections, experience counters, filters, and active navigation.
- navigation-theme.js: mobile menu, theme selection, and project expansion.
- modals.js: dialog focus management, nested program details, Escape handling, and background scroll/inert state.
- interactions.js: shared scrolling and back-to-top behavior.
- activity.js: GitHub repositories and commits.

Scripts remain classic scripts to support existing inline handlers. Images and PDFs retain their original paths. Previous CSS files and effects.js are retained as inactive source; main.css lists the active CSS imports and index.html lists the active scripts. Trail folders are preserved.
