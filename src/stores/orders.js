import { defineStore } from "pinia";
import axios from "axios"

export const useOrdersStore = defineStore("order", {
  state: () => ({
    orders: [],
    // products: []
  }),
  getters: {
    getOrders(state) {
      return state.orders
    },
    // getProducts(state) {
    //   return state.products
    // }
  },
  actions: {
    async fetchOrders() {
      try {
        const req = await axios.get("http://localhost:3000/api/orders");
          this.orders = req.data;
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    },
    // addProduct(product)  {
    //   this.products.push(product);
    // },
    // removeProduct(product))  {}
  }
})