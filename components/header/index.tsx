/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Logo from "@components/header/logo.tsx";
import Links from "@components/header/links.tsx";

export default function Header() {
  return (
    <div class={tw`w-full p-4 flex flex-row justify-between items-center`}>
      <Logo />
      <Links />
    </div>
  );
}
