import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as number[]
  }),
  actions: {
    addProduct(id: number) {
      if (!this.products.includes(id)) {
        this.products.push(id);
      }
    },
    
    removeProduct(id: number) {
      this.products = this.products.filter(fav => fav !== id);
      location.reload();
    },
  },
  persist: true 
})
