import { defineStore } from 'pinia';
import axios from 'axios';

export const usePoemStore = defineStore('poem', {
  state: () => ({
    poems: [],
    poem: {},
  }),
  getters: {
    getPoems(state) {
      return state.poems;
    },
    getPoem(state) {
      return state.poem;
    },
  },
  actions: {
    async fetchPoems() {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/poems_intros`
        );
        this.poems = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPoemAndOtherPoems(id) {
      try {
        let apiPoem = `${import.meta.env.VITE_API_URL}/poem/${id}`;
        let reqPoem = await axios.get(apiPoem);
        this.poem = reqPoem.data;

        this.fetchOtherPoems(id);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchOtherPoems(id) {
      try {
        let apiPoemsIntros = `${import.meta.env.VITE_API_URL}/poems_intros`;
        let reqPoemsIntros = await axios.get(apiPoemsIntros);

        this.poems = reqPoemsIntros.data;
        let poemIndex = this.poems.map((poem) => poem._id).indexOf(id);
        this.poems.splice(poemIndex, 1);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
