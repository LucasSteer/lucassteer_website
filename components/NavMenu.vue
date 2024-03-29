<template>
  <nav class="justify-self-start desktop:col-span-3 desktop:h-auto">
    <button
      class="group flex flex-row items-center gap-1 tablet:gap-2 shadow-card rounded-lg p-2 dark:shadow-none dark:border-2 dark:border-grey-400 hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600 desktop:hidden"
      @click="openNavMenu"
      ref="openNavMenuButton"
      aria-controls="navMenu"
      :aria-expanded="isNavMenuExpanded ? 'true' : 'false'"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="6"
        class="h-8 tablet:h-12 stroke-grey forced-colors:stroke-systemColors-CanvasText dark:stroke-white group-hover:stroke-green-highlight group-focus:stroke-green-highlight forced-colors:group-hover:stroke-systemColors-Highlight forced-colors:group-focus:stroke-systemColors-Highlight dark:group-hover:stroke-greenDarkMode-highlight dark:group-focus:stroke-greenDarkMode-highlight"
        role="img"
      >
        <path d="m 10 25 h 80 m -80 25 h 80 m -80 25 h 80" />
      </svg>
      <span
        class="text-md tablet:text-xl font-bold tracking-wide group-hover:text-green-highlight group-focus:text-green-highlight forced-colors:group-hover:text-systemColors-Highlight forced-colors:group-focus:text-systemColors-Highlight dark:group-hover:text-greenDarkMode-highlight dark:group-focus:text-greenDarkMode-highlight"
      >
        Menu
      </span>
    </button>
    <div
      class="flex flex-col fixed inset-0 z-20 overflow-y-auto desktop:overflow-y-hidden gap-12 px-4 pt-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out forced-colors:border-r-2 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-r-2 dark:border-grey-400 bg-white dark:bg-zinc-800 shadow-card desktop:shadow-none h-screen w-1/2 min-w-80 desktop:static desktop:h-auto desktop:w-auto desktop:px-0 desktop:pt-0 desktop:dark:border-r-0 desktop:forced-colors:border-r-0 desktop:transition-none desktop:translate-x-0"
      :class="{
        '-translate-x-full -z-10 dark:border-r-0 forced-colors:border-r-0 shadow-none':
          !isNavMenuExpanded,
      }"
      id="navMenu"
      ref="navMenu"
      @keydown.tab="handleTab"
      @keyup.escape="closeNavMenu"
    >
      <button
        class="group visible self-start shadow-card rounded-lg p-2 dark:shadow-none dark:border-2 dark:border-grey-400 hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600 desktop:hidden"
        :class="{ 'invisible desktop:visible': !isNavMenuExpanded }"
        @click="closeNavMenu"
        ref="closeNavMenuButton"
        aria-controls="navMenu"
        :aria-expanded="isNavMenuExpanded ? 'true' : 'false'"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="6"
          class="stroke-grey forced-colors:stroke-systemColors-CanvasText dark:stroke-white group-hover:stroke-green-highlight group-focus:stroke-green-highlight forced-colors:group-hover:stroke-systemColors-Highlight forced-colors:group-focus:stroke-systemColors-Highlight dark:group-hover:stroke-greenDarkMode-highlight dark:group-focus:stroke-greenDarkMode-highlight h-12 tablet:h-12"
          role="img"
        >
          <title>Close Navigation Menu</title>
          <path d="m 10 10 l 80 80 m -80 0 l 80 -80" />
        </svg>
      </button>
      <ul
        class="visible flex flex-col gap-6 tablet:gap-12 pl-12 desktop:flex-row desktop:justify-between desktop:px-1 desktop:gap-7"
        :class="{ 'invisible desktop:visible': !isNavMenuExpanded }"
      >
        <li>
          <NavLink url="/" text="About Me" />
        </li>
        <li>
          <NavLink url="/myexperiences" text="My Experiences" />
        </li>
        <li>
          <NavLink
            ref="myProjectsNavLink"
            url="/myprojects"
            text="My Projects"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  mounted() {
    this.focusableElements = Array.from(
      this.$el.querySelectorAll('a[href], button')
    ).slice(1); // remove the "open" button
  },
  methods: {
    openNavMenu() {
      this.isNavMenuExpanded = true;

      document.documentElement.classList.add('h-full', 'overflow-y-hidden'); // enable scroll-lock on body
    },
    closeNavMenu() {
      this.isNavMenuExpanded = false;

      document.documentElement.classList.remove('h-full', 'overflow-y-hidden'); // disable scroll-lock on body
    },
    clickOutsideCallback(event) {
      // ignore clicks within the the nav menu and on open button (to not block opening)
      if (
        this.$refs.navMenu.contains(event.target) ||
        this.$refs.openNavMenuButton.contains(event.target)
      ) {
        return;
      }

      this.closeNavMenu();
    },
    handleTab(event) {
      if (!this.isNavMenuExpanded) return;

      const focusedElementIndex = this.focusableElements.indexOf(
        document.activeElement
      );

      if (event.shiftKey) {
        if (focusedElementIndex === 0) {
          // handle shift-tabbing on the first element
          this.focusableElements[this.focusableElements.length - 1].focus();
        } else {
          // handle regular shift-tab
          this.focusableElements[focusedElementIndex - 1].focus();
        }
      } else {
        if (focusedElementIndex === this.focusableElements.length - 1) {
          // handle tabbing on the last element
          this.focusableElements[0].focus();
        } else {
          // handle regular tab
          this.focusableElements[focusedElementIndex + 1].focus();
        }
      }

      event.preventDefault();
    },
  },
  data() {
    return {
      focusableElements: [],
      isNavMenuExpanded: false,
    };
  },
  watch: {
    isNavMenuExpanded(newValue) {
      if (newValue) {
        window.addEventListener('click', this.clickOutsideCallback);

        this.$nextTick(() => {
          this.$refs.closeNavMenuButton.focus();
        });
      } else {
        window.removeEventListener('click', this.clickOutsideCallback);

        this.$nextTick(() => {
          this.$refs.openNavMenuButton.focus();
        });
      }
    },
  },
};
</script>
