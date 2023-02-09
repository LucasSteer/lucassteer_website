<template>
  <div>
    <button
      ref="themeSwitcherButton"
      @click="toggleThemeSwitcher"
      aria-controls="themeSwitcher"
      :aria-expanded="isExpanded ? 'true' : 'false'"
      class="group"
    >
      <svg
        :viewBox="themeIconViewboxList[selectedTheme]"
        class="h-12 stroke-none fill-grey forced-colors:fill-systemColors-CanvasText dark:fill-white group-hover:fill-green-highlight group-focus:fill-green-highlight forced-colors:group-hover:fill-systemColors-Highlight forced-colors:group-focus:fill-systemColors-Highlight dark:group-hover:fill-greenDarkMode-highlight dark:group-focus:fill-greenDarkMode-highlight"
      >
        <title>
          Toggle theme switcher menu - {{ selectedTheme }} theme icon
        </title>
        <use :xlink:href="`/icons/${selectedTheme}ThemeIcon.svg#svg5`"></use>
      </svg>
    </button>
    <fieldset
      ref="themeSwitcher"
      id="themeSwitcher"
      v-if="isExpanded"
      class="absolute mt-4 z-10 right-5 flex flex-col shadow-card rounded-lg forced-colors:border-2 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-2 dark:border-grey-400 bg-white dark:bg-zinc-800"
    >
      <label
        for="system"
        class="py-2 pl-3 pr-6 rounded-t-lg hover:bg-grey-50 active:bg-grey-100 forced-colors:hover:border-2 forced-colors:hover:m-[6px] forced-colors:hover:py-0 forced-colors:hover:pl-1 forced-colors:hover:pr-4 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{
          'bg-grey-50 forced-colors:border-2 forced-colors:m-[6px] forced-colors:py-0 forced-colors:pl-1 forced-colors:pr-4 dark:bg-zinc-700':
            activeElement === 'system',
        }"
      >
        <input
          type="radio"
          id="system"
          name="theme"
          value="system"
          @input="setSelectedTheme('system')"
          :checked="selectedTheme === 'system'"
          @focus="activeElement = 'system'"
          @blur="activeElement = ''"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['system']"
          class="stroke-none fill-grey forced-colors:fill-systemColors-CanvasText forced-colors:peer-checked:fill-systemColors-Highlight dark:fill-white peer-checked:fill-green-highlight dark:peer-checked:fill-greenDarkMode-highlight inline"
        >
          <use xlink:href="/icons/systemThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold forced-colors:peer-checked:text-systemColors-Highlight peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          System
        </span>
      </label>
      <label
        for="light"
        class="py-2 pl-3 pr-6 rounded-lg hover:bg-grey-50 active:bg-grey-100 forced-colors:hover:border-2 forced-colors:hover:m-[6px] forced-colors:hover:py-0 forced-colors:hover:pl-1 forced-colors:hover:pr-4 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{
          'bg-grey-50 forced-colors:border-2 forced-colors:m-[6px] forced-colors:py-0 forced-colors:pl-1 forced-colors:pr-4 dark:bg-zinc-700':
            activeElement === 'light',
        }"
      >
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          @input="setSelectedTheme('light')"
          :checked="selectedTheme === 'light'"
          @focus="activeElement = 'light'"
          @blur="activeElement = ''"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['light']"
          class="stroke-none fill-grey forced-colors:fill-systemColors-CanvasText forced-colors:peer-checked:fill-systemColors-Highlight dark:fill-white peer-checked:fill-green-highlight dark:peer-checked:fill-greenDarkMode-highlight inline"
        >
          <use xlink:href="/icons/lightThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold forced-colors:peer-checked:text-systemColors-Highlight peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          Light
        </span>
      </label>
      <label
        for="dark"
        class="py-2 pl-3 pr-6 rounded-b-lg hover:bg-grey-50 active:bg-grey-100 forced-colors:hover:border-2 forced-colors:hover:m-[6px] forced-colors:hover:py-0 forced-colors:hover:pl-1 forced-colors:hover:pr-4 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
        :class="{
          'bg-grey-50 forced-colors:border-2 forced-colors:m-[6px] forced-colors:py-0 forced-colors:pl-1 forced-colors:pr-4 dark:bg-zinc-700':
            activeElement === 'dark',
        }"
      >
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          @input="setSelectedTheme('dark')"
          :checked="selectedTheme === 'dark'"
          @focus="activeElement = 'dark'"
          @blur="activeElement = ''"
          class="appearance-none peer"
        />
        <svg
          width="35"
          height="35"
          :viewBox="themeIconViewboxList['dark']"
          class="stroke-none fill-grey forced-colors:fill-systemColors-CanvasText forced-colors:peer-checked:fill-systemColors-Highlight dark:fill-white peer-checked:fill-green-highlight dark:peer-checked:fill-greenDarkMode-highlight inline"
        >
          <use xlink:href="/icons/darkThemeIcon.svg#svg5"></use>
        </svg>
        <span
          class="pl-1 font-bold forced-colors:peer-checked:text-systemColors-Highlight peer-checked:text-green-base dark:peer-checked:text-greenDarkMode-base"
        >
          Dark
        </span>
      </label>
    </fieldset>
  </div>
</template>

<script>
import { useThemeStore } from '@/stores/theme';
import { mapStores } from 'pinia';

export default {
  name: 'ThemeSwitcher',
  mounted() {
    this.setSelectedTheme();

    // Don't worry about the theme if high-contrast mode is active
    window.matchMedia('(forced-colors: active)').onchange = (e) => {
      this.isForcedColorsActive = e.matches;

      if (this.isForcedColorsActive) {
        document.documentElement.classList.remove('dark');
        this.themeStore.setForcedColors();
      } else {
        this.setSelectedTheme();
      }
    };

    // Add event listener to handle OS preference switching
    // NOTE: I know I'm only using one of these and that it will persist through the app's lifetime, so no need to remove listener
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => {
      if ('selectedTheme' in localStorage) return; // only handle OS preference

      if (this.isForcedColorsActive) return; // don't handle theme if WHCM is on

      if (e.matches) {
        document.documentElement.classList.add('dark');
        this.themeStore.setDark();
      } else {
        document.documentElement.classList.remove('dark');
        this.themeStore.setLight();
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
    setSelectedTheme(newSelectedTheme) {
      if (newSelectedTheme) {
        if (newSelectedTheme === 'system') {
          localStorage.removeItem('selectedTheme');
        } else {
          localStorage.selectedTheme = newSelectedTheme;
        }

        this.selectedTheme = newSelectedTheme;
      }

      if (this.isForcedColorsActive) {
        this.themeStore.setForcedColors();
      } else if (
        localStorage.selectedTheme === 'dark' ||
        (!('selectedTheme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        this.themeStore.setDark();
      } else {
        document.documentElement.classList.remove('dark');
        this.themeStore.setLight();
      }
    },
  },
  computed: {
    ...mapStores(useThemeStore),
  },
  data() {
    return {
      isForcedColorsActive: window.matchMedia('(forced-colors: active)')
        .matches,
      selectedTheme: localStorage.selectedTheme
        ? localStorage.selectedTheme
        : 'system',
      themeIconViewboxList: {
        system: '-50 -50 534.92682 534.9278',
        light: '0 0 561.66656 561.66669',
        dark: '-50 -50 388.37381 395.4344',
      },
      isExpanded: false,
      activeElement: '',
    };
  },
};
</script>
