import { Product } from "@/types/product";
import Image from "next/image";
import { inter } from "@/fonts";
import Button from "./buttons/Button";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const handleMore = (id: string = "") => {
    router.push(`/${id}`);
  };

  return (
    <div
      className={`rounded-[10px] p-4 transition ${inter.className}`}
      style={{ boxShadow: "0px 4px 13px 0px #00000040" }}
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={192}
        className="h-72 w-full mb-2"
      />
      <h2 className="font-medium text-lg text-nhc py-2">{product.title}</h2>
      <p title={product.description} className="text-sm text-[#7F7F7F]">
        {product.description.slice(0, 80) + "..."}
      </p>
      <div className="flex justify-between mt-5">
        <p className="font-bold mt-2 text-black">
          Price: <span className="text-nhc">{product.price}$</span>
        </p>
        <Button
          onClick={() => handleMore(product.id.toString())}
          title="More"
        />
      </div>
    </div>
  );
}
