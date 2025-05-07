export const fetchProducts = async (query: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DUMMYJSON}/search?q=${query}`
    );
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
