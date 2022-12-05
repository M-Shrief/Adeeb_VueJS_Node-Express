import { defineStore } from "pinia";

export const usePrintsStore = defineStore("print", {
  state: () => ({
    prints: []
  }),
  getters: {
    getPrints(state) {
      return state.prints
    }
  },
  actions: {
    addPrint(print)  {
      this.prints.push(print);
    },
    removePrint(print)  {
      this.prints.pop(print);
    }
  }
})