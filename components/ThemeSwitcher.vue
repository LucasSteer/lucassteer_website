<template>
  <div>
    <button ref="themeSwitcherButton" @click="toggleThemeSwitcher">
      <svg
        height="48"
        width="48"
        :viewBox="themeIconViewboxList[colourScheme]"
        class="stroke-none fill-grey dark:fill-white"
      >
        <use :xlink:href="`icons/${colourScheme}ThemeIcon.svg#svg5`"></use>
      </svg>
    </button>
    <fieldset
      ref="themeSwitcher"
      v-if="isExpanded"
      class="absolute mt-4 z-10 right-5 py-2 pl-2 pr-4 flex flex-col gap-1 shadow-card rounded-lg dark:shadow-none dark:border-2 dark:border-white bg-white dark:bg-zinc-800 opacity-100"
    >
      <label for="system">
        <input
          type="radio"
          id="system"
          name="system"
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
        <span class="pl-1"> System </span>
      </label>
      <label for="light">
        <input
          type="radio"
          id="light"
          name="light"
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
        <span class="pl-1"> Light </span>
      </label>
      <label for="dark">
        <input
          type="radio"
          id="dark"
          name="dark"
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
        <span class="pl-1"> Dark </span>
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
    toggleThemeSwitcher() {
      this.isExpanded = !this.isExpanded;

      // if the theme switcher isn't open, we don't need the click handler
      if (!this.isExpanded) {
        return;
      }

      const clickOutsideCallback = (event) => {
        // handle case where the click handler is added when opening the theme switcher
        if (
          this.$refs.themeSwitcherButton.contains(event.target) &&
          this.isExpanded
        ) {
          return;
        }

        // if we're clicking on the theme switcher, we don't want to close
        if (this.$refs.themeSwitcher.contains(event.target)) {
          return;
        }

        this.isExpanded = false;
        window.removeEventListener('click', clickOutsideCallback);
      };

      window.addEventListener('click', clickOutsideCallback);
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
