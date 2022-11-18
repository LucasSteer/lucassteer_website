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
  - accordion currently not very accessible (reads everything in button)
    - Resources:
      - [accordion example in w3 docs](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion)
      - [details element MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
      - [animating the details element by CSS tricks](https://css-tricks.com/how-to-animate-the-details-element/)
- Redesign index page
  - More of a bubbled feature highlighting style, rather than blocks of text?
- Redesign navbar
  - Improve visuals of navbar at the mobile breakpoint (maybe a hamburger menu?)
- Redesign logo
  - More readable regardless of background colour (maybe a circle solid background?)
  - Could reduce colours and remove gradients to make the primary colour on the L
- Setup some sort of CI to automatically run builds based off of this repository

## Known Issues

- prefers-reduced-motion messes with project card layout
