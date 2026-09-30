import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set) => ({
            count: 0,

            increment: () =>
                set((state) => ({
                    count: state.count + 1,
                })),

            decrement: () =>
                set((state) => ({
                    count: state.count - 1,
                })),
        }),
        {
            name: "cart-storage",
        }
    )
);

export default useCartStore;


//     decrement: () =>
//        set((state) => {
//        if (state.count > 0) {
//         return {
//         count: state.count - 1,
//         };
//        } else {
//          return {
//         count: 0,
//       };
//     }
//    }),

//      decrement: () =>
//       set((state) => ({
//        count: Math.max(0, state.count - 1),
//       })),