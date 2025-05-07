import React from "react";
import Image from "next/image";
import { inter } from "@/fonts";
import { StarRating } from "@/components/Rating";
import { Product } from "@/types/product";

function DetailsProduct({ dataProduct }: { dataProduct: Product }) {
  return (
    <div className={`lg:w-2/3 m-auto mt-3 ${inter.className}`}>
      <div className="w-3/4 m-auto py-4 pb-10">
        <h2 className="text-nhc text-3xl py-6">{dataProduct.title}</h2>
        <Image
          src={dataProduct.images[0]}
          alt={dataProduct.brand}
          width={200}
          height={200}
          className="rounded mb-2 p-2 m-auto"
        />
        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between px-2 py-4">
          <ul className="leading-7">
            <li className="text-black">
              Price: <span className="text-nhc">{dataProduct.price}$</span>
            </li>
            <li className="flex items-center gap-2">
              Rating : <StarRating rating={dataProduct.rating} />
            </li>
            <li>
              Brand : <span className="text-nhc">{dataProduct.brand}</span>
            </li>
          </ul>
          <ul className="leading-7">
            <li>
              Discount Percentage :{" "}
              <span className="text-nhc">{dataProduct.discountPercentage}</span>
            </li>
            <li>
              Stock : <span className="text-nhc">{dataProduct.stock}</span>
            </li>
            <li>
              Category : <span className="text-nhc">smartphones</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-2">
        <h3 className="text-base py-1">Product Description</h3>
        <p className="text-[#7F7F7F]">{dataProduct.description}</p>
      </div>
      <h3 className="text-base py-2 mt-5 px-2">Product Images</h3>
      <div className="grid grid-cols-4 px-2">
        {dataProduct.images.map((image: string, index: number) => (
          <Image
            key={image + index}
            src={image}
            alt={"brand"}
            width={170}
            height={150}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default DetailsProduct;
