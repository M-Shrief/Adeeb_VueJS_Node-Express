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
      if (!this.getPrints.includes(print)) {
        this.prints.push(print);
      }
    },
    removePrint(print)  {
      let printIndex = this.getPrints.map(verse => verse._id).indexOf(print._id);
      this.getPrints.splice(printIndex, 1);
    }
  }
})