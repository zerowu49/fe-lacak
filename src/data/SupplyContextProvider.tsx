import React, { useState } from 'react'
import Product from './Product.model'
import SupplyContext from './supply-context'
import UserModel from './User.model'

const SupplyContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<UserModel>({})
  const [products, setProducts] = useState<Product[]>([])

  const getProduct = (id: string) => {
    return products.filter(e => {
      return e.ID === id
    })
  }
  
  const storeUser = (name: string,pass:string) => {
    setUser({username: name, password: pass})
  }

  const addProduct = (prod: Product) => {
    setProducts(curr => {
      return curr.concat(prod)
    })
  }

  const confirmProduct = (id: string) => {
    products.filter(p => {
      
    })
  }

  const logoutUser = () => {
    setUser({username:'',password:''})
  }

  return (
    <SupplyContext.Provider value={{ 
      products,
      user,
      getProduct,
      storeUser,
      addProduct, 
      logoutUser,
    }}>
      {props.children}
    </SupplyContext.Provider>
  )
}

export default SupplyContextProvider
