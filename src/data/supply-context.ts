import React from "react"
import Product from "./Product.model"

const SupplyContext = React.createContext<{
    products: Product[];
    username: string;
    getProduct: (id: string) => void;
    storeName: (name: string) => void;
    addProduct: (prod: Product) => void;
    logoutUser: () => void;
}>({
    products: [],
    username: '',
    getProduct: () => {},
    storeName: () => {},
    addProduct: () => {},
    logoutUser: () => {},
})

export default SupplyContext