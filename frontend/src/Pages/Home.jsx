import { TbPlaceholder } from "react-icons/tb"
import Hero from "../Components/Layout/Hero"
import GenderCollectionSection from "../Components/Products/GenderCollectionSection"
import NewArrivals from "../Components/Products/NewArrivals"
import ProductDetails from "../Components/Products/ProductDetails"
import ProductGrid from "../Components/Products/ProductGrid"
import FeaturedCollection from "../Components/Products/FeaturedCollection"
import FeaturedSection from "../Components/Products/FeaturedSection"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useEffect, useState } from "react"

// ✅ FIX: Import fetchProductsByFilters thunk
import { fetchProductsByFilters } from"../redux/slice/productslice"

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)
  const [bestSellerProduct, setBestSellerProduct] = useState(null)

  useEffect(() => {
    // ✅ Fetch products for a specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    )

    // ✅ Fetch best seller
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
         ` ${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`,
        )
        setBestSellerProduct(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBestSeller()
  }, [dispatch])

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best sellers */}
      <h2 className="text-3xl text-center font-bold mb-6">Best Sellers</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller product ...</p>
      )}

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Models for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
        <FeaturedCollection />
        <FeaturedSection />
      </div>
    </div>
  )
}

export default Home;