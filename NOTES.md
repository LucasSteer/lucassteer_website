# Accessible Nav Menu

## Expandable Nav Without JavaScript

It seems like there is no way to do this

You would either need:

- parent selectors in CSS (which don't exist)
- to change the structure of the HTML (which would cause other accessibility issues)

The best I could do was this, but this had issues because selecting text within the menu would cause it to disappear because the button would have lost focus

```HTML
<template>
  <div class="container">
    <header
      class="h-16 bg-gray-400 flex flex-row justify-between static pr-8 pl-2 py-2"
    >
      <img
        src="favicon/favicon-310.png"
        alt="Lucas Steer's Logo"
        class="h-12 w-12"
      />
      <button class="__ham tablet:hidden">
        <img src="hamburger.png" alt="Menu icon" class="h-12 w-12" />
      </button>
      <nav class="sr-only tablet:m-0 tablet:not-sr-only">
        <ul class="flex flex-col tablet:flex-row">
          <li>
            <a class="" href="/">About Me</a>
          </li>
          <li>
            <a class="" href="myexperience">My Experience</a>
          </li>
          <li>
            <a class="" href="myprojects">My Projects</a>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt />
  </div>
</template>

<script>
require('@/assets/app.css'); // import all CSS
</script>

<style>
/* for hiding and showing the nav menu on mobile without javascript */
/* .__ham:focus {
  @apply hidden;
} */
.__ham:focus + nav {
  @apply not-sr-only absolute w-full top-0 right-0 bg-gray-700 mt-16;
}

nav a:focus {
  @apply not-sr-only absolute w-full top-0 right-0 bg-gray-700 mt-16;
}
</style>

```
