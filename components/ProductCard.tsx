import { tw } from "twind";
import { Product } from "../utils/types.ts";
import IconCart from "./IconCart.tsx";

export function ProductCard(props: { product: Product }) {
  const { product } = props;
  return (
    <a key={product.id} href={`/products/${product.handle}`} class="group">
      <div
        class={tw`w-full bg-white rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 relative`}
      >
        {product.featuredImage && (
          <img
            src={product.featuredImage.url}
            alt={product.featuredImage.altText}
            width="400"
            height="400"
            class="w-full h-full object-center object-contain absolute block"
          />
        )}
        <div class="w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 group-hover:opacity-100 transition-all duration-500">
          <IconCart size={30} />
        </div>
      </div>
      <div class="flex items-center justify-between mt-3">
        <h3 class="text-lg text-gray-800 font-medium relative">
          {product.title}
          <span class="bg-gray-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-400" />
        </h3>
        <strong class="text-lg font-bold text-gray-800">
          {/* {formatCurrency(product.priceRange.minVariantPrice)} */}
        </strong>
      </div>
    </a>
  );
}
