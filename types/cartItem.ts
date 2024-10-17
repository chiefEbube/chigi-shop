import type { Product } from "./product";

export interface CartItem extends Product {
  qtyInCart: number;
  discountedPrice: number;
  discount: number;
}
