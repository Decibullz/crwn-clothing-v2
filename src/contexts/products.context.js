// eslint-disable-next-line
import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line
import { addCollectionsAndDocuments } from '../utils/firebase/firebase.utils.js'

// only used to push data to firebase
// import SHOP_DATA from '../shop-data.js'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState([])

  //  sets data to firebase, only needs to happen once. Normally not done through front end, but we have the data to push it up
  // useEffect(() => {
  //   addCollectionsAndDocuments('categories', SHOP_DATA)
  // }, [])
  const value = { products }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
