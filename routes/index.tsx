import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { HeadElement } from "../components/HeadElement.tsx";
import Countdown from "../islands/Countdown.tsx";
import Counter from "../islands/Counter.tsx";
import { Product } from "../utils/types.ts";
import { ProductCard } from "../components/ProductCard.tsx";

interface Data {
  products: Product[];
}

export default function Home(ctx: PageProps<Data>) {
  const { url } = ctx;

  const products: Product[] = [
    {
      title: "cantor reversible pcb",
      price: 400,
      description: "a reversible pcb for the cantor",
      handle: "cantor-reversible-pcb",
      productType: "pcb",
      featuredImage: {
        url:
          "https://cdn.discordapp.com/attachments/892452195994337343/1052106519971385344/DB2695CD-1F2C-4393-B86A-8B798AEB2CE0.png",
        altText: "cantor pcb",
        width: 400,
        height: 400,
      },
    },
    {
      title: "cantor reversible pcb",
      price: 400,
      description: "a reversible pcb for the cantor",
      handle: "cantor-reversible-pcb",
      productType: "pcb",
      featuredImage: {
        url:
          "https://cdn.discordapp.com/attachments/892452195994337343/1052106519971385344/DB2695CD-1F2C-4393-B86A-8B798AEB2CE0.png",
        altText: "cantor pcb",
        width: 400,
        height: 400,
      },
    },
    {
      title: "cantor reversible pcb",
      price: 400,
      description: "a reversible pcb for the cantor",
      handle: "cantor-reversible-pcb",
      productType: "pcb",
      featuredImage: {
        url:
          "https://cdn.discordapp.com/attachments/892452195994337343/1052106519971385344/DB2695CD-1F2C-4393-B86A-8B798AEB2CE0.png",
        altText: "cantor pcb",
        width: 400,
        height: 400,
      },
    },
  ];
  return (
    <>
      <HeadElement
        description="Shop for ergonomic mechanical keyboards and accessories."
        image={url.href + "og-image.png"}
        title="LongKeeb"
        url={url}
      />
      <div class="p-4 mx-auto max-w-screen-md">
        <div class="flex flex-row">
          <img
            src="/longkeeblogo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="my-6">
            longkeeb
          </h1>
        </div>
        <div
          class="w-11/12 max-w-5xl mx-auto mt-28"
          aria-labelledby="information-heading"
        >
          <h2 id="information-heading" class="sr-only">
            Product List
          </h2>
          <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
            {products.map((product) => {
              return <ProductCard product={product} />;
            })}
          </div>
        </div>
        {/* <Counter start={3} /> */}
      </div>
    </>
  );
}
