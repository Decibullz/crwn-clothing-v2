// eslint-disable-next-line
import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

// only used to push data to firebase
// import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categories: {},
})

export const CategoriesProvider = ({ children }) => {
  // eslint-disable-next-line
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  //  sets data to firebase, only needs to happen once. Normally not done through front end, but we have the data to push it up
  // useEffect(() => {
  //   addCollectionsAndDocuments('categories', SHOP_DATA)
  // }, [])
  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
