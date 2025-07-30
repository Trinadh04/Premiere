import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSellers } from "../../redux/slice/productslice";
import ProductGrid from "../Products/ProductGrid";
import ProductDetails from "./ProductDetails";

const BestSellers = () => {
  const dispatch = useDispatch();
  const { bestSellers, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchBestSellers());
  }, [dispatch]);

  return (
    <div className="p-6">
      <ProductDetails/>
      <h2 className="text-2xl font-semibold text-center mb-6"> Best Sellers</h2>
      <ProductGrid products={bestSellers} loading={loading} error={error} />
    </div>
  );
};

export default BestSellers;
