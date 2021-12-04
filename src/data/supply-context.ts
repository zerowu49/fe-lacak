import React from "react"
import Product from "./Product.model"
import UserModel from "./User.model"

const SupplyContext = React.createContext<{
    products: Product[];
    user: UserModel;
    getProduct: (id: string) => void;
    storeUser: (name: string,pass: string) => void;
    addProduct: (prod: Product) => void;
    logoutUser: () => void;
}>({
    products: [],
    user: {username:'',password:''},
    getProduct: () => {},
    storeUser: () => {},
    addProduct: () => {},
    logoutUser: () => {},
})

export default SupplyContext