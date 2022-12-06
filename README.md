# lucassteer

## Build Setup

```bash
# install dependencies
$ sudo npm install --unsafe-perm --no-optional

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
# preview static project
$ npm run preview
```

## TODO

- Setup some sort of CI to automatically run builds based off of this repository
- Redesign navbar
  - Improve visuals of navbar at the mobile breakpoint (maybe a hamburger menu?)
- Redesign index page
  - More of a bubbled feature highlighting style, rather than blocks of text?
  - a11y issue
    - headings used for name and pronouns abuse heading structure (could be fixed as part of about me / index redesign)
  - modify note about the site regarding accessibility and JavaScript (as JavaScript is required to make certain components accessible, such as the accordions)
- Add darkMode
  - Redefine primary/secondary colours for darkMode (or one for both light and dark if possible)
  - Redesign any components necessary to use scaled gray backgrounds instead of shadows
  - Maybe: add manual toggle for dark mode (will need to check for best practices since I want to use prefers-color-scheme where possible)
- Redesign logo
  - More readable regardless of background colour (maybe a circle solid background?)
  - Could reduce colours and remove gradients to make the primary colour on the L

## BUG

- title not working
- favicon not working
- likely other head attrs
