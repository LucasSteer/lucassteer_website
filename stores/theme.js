import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({ theme: 'light' }),
  actions: {
    setLight() {
      this.theme = 'light';
    },
    setDark() {
      this.theme = 'dark';
    },
    setForcedColors() {
      this.theme = 'forcedColors';
    },
  },
});
