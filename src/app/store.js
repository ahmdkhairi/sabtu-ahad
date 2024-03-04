import { create } from "zustand";
import axios from "axios";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export const useFactStore = create((set) => ({
  facts: [],
  error: null, // Added to handle error state
  fetch: async (pond) => {
    try {
      const response = await axios.get(
        `https://cat-fact.herokuapp.com/${pond}`,
      );
      set({ facts: response.data, error: null }); // Assuming `response.data` is the array of facts
    } catch (error) {
      console.error("Failed to fetch data:", error);
      set({ facts: [], error: "Failed to fetch facts" }); // Update the state to reflect the error
    }
  },
}));
