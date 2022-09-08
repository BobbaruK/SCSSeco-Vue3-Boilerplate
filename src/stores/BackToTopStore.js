import { defineStore } from "pinia";

export const useBackToTopStore = defineStore("BackToTopStore", {
  state: () => ({
    position: "fixed",
  }),
  getters: {},
  actions: {
    switchPosition() {
      this.position = this.position == "fixed" ? "absolute" : "fixed";
    },
  },
});
