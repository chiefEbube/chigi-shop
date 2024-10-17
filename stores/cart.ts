import { defineStore } from "pinia";
import type { Product } from "~/types/product";
import type { CartItem } from "~/types/cartItem";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    itemCount: (state) =>
      state.items.reduce((count, item) => count + item.qtyInCart, 0),
    
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.discountedPrice * item.qtyInCart,
        0
      ),
      
    discountedTotal: (state) => {
      const total = state.items.reduce((total, item) => total + item.price * item.qtyInCart, 0);
      return total * 0.8;
    },

    totalPriceForItems: (state) => {
      return state.items.map(item => ({
        id: item.id,
        title: item.title,
        total: (item.discountedPrice * item.qtyInCart).toFixed(2),
      }));
    },
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.qtyInCart += 1;
      } else {
        const discountedPrice = product.price * 0.8;
        const discount = product.price * 0.2;
        this.items.push({ ...product, qtyInCart: 1, discountedPrice, discount });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },
});
