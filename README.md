# lucassteer

## Build Setup

```bash
# install dependencies
$ sudo npm install --unsafe-perm --no-optional

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## TODO

- Add darkMode
  - Redefine primary/secondary colours for darkMode (or one for both light and dark if possible)
  - Redesign any components necessary to use scaled gray backgrounds instead of shadows
  - Maybe: add manual toggle for dark mode (will need to check for best practices since I want to use prefers-color-scheme where possible)
- Enhance ExperienceCard component
  - Special icon for the expansion caret
  - aria-expanded / aria-controls for accordion functionality
    - Resources:
      - [aria-expanded MDN docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
      - [accordion example in w3 docs](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion)
      - [details element MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
      - [animating the details element by CSS tricks](https://css-tricks.com/how-to-animate-the-details-element/)
  - prefers-reduced-motion considerations for accordion animation or functionality
    - Resources:
      - [prefers-reduced-motion MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
      - [Google Dev docs about prefers-reduced-motion](https://web.dev/prefers-reduced-motion/)
      - [prefers-reduced-motion support in Tailwind docs](https://tailwindcss.com/docs/animation#prefers-reduced-motion)
- Redesign index page
  - More of a bubbled feature highlighting style, rather than blocks of text?
- Redesign navbar
  - Improve visuals of navbar at the mobile breakpoint (maybe a hamburger menu?)
- Redesign logo
  - More readable regardless of background colour (maybe a circle solid background?)
  - Could reduce colours and remove gradients to make the primary colour on the L
- Setup some sort of CI to automatically run builds based off of this repository

## Bugs

- Stutter when collapsing ExperienceCards with Promotions
  - Stutter when collapsing ExperienceCards on lower power devices
