import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import Countdown from "../islands/Countdown.tsx";
import Counter from "../islands/Counter.tsx";
import { Product } from "../utils/types.ts";
import { ProductCard } from "../components/ProductCard.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

interface Data {
  products: Product[];
}

export default function Home(ctx: PageProps<Data>) {
  const { url } = ctx;

  const products: Product[] = [
    {
      id: "cantor-pcb",
      title: "cantor reversible pcb",
      price: 400,
      description: "a reversible pcb for the cantor",
      handle: "cantor-reversible-pcb",
      productType: "pcb",
      featuredImage: {
        url:
          "https://cdn.discordapp.com/attachments/953459286422462555/1052232206124335194/IMG_6092.png",
        altText: "cantor pcb",
        width: 400,
        height: 400,
      },
      variants: [
        {
          title: "cantor pcb",
          price: 400,
          // sku: "cantor-pcb",
          id: "cantor-pcb",
          availableForSale: true,
          // featuredImage: {
          //   url:
          //     "https://cdn.discordapp.com/attachments/953459286422462555/1052232206124335194/IMG_6092.png",
          //   altText: "cantor pcb",
          //   width: 400,
          // },
        },
      ],
    },
  ];
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
