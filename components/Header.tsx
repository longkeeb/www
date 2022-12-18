// import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url(/header_bg.svg)",
      }}
    >
      <div class="rainfall w-full h-full absolute" />
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
        <a href="/">
          <img
            src="/longkeebcurved.svg"
            class="w-14 h-14"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </a>
        <h1>
          <img
            src="/longkeebtext.svg"
            alt="LongKeeb"
            class="h-10"
            width="230"
            height="54"
          />
        </h1>
        {/* <Cart /> */}
      </nav>
    </header>
  );
}
