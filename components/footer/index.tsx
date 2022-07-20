/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Link from "@components/common/link.tsx";

export default function Footer() {
  return (
    <div class={tw`mt-8 w-full p-4 text(icon center)`}>
      <span>
        {"Made with "}
        <Link
          class={tw`hover:underline`}
          title="fresh"
          href="https://fresh.deno.dev/"
        >
          🍋
        </Link>
      </span>
    </div>
  );
}
