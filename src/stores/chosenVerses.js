import { defineStore } from 'pinia';
import axios from 'axios';

export const useChosenVerseStore = defineStore('chosenVerse', {
  state: () => ({
    chosenVerses: [],
  }),
  getters: {
    getChosenVerses(state) {
      return state.chosenVerses;
    },
  },
  actions: {
    async fetchChosenVerses() {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/chosenverses`
        );
        this.chosenVerses = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchRandomChosenVerses(num) {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/chosenverses_random/${num}`
        );
        this.chosenVerses = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
