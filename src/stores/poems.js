import { defineStore } from 'pinia'
import axios from "axios"

export const usePoemStore = defineStore("poem",{
    state: () => ({
      poems: [],
      poem: {}
    }),
    getters: {
      getPoems(state) {
        return state.poems
      },
      getPoem(state) {
        return state.poem
      },
    },
    actions: {
      async fetchPoems() {
        try {
          const req = await axios.get("http://localhost:3000/api/poems_intros");
            this.poems = req.data;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchPoem(id) {
        try {
          let apiPoem = "http://localhost:3000/api/poem/" + id;
          let reqPoem = await axios.get(apiPoem);
          this.poem = reqPoem.data;
          
          this.fetchOtherPoems(id);
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
      },
      async fetchOtherPoems(id) {
        try {
          let apiPoemsIntros = "http://localhost:3000/api/poems_intros";
          let reqPoemsIntros = await axios.get(apiPoemsIntros);

          this.poems = reqPoemsIntros.data;
          let poemIndex = this.poems.map(poem => poem._id).indexOf(id);
          this.poems.splice(poemIndex, 1);
        }
        catch(error) {
          alert(error);
          console.log(error);
        }
      }
    },
})