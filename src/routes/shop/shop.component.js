import { useContext } from 'react'
import ProductCArd from '../../components/product-card/product-card'
import { ProductsContext } from '../../contexts/products.context'
import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCArd key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
