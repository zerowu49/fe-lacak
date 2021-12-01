import React, { useState } from 'react'
import Product from './Product.model'
import SupplyContext from './supply-context'

const SupplyContextProvider: React.FC = (props) => {
  const [username, setUsername] = useState('')
  const [products, setProducts] = useState<Product[]>([
    {
      "id": '89oE1fsAxFK8A5dKYDaJ7',
      'name': 'Sayur Brokoli - Kebun Mama Andi',
      'amount': 2,
      'condition': 'Mildly Fresh',
      'location': 'Jakarta Distribution Center',
      'isConfirm': true,
    },
    {
      "id": 'nYfefOcD-42aHuNkOn-x0',
      'name': 'Kol - Kebun Teh Nini',
      'amount': 5,
      'condition': 'Fresh',
      'location': 'Kebun Teh Nini',
      'isConfirm': true,
    },
    {
      "id": '_u5B6UNvGp-7E4Cx6T1q2',
      'name': 'Sayur Kangkung - Bogor Farm',
      'amount': 5,
      'condition': 'Fresh',
      'location': 'Banten Distribution Center',
      'isConfirm': false,
    },
  ])

  const getProduct = (id: string) => {
    return products.filter(e => {
      return e.id === id
    })
  }
  
  const storeName = (username: string) => {
    console.log(username)
    setUsername(username)
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
    setUsername('')
  }

  return (
    <SupplyContext.Provider value={{ 
      products,
      username,
      getProduct,
      storeName,
      addProduct, 
      logoutUser,
    }}>
      {props.children}
    </SupplyContext.Provider>
  )
}

export default SupplyContextProvider
