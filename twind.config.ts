import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  extend: {
    duration: {
      "400": "400ms",
    },
  },
} as Options;
