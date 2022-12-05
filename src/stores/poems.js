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
          const req = await axios.get('http://localhost:3000/api/poems')
            this.poems = req.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchPoem(id) {
        try {
          const apiUrl = "http://localhost:3000/api/poem/" + id;
          const req = await axios.get(apiUrl);
            this.poem = req.data;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})