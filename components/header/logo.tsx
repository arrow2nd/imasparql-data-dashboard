/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Logo() {
  return (
    <a class={tw`flex items-center`} href="/">
      <i class={tw`ti ti-at text-2xl md:text-4xl`} />
      <span class={tw`ml-2 md:ml-3 text-sm md:text-base`}>
        <div>im@sparql</div>
        <div>Data Dashboard</div>
      </span>
    </a>
  );
}
