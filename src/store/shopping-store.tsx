import { create } from "zustand";

type Product = {
  id: string;
  url: string;
  name?: string;
  price?: number;
};

type State = {
  products: Product[];
};

type ShoppingState = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
};

const useShoppingStore = create<ShoppingState>((set) => ({
  products: [],
  addProduct: (product: Product) =>
    set((state: State) => ({ products: [...state.products, product] })),
  removeProduct: (product: Product) =>
    set((state: State) => ({
      products: [...state.products.filter((p) => p.id !== product.id)],
    })),
}));

export default useShoppingStore;
