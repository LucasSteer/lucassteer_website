<template>
  <div>
    <button
      ref="themeSwitcherButton"
      @click="toggleThemeSwitcher"
      aria-controls="themeSwitcher"
      :aria-expanded="isExpanded ? 'true' : 'false'"
    >
      <span class="sr-only">Toggle theme switcher menu</span>
      <svg
        height="48"
        width="48"
        :viewBox="themeIconViewboxList[colourScheme]"
        class="stroke-none fill-grey dark:fill-white"
      >
        <title>{{ colourScheme }} theme icon</title>
        <use :xlink:href="`icons/${colourScheme}ThemeIcon.svg#svg5`"></use>
      </svg>
    </button>
    <fieldset
      ref="themeSwitcher"
      id="themeSwitcher"
      v-if="isExpanded"
      class="absolute mt-4 z-10 right-5 flex flex-col shadow-card rounded-lg dark:shadow-none dark:border-2 dark:border-white bg-white dark:bg-zinc-800 opacity-100"
    >
      <label
        for="system"
        class="py-2 pl-3 pr-6 rounded-t-lg hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{ 'bg-grey-50 dark:bg-zinc-700': colourScheme === 'system' }"
      >
        <input
          type="radio"
          id="system"
          name="theme"
          value="system"
          @input="setColourScheme('system')"
          :checked="colourScheme === 'system'"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['system']"
          class="stroke-none fill-grey dark:fill-white peer-checked:fill-green-highlight dark:peer-checked:fill-greenDarkMode-highlight inline"
        >
          <use xlink:href="icons/systemThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          System
        </span>
      </label>
      <label
        for="light"
        class="py-2 pl-3 pr-6 hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{ 'bg-grey-50 dark:bg-zinc-700': colourScheme === 'light' }"
      >
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          @input="setColourScheme('light')"
          :checked="colourScheme === 'light'"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['light']"
          class="stroke-none fill-grey dark:fill-white peer-checked:fill-green-highlight inline"
        >
          <use xlink:href="icons/lightThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          Light
        </span>
      </label>
      <label
        for="dark"
        class="py-2 pl-3 pr-6 rounded-b-lg hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{ 'bg-grey-50 dark:bg-zinc-700': colourScheme === 'dark' }"
      >
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          @input="setColourScheme('dark')"
          :checked="colourScheme === 'dark'"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['dark']"
          class="stroke-none fill-grey dark:fill-white dark:peer-checked:fill-greenDarkMode-base inline"
        >
          <use xlink:href="icons/darkThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          Dark
        </span>
      </label>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  mounted() {
    this.setColourScheme();

    // Add event listener to handle OS preference switching
    // NOTE: I know I'm only using one of these and that it will persist through the app's lifetime, so no need to remove listener
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      if ('colourScheme' in localStorage) return; // only handle OS preference

      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  },
  methods: {
    clickOutsideCallback(event) {
      // ignore clicks within the the theme switcher and on the toggle button
      if (
        this.$refs.themeSwitcher.contains(event.target) ||
        this.$refs.themeSwitcherButton.contains(event.target)
      ) {
        return;
      }

      this.closeThemeSwitcher();
    },
    keyupCallback(event) {
      if (event.key === 'Enter' || event.key === 'Escape') {
        this.closeThemeSwitcher();
      }
    },
    closeThemeSwitcher() {
      window.removeEventListener('click', this.clickOutsideCallback);
      window.removeEventListener('keyup', this.keyupCallback);

      this.isExpanded = false;
    },
    toggleThemeSwitcher() {
      if (!this.isExpanded) {
        // open the theme switcher
        this.isExpanded = true;

        window.addEventListener('click', this.clickOutsideCallback);
        window.addEventListener('keyup', this.keyupCallback);
      } else {
        this.closeThemeSwitcher();
      }
    },
    setColourScheme(newColourScheme) {
      if (newColourScheme) {
        if (newColourScheme === 'system') {
          localStorage.removeItem('colourScheme');
        } else {
          localStorage.colourScheme = newColourScheme;
        }

        this.colourScheme = newColourScheme;
      }

      // On page load or when changing colour schemes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.colourScheme === 'dark' ||
        (!('colourScheme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
  data() {
    return {
      colourScheme: localStorage.colourScheme
        ? localStorage.colourScheme
        : 'system',
      themeIconViewboxList: {
        system: '-50 -50 534.92682 534.9278',
        light: '0 0 561.66656 561.66669',
        dark: '-50 -50 388.37381 395.4344',
      },
      isExpanded: false,
    };
  },
};
</script>
