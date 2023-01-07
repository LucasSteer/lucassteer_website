<template>
  <div>
    <img
      src="/favicon/favicon-57.png"
      alt="Lucas Steer's Logo"
      height="48"
      width="48"
      class="hidden h-12 w-12 tablet:block"
      @click="isExpanded = !isExpanded"
    />
    <fieldset
      v-if="isExpanded"
      class="absolute p-2 shadow-card rounded-lg dark:shadow-none dark:border-2 dark:border-white bg-white dark:bg-zinc-800 opacity-100"
    >
      <div>
        <input
          type="radio"
          id="system"
          name="drone"
          value="system"
          @input="setColourScheme('system')"
          :checked="colourScheme === 'system'"
        />
        <label for="system">System</label>
      </div>

      <div>
        <input
          type="radio"
          id="light"
          name="drone"
          value="light"
          @input="setColourScheme('light')"
          :checked="colourScheme === 'light'"
        />
        <label for="light">Light</label>
      </div>

      <div>
        <input
          type="radio"
          id="dark"
          name="drone"
          value="dark"
          @input="setColourScheme('dark')"
          :checked="colourScheme === 'dark'"
        />
        <label for="dark">Dark</label>
      </div>
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
    setColourScheme(colourScheme) {
      if (colourScheme) {
        if (colourScheme === 'system') {
          localStorage.removeItem('colourScheme');
        } else {
          localStorage.colourScheme = colourScheme;
        }
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
  computed: {
    colourScheme() {
      return localStorage.colourScheme ? localStorage.colourScheme : 'system';
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>
