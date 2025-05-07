import React, { useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import NotFound from "./NotFound";
import CardSkeleton from "./skeletons/CardsSkeleton";

type Props = {
  loading: boolean;
  products: Product[];
};

function ProductList({ loading, products }: Props) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [loading]);

  return (
    <div>
      {!isFirstRender.current && (
        <>
          {loading && <CardSkeleton />}
          {!loading && products?.length === 0 && <NotFound className="mt-20" />}
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:w-[90%] lg:w-3/4 m-auto mt-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
