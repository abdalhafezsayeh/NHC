"use client";

import { useCallback, useState } from "react";
import { Product } from "@/types/product";
import { fetchProducts } from "@/lib/fetchProducts";
import ProductList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (query: string) => {
    setLoading(true);
    const data = await fetchProducts(query);
    setProducts(data);
    setLoading(false);
  }, []);

  const isResult = products && products?.length > 0 ? "pt-10" : "pt-40";

  return (
    <main className="w-full min-h-[calc(100dvh-240px)] p-4">
      <SearchBar
        onSearch={handleSearch}
        isResult={isResult}
        countProduct={products?.length || 0}
      />
      <ProductList loading={loading} products={products || []} />
    </main>
  );
}
