import { defineStore } from 'pinia';
import type { Product } from '~/types/product';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[],
  }),
  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price, 0),
  },
  actions: {
    addToCart(product: Product) {
      this.items.push(product);
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId); 
    },
  },
});
