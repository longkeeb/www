import GitHub from "./IconGithub.tsx";

export function Footer() {
  return (
    <footer class="w-11/12 max-w-5xl mx-auto mt-24 sm:!mt-28 mb-8 flex items-center justify-between ">
      <span class="flex items-center gap-4">
        <a
          class="flex items-center gap-2 text-gray-700"
          href="https://fresh.deno.dev"
        >
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge-dark.svg"
            alt="Made with Fresh"
          />
        </a>

        <a
          class="hover:underline flex gap-2 items-center"
          href="https://github.com/xb1g/longkeeb-fresh"
        >
          <GitHub class="h-5 w-5 text-gray-500" />
          Source
        </a>
      </span>
      <iframe
        src="https://canary.discord.com/widget?id=858718511013429311&theme=dark"
        width="350"
        height="300"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      >
      </iframe>
    </footer>
  );
}
