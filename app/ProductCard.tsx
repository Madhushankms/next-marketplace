// import { Product } from "@/lib/mocks";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Product } from "./generated/prisma/client";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="relative aspect-video">
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        )}
      </div>

      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <div className="text-xl font-bold text-green-500">
        {formatPrice(product.price)}
      </div>
      <p className="text-gray-600 mb-4">{product.description}</p>
    </div>
  );
}

export default ProductCard;
