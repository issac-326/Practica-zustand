import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface Bear {
    id: number;
    name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];


  totalBears: () => number;


  incerementBlackBears: (by: number) => void;
  incerementPolarBears: (by: number) => void;
  incerementPandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()(
    
    persist(
    (set, get) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,

    bears: [{id: 1, name: 'Oso #1'}],
    incerementBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    incerementPolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    incerementPandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

    doNothing: () => set(state =>({ bears: [...state.bears]})),
    addBear: () => set(state => ({
        bears: [...state.bears, { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}`}]
    })),
    clearBears: () => set(() => ({ bears: []})),
        totalBears:() => {
            return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
        },

}), {name: 'bear-store'}
)


)
