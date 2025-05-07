import DetailsProduct from "./_components/DetailsProduct";

async function Product({ params }: { params: Promise<{ product: string }> }) {
  const { product } = await params;
  const data = await fetch(`https://dummyjson.com/products/${product}`);
  const dataProduct = await data.json();

  return <DetailsProduct dataProduct={dataProduct} />;
}

export default Product;
