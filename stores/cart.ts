import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as number[]
  }),
  actions: {
    addProduct(id: number) {
      if (!this.products.includes(id)) {
        this.products.push(id)
      }
    },
    removeProduct(id: number) {
      this.products = this.products.filter(fav => fav !== id)
    },
    toggleFavorite(id: number) {
      if (this.products.includes(id)) {
        this.removeProduct(id)
      } else {
        this.addProduct(id)
      }
    }
  }
})
