import { IoBody } from "react-icons/io5";
import { createJSONStorage, StateStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-bea27-default-rtdb.firebaseio.com/zustand'


const storeApi: StateStorage = {
    getItem:  async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void>{
        await fetch(`${firebaseUrl}/${name}.json`,{
            method: 'PUT',
            body: value
        }).then(res => res.json());

        return
    },
    removeItem: function (name: string): unknown | Promise<unknown> {
        console.log('Remove item', name);
        throw new Error('Function not implemented.');
    }
};

export const firebaseStorage = createJSONStorage(() => storeApi);