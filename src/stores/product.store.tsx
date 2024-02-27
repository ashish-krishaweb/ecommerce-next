import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { enableMapSet } from 'immer'

enableMapSet()

type Id = number
type Count = number

type ProductStore = {
   count: number
   itemsId: Map<Id, Count>
   removeItem: (id: Id) => void
   increment: (id: Id) => void
   decrement: (id: Id) => void
   cartItems: Array<any>
   updateCartItems: (items: Array<any>) => void
}

export type Product = { id: string; title: string; description: string; images: Array<string>; price: string }

const useProductStore = create<ProductStore>()(
   immer((set) => ({
      count: 0,
      itemsId: new Map(),
      cartItems: [],
      updateCartItems: (items) => {
         set((state) => {
            state.cartItems = items
         })
      },
      removeItem: (id) =>
         set((state) => {
            state.itemsId.delete(id)
            if ([...state.itemsId.keys()].length == 0) {
               state.cartItems = []
            }
         }),
      increment: (id) =>
         set((state) => {
            const count = state.itemsId.get(id) ?? 0
            state.itemsId.set(id, count + 1)
         }),
      decrement: (id) => {
         set((state) => {
            const count = state.itemsId.get(id)
            if (!count) return
            if (count == 0) {
               state.itemsId.delete(id)
            } else {
               state.itemsId.set(id, count - 1)
            }
         })
      },
   }))
)
export default useProductStore

export const useGetCartItemsId = () => useProductStore((state) => [...state.itemsId.keys()])
