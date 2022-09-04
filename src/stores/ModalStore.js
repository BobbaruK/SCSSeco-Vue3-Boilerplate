import { defineStore } from "pinia";

export const useModalStore = defineStore("ModalStore", {
  state: () => ({
    cancelModalFirstShow: false,
  }),
  getters: {},
  actions: {
    cancelModal() {
      this.cancelModalFirstShow = true;
    },
  },
});
