import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import Countdown from "../islands/Countdown.tsx";
import Counter from "../islands/Counter.tsx";
import { Product } from "../utils/types.ts";
import { ProductCard } from "../components/ProductCard.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import data from "../data/products.json" assert { type: "json" };

interface Data {
  products: Product[];
}

export default function Home(ctx: PageProps<Data>) {
  const { url } = ctx;
  const products = data.products;

  return (
    <div>
      <HeadElement
        description="Shop for ergonomic mechanical keyboards and accessories."
        image={url.href + "og-image.png"}
        title="LongKeeb"
        url={url}
      />
      <Header />
      <div class="p-4 mx-auto max-w-screen-md">
        <div
          class="w-11/12 max-w-5xl mx-auto mt-28"
          aria-labelledby="information-heading"
        >
          <h2 id="information-heading" class="sr-only">
            Product List
          </h2>
          <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10 ">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
        {/* <Counter start={3} /> */}
      </div>
      <Footer />
    </div>
  );
}
