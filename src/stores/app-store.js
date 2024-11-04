import {create} from "zustand"
import {persist} from "zustand/middleware"

const appStore = (set) => ({
  products: [
    {
      id: 1,
      name: "gelas",
      image: "../../public/coba.jpeg",
      quantity: 2,
      price: 5000
    },
    {
      id: 2,
      name: "gula",
      image: "../../public/coba.jpeg",
      quantity: 2,
      price: 7000
    },
    {
      id: 3,
      name: "piring",
      image: "../public/coba.jpeg",
      quantity: 2,
      price: 9000
    },
    {
      id: 4,
      name: "laptop",
      image: "../../public/coba.jpeg",
      quantity: 2,
      price: 15000,
      jumlah: 60   
    }
  ], 
  users: [],
  addProduct: (newProduct) => set(state => ({
    products: [...state.products, newProduct]
  })),
  removeProduct: (id) => set(state => ({
    products: state.products.filter(product => product.id !== id)
  })),
  updateProduct: (id, updateProduct) => set(state => ({
    products: state.products.map(product => product.id === id ? updateProduct: product )
  })),
  loginUser: (users) => set({users}),
  logoutUser: () => set({users: {}}), 
});
export const useAppStore = create(
  persist(appStore, {
    name: "app-store-product"
  })
)
