import { tw } from "twind";
import { animation } from "twind/css";
import { Product } from "@/utils/types.ts";

import { aspectRatio } from "@twind/aspect-ratio";
import IconCart from "@/components/IconCart.tsx";

const rotate = animation("6s ease infinite alternate ", {
  "from, 0%, to": {
    transform: "rotate3d(0)",
  },
  [`${Math.random() > 0.5 ? "60%" : "30%"}`]: {
    transform: `rotate3d(3, 2, ${Math.random() > 0.5 ? "6" : "2"}, 3.142rad)`,
  },
  "100%": {
    transform: `rotate3d(180, 2, 0, 3.142rad)`,
  },
});

export function ProductCard(props: { product: Product }) {
  const { product } = props;
  return (
    <a key={product.id} href={`/products/${product.handle}`} class="group">
      <div
        class={tw`${
          aspectRatio(1, 1)
        } w-full  rounded-xl  transition-all duration-500 relative`}
      >
        <div
          class={tw`${rotate}w-full h-full flex items-center justify-center bg-[#ffffff22] transition-all hover:scale-150 hover:animate-none hover:delay-100 transform-gpu transition-transform hover:transition-all duration-500 ease-in-out `}
        >
          {product.featuredImage && (
            <img
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width="400"
              height="400"
              // class="w-full h-full object-center object-contain absolute block"
            />
          )}

          <div class="absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
            <IconCart size={30} />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mt-3">
        <h3 class="text-lg font-medium relative">
          {product.title}
          <span class="bg-red-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-500" />
        </h3>
        <strong class="text-lg font-bold text-green-300">
          {/* {formatCurrency(product.priceRange.minVariantPrice)} */}
          {product.price}
        </strong>
      </div>
    </a>
  );
}
