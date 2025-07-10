import { create } from "zustand";

type Item = {
  id: string;
  name?: string;
};

type State = {
  items: Item[];
};

type ItemState = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const useShoppingStore = create<ItemState>((set) => ({
  items: [],
  addItem: (item: Item) =>
    set((state: State) => ({ items: [...state.items, item] })),
  removeItem: (item: Item) =>
    set((state: State) => ({
      items: [...state.items.filter((it) => it.id !== item.id)],
    })),
}));

export default useShoppingStore;
